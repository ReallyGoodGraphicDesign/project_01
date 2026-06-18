import TextStyleSectionGroup from './TextStyleSectionGroup.jsx'
import TextStyleSectionTitle from './TextStyleSectionTitle.jsx'
import TextStyleSectionSubtitle from './TextStyleSectionSubtitle.jsx' 
import TextStyleBody from './TextStyleBody.jsx'

function ContentSection1({ id, group, unusedOverride, title, subtitle, children, text, className = " " }) {
  return (
    <section id={id} 
	className={`
	scroll-mt-[60px] 
	rounded-[0.25rem] 
	bg-zinc-500 
	hover:bg-zinc-500/80 
	shadow-[0px_20px_30px_-10px]
	shadow-zinc-600/0 
	transition 
	duration-300 
	hover:-translate-y-[1px] 
	p-5
	sm:p-5
	md:p-5.5
	lg:p-6
	xl:p-6.5
	2xl:p-7	
	${className}
	`}>
      <header className="mb-6 flex flex-col gap-2">
        {group ? 
		<TextStyleSectionGroup >
			{group}
		</TextStyleSectionGroup> 
		: 
		unusedOverride ? 
		<TextStyleSectionGroup children="DEFAULT TEXT" />
		: 
		null	
		}
        {title ? <TextStyleSectionTitle>{title}</TextStyleSectionTitle> : null}
        {subtitle ? <TextStyleSectionSubtitle>{subtitle}</TextStyleSectionSubtitle> : null}
      </header>
      <div className="mt-4">
        {text ? <TextStyleBody>{text}</TextStyleBody> : children}
      </div>
    </section> 
  )
}

export default ContentSection1