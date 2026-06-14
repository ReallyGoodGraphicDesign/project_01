// GET /api/data3
// Server-side proxy for Chart 3 (pie) data. The browser calls this same-origin
// endpoint; this Function fetches the real Google source and relays its JSON.
// The upstream URL lives in the SHEET_URL3 secret, so it never ships in the
// client bundle and the sheet itself can stay private.
//
// No auth gate yet — anyone hitting the site can read /api/data3. When the data
// warrants a login, copy gallery's functions/api/_auth.js and add a
// verifyToken() check at the top, exactly like gallery/functions/api/data.js.

// Placeholder data returned when SHEET_URL3 is not configured, so the chart
// renders immediately in local dev before the Apps Script endpoint exists.
// Keys match Chart3Pie's nameKey="name" / dataKey="value". Production should
// ALWAYS have the secret set; this is a dev convenience.
const SAMPLE = [
  { name: "Sample A", value: 40 },
  { name: "Sample B", value: 25 },
  { name: "Sample C", value: 20 },
  { name: "Sample D", value: 15 },
];

export async function onRequestGet({ env }) {
  if (!env.SHEET_URL3) {
    return Response.json(SAMPLE, {
      headers: { "Cache-Control": "no-store", "X-Data-Source": "sample" },
    });
  }

  // An Apps Script web app 302-redirects to script.googleusercontent.com;
  // fetch follows redirects by default.
  const upstream = await fetch(env.SHEET_URL3, {
    headers: { Accept: "application/json" },
  });
  if (!upstream.ok) {
    return new Response("Upstream error", { status: 502 });
  }

  const body = await upstream.text();
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "private, max-age=60",
      "X-Data-Source": "sheet",
    },
  });
}
