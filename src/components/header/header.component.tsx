import {Nav} from '../nav/nav.component';
import './header.styles.scss';

export function Header() {
  return (
    <header className="header">
      <Nav />

      <h1 className="heading-primary heading-primary--main">Juan Torres</h1>
      <h2 className="heading-primary heading-primary--sub util-mb-10">Full Stack Developer</h2>

      <div className="social-media">
        <a rel="noopener" target="_blank" href="https://github.com/j-e-torres" className="social-media__link">
          <svg className="social-media__icon social-media__icon--default">
            <use xlinkHref="./assets/img/sprite.svg#icon-github"></use>
          </svg>
        </a>

        <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/juan-torres-w2w2" className="social-media__link">
          <svg className="social-media__icon social-media__icon--default">
            <use xlinkHref="./assets/img/sprite.svg#icon-linkedin"></use>
          </svg>
        </a>
      </div>
    </header>
  );
}
