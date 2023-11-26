import {Nav} from '../nav/nav.component';

export function Header() {
  return (
    <header>
      <Nav />
      <h1>Juan Torres</h1>
      <h2>Full Stack Developer</h2>

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
