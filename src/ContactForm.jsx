import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)

    const response = await fetch('https://formspree.io/f/mjglnazg', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      setStatus('Thanks! Your message has been sent.')
      form.reset()
    } else {
      setStatus('Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-100">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-100">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-100">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="mt-1 w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded bg-lime-500 px-4 py-2 font-semibold text-slate-950"
      >
        Send message
      </button>

      {status && <p className="text-sm text-zinc-100">{status}</p>}
    </form>
  )
}