import { ProjectInterface } from "../projects.component"

interface Props {
  project: ProjectInterface;
}
export function ProjectComponent(props: Readonly<Props>) {

  return (
    <div className="project">
      <div className="util-mb-4">
        <h3 className="heading-tertiary">ListThis</h3>
      </div>

      <div className="project__details">
        <figure className="project__figure project__figure--demo">
          <video className="project__demo-video" controls muted>
            <source src={props.project.media} type="video/mp4" />
            <source src={props.project.media} type="video/webm" />
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

  )
}