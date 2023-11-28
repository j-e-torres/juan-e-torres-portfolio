import './skills.styles.scss';

export function Skills() {
  return (
    <section id="section-skills" className="section-skills">
      <div className="util-mb-10">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">Skills</span>
        </h2>
      </div>

      <div className="card-container">
        <div className="card-container__card">
          <div className="card-container__picture card-container__picture--1">&nbsp;</div>

          <h5 className="card-container__card-heading">
            <span className="card-container__card-heading-span card-container__card-heading-span--1">Front end</span>
          </h5>

          <div className="card-container__card-details">
            <ul className="global-list">
              <li className="global-list__card-li">JavaScript</li>
              <li className="global-list__card-li">HTML 5</li>
              <li className="global-list__card-li">CSS 3</li>
              <li className="global-list__card-li">React</li>
              <li className="global-list__card-li">Redux</li>
              <li className="global-list__card-li">Angular</li>
              <li className="global-list__card-li">Sass</li>
              <li className="global-list__card-li">Styled Components</li>
            </ul>
          </div>
        </div>

        <div className="card-container__card">
          <div className="card-container__picture card-container__picture--2">&nbsp;</div>

          <h5 className="card-container__card-heading">
            <span className="card-container__card-heading-span card-container__card-heading-span--1">Back end</span>
          </h5>

          <div className="card-container__card-details">
            <ul className="global-list">
              <li className="global-list__card-li">Express.js</li>
              <li className="global-list__card-li">PostgreSQL</li>
              <li className="global-list__card-li">Sequelize.js</li>
              <li className="global-list__card-li">MongoDB</li>
              <li className="global-list__card-li">Mongoose.js</li>
              <li className="global-list__card-li">Node.js</li>
              <li className="global-list__card-li">Strapi</li>
            </ul>
          </div>
        </div>

        <div className="card-container__card">
          <div className="card-container__picture card-container__picture--3">&nbsp;</div>

          <h5 className="card-container__card-heading">
            <span className="card-container__card-heading-span card-container__card-heading-span--1">Other</span>
          </h5>

          <div className="card-container__card-details">
            <ul className="global-list">
              <li className="global-list__card-li">Jest</li>
              <li className="global-list__card-li">Mocha</li>
              <li className="global-list__card-li">Chai</li>
              <li className="global-list__card-li">Git</li>
              <li className="global-list__card-li">Heroku</li>
              <li className="global-list__card-li">React-Native</li>
              <li className="global-list__card-li">TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
