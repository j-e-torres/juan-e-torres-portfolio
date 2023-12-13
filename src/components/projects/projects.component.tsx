import './projects.styles.scss';

import {ProjectComponent} from './components/project';
import { projects } from './utils/projects.const';

export function Projects() {
  return (
    <section id="section-projects" className="section-projects">
      <div className="util-mb-10">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main"> Projects </span>
        </h2>
      </div>

      <div className="projects">
        {projects.map((project) => {
          return <ProjectComponent key={project.projectName} project={project} />;
        })}
      </div>
    </section>
  );
}
