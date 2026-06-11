import TextStyleSectionGroup from './TextStyleSectionGroup.jsx'
import TextStyleSectionTitle from './TextStyleSectionTitle.jsx'
import TextStyleSectionSubtitle from './TextStyleSectionSubtitle.jsx' 
import TextStyleBody from './TextStyleBody.jsx'

function ContentSection2({ id, title, subtitle, children, text, className = " " }) {
  return (
    <section id={id} className={`scroll-mt-16 rounded-[0.25rem] bg-zinc-500 p-4 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-600 sm:p-10 ${className}`}>
      <header className="mb-6 flex flex-col gap-2">
        <TextStyleSectionGroup
                children="Every instance of CS2 says this!" 
        />
        {title ? <TextStyleSectionTitle>{title}</TextStyleSectionTitle> : null}
        {subtitle ? <TextStyleSectionSubtitle>{subtitle}</TextStyleSectionSubtitle> : null}
      </header>
      <div className="mt-4">
        {text ? <TextStyleBody>{text}</TextStyleBody> : children}
      </div>
    </section> 
  )
}

export default ContentSection2