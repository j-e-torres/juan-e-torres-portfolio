import { Nav } from '../nav/nav.component';
import { GitHubSVG } from '../svgs/github-svg';
import { LinkedInSvg } from '../svgs/linkedin-svg';
import './header.styles.scss';


export function Header() {

  return (
    <header className="header">
      <Nav />

      <h1 className="heading-primary heading-primary--main">Juan Enrique Torres</h1>
      <h2 className="heading-primary heading-primary--sub util-mb-2">Software Engineer | Technical Mentor</h2>
      <h3 className="heading-primary heading-primary--sub-2 util-mb-10">Empowering Businesses & People Through Technology</h3>

      <div className="social-media">
        <a rel="noopener" target="_blank" href="https://github.com/j-e-torres" className="social-media__link">
          <span className="social-media__icon social-media__icon--default">
            <GitHubSVG />
          </span>
        </a>

        <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/juan-torres-w2w2" className="social-media__link">
          <span className="social-media__icon social-media__icon--default">
            <LinkedInSvg />
          </span>
        </a>
      </div>
    </header>
  );
}
