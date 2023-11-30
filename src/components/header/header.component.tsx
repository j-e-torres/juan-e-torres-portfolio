import {Nav} from '../nav/nav.component';
import './header.styles.scss';

import githubIcon from '../../assets/img/SVG/github.svg';
import linkedInIcon from '../../assets/img/SVG/linkedin.svg';

// import test from '../../assets/img/sprite.svg'


export function Header() {
  return (
    <header className="header">
      <Nav />

      <h1 className="heading-primary heading-primary--main">Juan Torres</h1>
      <h2 className="heading-primary heading-primary--sub util-mb-10">Full Stack Developer</h2>

      <div className="social-media">
        <a rel="noopener" target="_blank" href="https://github.com/j-e-torres" className="social-media__link">
          {/* <svg className="social-media__icon social-media__icon--default">
            <use xlinkHref={githubIcon}></use>
          </svg> */}
          <img src={githubIcon} alt="GitHub" className="social-media__icon social-media__icon--default">
          </img>
        </a>

        <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/juan-torres-w2w2" className="social-media__link">
          <svg className="social-media__icon social-media__icon--default">
            <use xlinkHref={linkedInIcon}></use>
          </svg>
        </a>
      </div>
    </header>
  );
}
