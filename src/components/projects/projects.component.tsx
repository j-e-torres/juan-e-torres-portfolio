import './projects.styles.scss';

export function Projects() {
  return (
    <section id="section-projects" className="section-projects">
      <div className="util-mb-10">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main"> Projects </span>
        </h2>
      </div>

      <div className="projects">
        <div className="project">
          <div className="util-mb-4">
            <h3 className="heading-tertiary">betterBuildWins</h3>
          </div>

          <div className="project__details">
            <picture className="project__figure project__figure--screenshot">
              <source
                srcSet="
                    ./assets/img/betterBuildWins-small.png  1x,
                    ./assets/img/betterBuildWins-medium.png 2x
                  "
                media="(max-width: 2500px)"
              />
              <img
                srcSet="
                    ./assets/img/betterBuildWins-large.png 1x,
                    ./assets/img/betterBuildWins-large.png 2x
                  "
                alt="betterBuildWins"
                className="project__screenshot"
              />
            </picture>

            <div className="project__description">
              <p>
                League of Legends tool where you can customize parameters and test out different combinations of
                Champions and Items to see what stats you gain. This includes a Champion stats breakdown similar to what
                you see in game. You can also view your calculated Auto Attack DPS and Effective HP. The website is
                still a work in progress.
              </p>

              <div className="project__info">
                <ul className="global-list">
                  <li className="global-list__project-li">
                    <a
                      rel="noopener"
                      href="https://github.com/j-e-torres/betterBuildWins"
                      className="global-list__link global-list__link--project"
                      target="_blank"
                    >
                      Github <span>&rarr;</span>
                    </a>
                  </li>
                  <li className="global-list__project-li">
                    <a
                      rel="noopener"
                      href="https://betterbuildwins.herokuapp.com/"
                      className="global-list__link global-list__link--project"
                      target="_blank"
                    >
                      betterBuildWins <span>&rarr;</span>
                    </a>
                  </li>
                </ul>

                <div className="project__tech-stack"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="util-mb-4">
            <h3 className="heading-tertiary">ListThis</h3>
          </div>

          <div className="project__details">
            <figure className="project__figure project__figure--demo">
              <video className="project__demo-video" controls muted>
                <source src="./assets/img/video/listThisDemo.webm" type="video/mp4" />
                <source src="./assets/img/video/listThisDemo.webm" type="video/webm" />
                Your browser is not supported!
              </video>
            </figure>

            <div className="project__description">
              ListThis is a mobile application built with React Native. It is a simple todo list application where you
              can create an account and create lists with tasks. You can add users to have access to lists that you
              create and share lists. Good for families that have a hard time coordinating grocery needs!
              <div className="project__info">
                <ul className="global-list">
                  <li className="global-list__project-li">
                    <a
                      rel="noopener"
                      href="https://github.com/j-e-torres/ListThis"
                      target="_blank"
                      className="global-list__link global-list__link--project"
                    >
                      Github <span>&rarr;</span>
                    </a>
                  </li>
                  {/* <!-- <li className="global-list__project-li">
                      <a
                      rel="noopener"
                        href="#"
                        className="global-list__link global-list__link--project"
                        >ListThis <span>&rarr;</span></a
                      >
                    </li> --> */}
                </ul>

                <div className="project__tech-stack"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
