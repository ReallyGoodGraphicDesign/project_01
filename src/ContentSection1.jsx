import TextStyleSectionGroup from './TextStyleSectionGroup.jsx'
import TextStyleSectionTitle from './TextStyleSectionTitle.jsx'
import TextStyleSectionSubtitle from './TextStyleSectionSubtitle.jsx' 
import TextStyleBody from './TextStyleBody.jsx'

function ContentSection({ id, group, title, subtitle, children, text, className = " " }) {
  return (
    <section id={id} 
	className={`
	scroll-mt-[76px] 
	rounded-[0.25rem] 
	bg-zinc-500 
	hover:bg-zinc-500/80 
	p-4 
	shadow-[0px_20px_30px_-10px]
	shadow-zinc-600 
	transition 
	duration-300 
	hover:-translate-y-[1px] 
	sm:p-10 
	${className}`}>
      <header className="mb-6 flex flex-col gap-2">
        {group ? <TextStyleSectionGroup>{group}</TextStyleSectionGroup> : null}
        {title ? <TextStyleSectionTitle>{title}</TextStyleSectionTitle> : null}
        {subtitle ? <TextStyleSectionSubtitle>{subtitle}</TextStyleSectionSubtitle> : null}
      </header>
      <div className="mt-4">
        {text ? <TextStyleBody>{text}</TextStyleBody> : children}
      </div>
    </section> 
  )
}

export default ContentSection