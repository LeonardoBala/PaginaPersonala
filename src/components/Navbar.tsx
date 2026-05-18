import { useNavScroll } from '../hooks/useNavScroll';

const navItems = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Work' },
  { href: '#education',  label: 'Education' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const scrolled = useNavScroll();

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="logo">
        Leo<span>.</span>Bala
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
