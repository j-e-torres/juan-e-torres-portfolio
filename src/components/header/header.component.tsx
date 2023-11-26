import { Nav } from '../nav/nav.component';
import './header.styles.scss';

export function Header() {
  return (
    <header className='header util-mb-4'>
      <Nav />

      <h1 className='heading-primary heading-primary--main'>Juan Torres</h1>
      <h2 className='heading-primary heading-primary--sub'>Full Stack Developer</h2>

      <div>
        <a>
          <svg></svg>
        </a>

        <a>
          <svg></svg>
        </a>
      </div>
    </header>
  );
}
