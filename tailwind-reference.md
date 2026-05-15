# Tailwind Reference

## Core concepts

- Tailwind uses utility classes for styling, not custom CSS rules.
- Combine utilities on elements to build UI quickly.
- Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) to change styles at breakpoints.
- Use state prefixes (`hover:`, `focus:`, `active:`) for interaction states.
- Keep custom CSS minimal; most layout and style should be in Tailwind classes.

## Layout utilities

- `container` — centered responsive content width
- `mx-auto` — horizontal centering
- `w-full` — full width
- `max-w-6xl` — max width constraint
- `min-h-screen` — full viewport height
- `flex`, `grid` — layout containers
- `flex-col`, `flex-row` — flex direction
- `items-center`, `justify-center`, `justify-between`
- `gap-4`, `gap-x-6`, `gap-y-3`

## Spacing

- `p-4`, `pt-6`, `pr-8`, `pb-4`, `pl-2`
- `px-6`, `py-4`
- `m-4`, `mt-8`, `mb-3`, `ml-2`, `mr-2`
- `space-x-4`, `space-y-3`

## Typography

- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`
- `font-semibold`, `font-bold`, `font-medium`, `font-light`
- `leading-tight`, `leading-relaxed`, `leading-normal`
- `tracking-tight`, `tracking-wide`
- `text-white`, `text-slate-300`, `text-cyan-400`
- `text-center`, `text-left`, `text-right`

## Backgrounds and color

- `bg-slate-950`, `bg-slate-900/80`, `bg-cyan-500`
- `bg-white/5`, `bg-slate-950/70`
- `bg-gradient-to-r`, `from-cyan-500`, `to-slate-900`
- `text-slate-100`, `text-slate-300`
- `border-slate-800`, `border-cyan-500/50`

## Borders and rounding

- `border`, `border-2`, `border-slate-800`
- `rounded`, `rounded-lg`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- `ring`, `ring-2`, `ring-cyan-500`

## Effects and motion

- `shadow`, `shadow-md`, `shadow-xl`, `shadow-2xl`
- `opacity-75`, `opacity-50`
- `backdrop-blur`, `backdrop-blur-xl`
- `transition`, `duration-200`, `ease-out`

## State variants

- `hover:bg-cyan-400`
- `hover:text-white`
- `hover:scale-105`
- `focus:outline-none`
- `focus:ring-2`
- `focus:ring-cyan-500`
- `active:scale-95`
- `disabled:opacity-50`
- `disabled:cursor-not-allowed`

## Responsive prefixes

- `sm:` — from small screens and up
- `md:` — from medium screens and up
- `lg:` — from large screens and up
- `xl:` — from extra-large screens and up
- `2xl:` — from 2xl screens and up

Example:

```jsx
<div className="text-base sm:text-lg lg:text-2xl">
  Responsive heading
</div>
```

## Common patterns

### Card

```jsx
<div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
  ...
</div>
```

### Button

```jsx
<button className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
  Click me
</button>
```

### Centered page wrapper

```jsx
<main className="mx-auto min-h-screen max-w-6xl px-6 py-10">
  ...
</main>
```

## Extending Tailwind

Put custom theme values in `tailwind.config.js`.

Example:

```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#0ea5e9',
          700: '#0369a1',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
}
```

Then use:

- `bg-brand-500`
- `shadow-glow`

## Recommended official docs

- https://tailwindcss.com/docs
- https://tailwindcss.com/docs/installation
- https://tailwindcss.com/docs/responsive-design
- https://tailwindcss.com/docs/hover-focus-and-other-states
