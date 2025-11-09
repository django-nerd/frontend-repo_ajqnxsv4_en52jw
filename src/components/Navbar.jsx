import { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="font-semibold tracking-tight text-gray-900 text-lg">
          <span className="text-blue-600">Pro</span>folio
        </button>
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {s.label}
            </button>
          ))}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-black transition-colors"
          >
            Resume
          </a>
        </div>
        <button onClick={() => setOpen((o) => !o)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700">
          <span className="sr-only">Toggle Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className="text-left px-2 py-2 rounded-md hover:bg-gray-50 text-gray-700"
              >
                {s.label}
              </button>
            ))}
            <a href="#" className="px-2 py-2 rounded-md bg-gray-900 text-white text-center">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
