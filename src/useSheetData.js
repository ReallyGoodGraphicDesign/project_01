import { useEffect, useState } from 'react'

// Fetches chart data from the same-origin /api/data Function, which proxies
// the Google source server-side. Returns { data, loading, error }.
//
// Because the upstream URL is a server secret, this hook never sees (or needs)
// it — it just talks to our own endpoint and gets clean JSON back.
export default function useSheetData(endpoint = '/api/data') {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json()
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [endpoint])

  return { data, loading, error }
}
