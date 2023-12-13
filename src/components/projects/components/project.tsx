import { ProjectInterface } from '../utils/projects.const';

interface Props {
  project: ProjectInterface;
}
export function ProjectComponent(props: Readonly<Props>) {
  const mediaHandler = () => {
    switch (props.project.mediaType) {
      case 'webm':
      case 'mp4':
        return (
          <figure className="project__figure project__figure--demo">
            <video className="project__demo-video" controls muted>
              <source src={props.project.media.video} type="video/mp4" />
              <source src={props.project.media.video} type="video/webm" />
              Your browser is not supported!
            </video>
          </figure>
        );
      default:
        return (
          <picture className="project__figure project__figure--screenshot">
            <source
              srcSet={`
              ${props.project.media.files?.small}  1x,
              ${props.project.media.files?.medium} 2x
            `}
              media="(max-width: 2500px)"
            />
            <img
              srcSet={`
                ${props.project.media.files?.large} 1x,
                ${props.project.media.files?.large} 2x
              `}
              alt="betterBuildWins"
              className="project__screenshot"
            />
          </picture>
        );
    }
  };

  return (
    <div className="project">
      <div className="util-mb-4">
        <h3 className="heading-tertiary">{props.project.projectName}</h3>
      </div>

      <div className="project__details">
        {mediaHandler()}

        <div className="project__description">
          {props.project.projectDescription}

          <div className="project__info">
            <ul className="global-list">
              <li className="global-list__project-li">
                <a
                  rel="noopener"
                  href={props.project.githubUrl}
                  target="_blank"
                  className="global-list__link global-list__link--project"
                >
                  {props.project.githubUrlTitle} <span>&rarr;</span>
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
  );
}
