import './nav.styles.scss';

export function Nav() {

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {

    const href = event.currentTarget.href;
    const sectionId = href.split('#')[1];

    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <nav className='navbar'>
      <ul className='navbar__nav-list'>
        <li className='navbar__nav-item'><a onClick={e => scrollToSection(e)} className='navbar__nav-link' href="#section-about"><span>About</span></a></li>
        <li className='navbar__nav-item'><a onClick={e => scrollToSection(e)} className='navbar__nav-link' href="#section-skills"><span>Skills</span></a></li>
        <li className='navbar__nav-item'><a onClick={e => scrollToSection(e)} className='navbar__nav-link' href="#section-projects"><span>Projects</span></a></li>
      </ul>
    </nav>
  )
}