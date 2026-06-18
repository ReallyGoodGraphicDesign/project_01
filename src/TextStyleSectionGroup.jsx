export default function TextStyleSectionGroup({ children, hidden }) {
        return (
                <p className={hidden ? 'hidden' : 'inline-flex rounded-full bg-lime-500 px-3 py-1 text-[.75rem] font-semibold uppercase tracking-[.5em] text-white mb-2'}>
                        {children}
                </p>
        )
}