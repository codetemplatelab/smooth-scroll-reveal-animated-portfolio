import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../components/Container'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ brand }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-cyan-200/70 bg-white/70 shadow-[0_8px_30px_-20px_rgba(14,165,233,0.55)] backdrop-blur-xl'
          : 'border-transparent bg-white/35 backdrop-blur-md'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="#home"
          className="font-mono-title text-lg font-semibold tracking-wide text-slate-900"
        >
          {brand}
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-200/80 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul
          className={`absolute left-4 right-4 top-[72px] rounded-2xl border border-cyan-200/70 bg-white/95 p-4 transition-all duration-300 md:static md:flex md:w-auto md:items-center md:gap-7 md:border-none md:bg-transparent md:p-0 ${
            mobileOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0 md:visible md:translate-y-0 md:opacity-100'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="relative block py-2 text-sm font-medium text-slate-700 transition-colors hover:text-cyan-700 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-[linear-gradient(90deg,#06b6d4,#6366f1)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}

export default Navbar
