import { useState } from 'react';

const navItems = [
  { href: '#bar-chart', label: 'Bar Chart' },
  { href: '#line-chart', label: 'Line Chart' },
  { href: '#pie-chart', label: 'Pie Chart' },
  { href: '#map-1', label: 'Map' },
  { href: '#contact_form', label: 'Contact' }
];

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

function Header({className = " "}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

return (
<header 

className={`
sticky 
top-0 
z-[1100] 
w-full 
bg-zinc-400 
text-zinc-100 
shadow-[0_10px_50px_rgba(0,0,0,.5)]
${className}
`}>
	<div 
	className="
	mx-auto 
	flex 
	h-11 
	w-full 
	items-center 
	justify-between 
	px-0 
	max-lg:justify-end
	">
		<nav className=" h-full flex-1 items-center justify-around uppercase hidden lg:flex">
		{navItems.map(({ href, label }) => (
			<a
			key={href}
			href={href}
			className="
			h-full 
			flex-1 
			pt-[13px] 
			text-center 
			leading-tight 
			text-zinc-100 
			text-sm
			no-underline 
			transition-colors 
			duration-500 
			hover:bg-lime-600/75 
			active:bg-white/20"
			>
				{label}
			</a>
		))}
		</nav>
		<button
		type="button"
		className="flex items-center p-1 text-zinc-100 lg:hidden mr-2"
		onClick={() => setMenuOpen(true)}
		aria-label="Open menu"
		>
			<HamburgerIcon />
		</button>
	</div>

	{menuOpen && (
	<div className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-lime-700/100">
		<button
		type="button"
		className="absolute right-1.5 top-1.5 flex items-center p-1 text-zinc-100"
		onClick={() => setMenuOpen(false)}
		aria-label="Close menu"
		>
			<CloseIcon />
		</button>
		<nav className="flex flex-col gap-20 text-center">
		{navItems.map(({ href, label }) => (
			<a
			key={href}
			href={href}
			onClick={handleNavClick}
			className="text-2xl uppercase text-zinc-100 no-underline"
			>
				{label}
			</a>
		))}
		</nav>
	</div>
)}
</header>
);
}

export default Header;
