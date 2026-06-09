/**
 * Web app endpoint for template_1's chart data.
 *
 * Reads the first sheet, turns each row into an object keyed by the
 * (lowercased, trimmed) header row, coerces numeric cells to numbers, and
 * returns the whole thing as a JSON array. Generic on purpose: add or rename
 * columns in the sheet and this needs no changes.
 *
 * A sheet of:
 *     Month | Value
 *     Jan   | 120
 *     Feb   | 145
 * becomes:
 *     [{"month":"Jan","value":120},{"month":"Feb","value":145}]
 *
 * DEPLOY (from the sheet: Extensions > Apps Script, paste this, Save):
 *   Deploy > New deployment > Web app
 *     Execute as:      Me
 *     Who has access:  Anyone
 *   Authorize when prompted, then copy the ".../exec" URL.
 *   - Local:  put it in template_1/.dev.vars as  SHEET_URL=...
 *   - Prod:   set it as the SHEET_URL secret in the Cloudflare Pages dashboard.
 *
 * EDITING LATER: to keep the same /exec URL, use
 *   Manage deployments > (edit, pencil) > Version: New version > Deploy.
 * A brand-new deployment mints a NEW url instead.
 */
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const rows = sheet.getDataRange().getValues();
  const headers = rows.shift().map((h) => String(h).trim().toLowerCase());

  const data = rows
    // drop fully-empty rows (trailing blanks, spacer rows)
    .filter((row) => row.some((cell) => cell !== '' && cell !== null))
    .map((row) => {
      const obj = {};
      headers.forEach((key, i) => {
        if (!key) return; // skip unlabeled columns
        const cell = row[i];
        if (typeof cell === 'number') {
          obj[key] = cell;
        } else {
          const num = Number(cell);
          obj[key] = cell !== '' && !isNaN(num) ? num : cell;
        }
      });
      return obj;
    });

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
