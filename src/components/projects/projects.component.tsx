import './projects.styles.scss';

// import betterBuildWinsSmall from '../../assets/img/betterBuildWins-small.png';
// import betterBuildWinsMedium from '../../assets/img/betterBuildWins-medium.png';
// import betterBuildWinsLarge from '../../assets/img/betterBuildWins-large.png';

import listThisDemo from '../../assets/img/video/listThisDemo.webm';
import { ProjectComponent } from './components/project';

export type MediaType = 'webm';
export interface ProjectInterface {
  projectName: string;
  media: string;
  mediaType: MediaType;
  projectDescription: string;
  githubUrl: string;
  githubUrlTitle: string;
}
const projects: ProjectInterface[] = [
  {
    projectName: 'ListThis',
    media: listThisDemo,
    mediaType: 'webm',
    projectDescription: "ListThis is a mobile application built with React Native. It is a simple todo list application where you can create an account and create lists with tasks. You can add users to have access to lists that you create and share lists. Good for families that have a hard time coordinating grocery needs!",
    githubUrl: 'https://github.com/j-e-torres/ListThis',
    githubUrlTitle: 'Github'
  }
]
export function Projects() {
  return (
    <section id="section-projects" className="section-projects">
      <div className="util-mb-10">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main"> Projects </span>
        </h2>
      </div>

      <div className="projects">
        {/* <div className="project">
          <div className="util-mb-4">
            <h3 className="heading-tertiary">betterBuildWins</h3>
          </div>

          <div className="project__details">
            <picture className="project__figure project__figure--screenshot">
              <source
                srcSet={`
                ${betterBuildWinsSmall}  1x,
                ${betterBuildWinsMedium} 2x
              `}
                media="(max-width: 2500px)"
              />
              <img
                srcSet={`
                ${betterBuildWinsLarge} 1x,
                ${betterBuildWinsLarge} 2x
              `}
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
        </div> */}




        <ProjectComponent project={projects[0]} />

      </div>
    </section>
  );
}
