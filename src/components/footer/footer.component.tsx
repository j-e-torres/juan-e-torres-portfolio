import './footer.styles.scss';
import { GitHubSVG } from '../svgs/github-svg';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__box">
        <p className="footer__text">
          Thank you for visiting my page. To view more information about my work history, experiences, and skills, feel
          free to visit my Linkedin or GitHub.
        </p>

        <div className="footer__buttons">
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/juan-torres-w2w2/"
            className="btn btn__linkedin--blue"
          >
            Linked<span>In</span>
          </a>

          <a rel="noopener" href="https://github.com/j-e-torres/" className="btn btn__github--grey" target="_blank">
            <span className="social-media__icon social-media__icon--github--btn">
              {/* <svg className="social-media__icon social-media__icon--github--btn">
                <use xlinkHref="../../assets/img/sprite.svg#icon-github"></use>
              </svg> */}
              {/* <img src={githubIcon} alt="GitHub" className="social-media__icon social-media__icon--github--btn">
              </img> */}
              <GitHubSVG />
            </span>
            GitHub
          </a>
        </div>
      </div>

      <p className="footer__copyright">
        &copy; Copyright {currentYear} Juan E. Torres. All Rights Reserved. Credit to
        <a rel="noopener" href="http://codingheroes.io/resources/" target="_blank" className="footer__link">
          Jonas Schmedtmann
        </a>
        for design inspiration and examples through his course
        <a
          rel="noopener"
          href="https://www.udemy.com/course/advanced-css-and-sass/"
          target="_blank"
          className="footer__link"
        >
          Advanced CSS and Sass
        </a>
        .
      </p>
    </footer>
  );
}
