import './nav.styles.scss';

export function Nav() {
  return (
    <nav className='navbar'>
      <ul className='navbar__nav-list'>
        <li className='navbar__nav-item'><a className='navbar__nav-link' href="#section-about"><span>About</span></a></li>
        <li className='navbar__nav-item'><a className='navbar__nav-link' href="#section-skills"><span>Skills</span></a></li>
        <li className='navbar__nav-item'><a className='navbar__nav-link' href="#section-projects"><span>Projects</span></a></li>
      </ul>
    </nav>
  )
}