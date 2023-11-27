
import './about.styles.scss';
export function About() {

  return (
    <section id="section-about" className="section-about">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./assets/img/video/bigapple.mp4" type="video/mp4" />

          <source src="./assets/img/video/bigapple.mp4" type="video/webm" />

          Your browser is not supported!
        </video>
      </div>

      <div className="util-mb-10">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">About</span>
        </h2>
      </div>

      <div className="about">
        <div className="about__profile">
          {/* <!-- <figure className="about__figure">
          <img
            src="img/placeholderProfile.jpg"
            alt="Juan Enrique Torres"
            className="about__photo"
          />

          <figcation className="about__caption"> Juan E. Torres </figcation>
        </figure> --> */}

          <div className="about__description">
            <div className="about__education util-mb-4">
              <div>
                <h4 className="heading-quaternary">
                  Fullstack Academy
                  <span>Jan 2019 &mdash; Jun 2019</span>
                </h4>

                <p className="about__text about__text--1">
                  Certificate of Completion, Web Development Immersive
                </p>
              </div>

              <div>
                <h4 className="heading-quaternary">
                  Pace University <span>Sep 2008 &mdash; Dec 2016</span>
                </h4>

                <p className="about__text about__text--1">
                  Bachelor of Business Administration, Concentration in Human
                  Resources Management
                </p>
              </div>
            </div>

            <p className="about__text">
              Hello and welcome, my name is Juan Torres and I am a Full
              Stack Developer based in NYC, looking for front end, back
              end, or full stack developer opportunities.
            </p>

            <p className="about__text">
              I am many things, ambitious, resolute, dedicated, enthusiastic,
              eager to learn, and steadfast. But don't take it from me, see what others
              are saying!
            </p>

            {/* <!-- <button className="btn-inline">
            <a href="#">View Reviews<span>&rarr;</span> </a>
          </button> --> */}
          </div>
        </div>

        <div className="about__reviews">
          <figure className="about__review">
            <blockquote className="about__review-text">
              Muy Inteligente (Very Intelligent).
            </blockquote>

            <figcaption className="about__review-info">
              <div className="about__review-person">&mdash; Mom</div>

              <div className="about__review-rating">10</div>
            </figcaption>
          </figure>

          <figure className="about__review">
            <blockquote className="about__review-text">
              I want to be just like him!
            </blockquote>

            <figcaption className="about__review-info">
              <div className="about__review-person">&mdash; Me</div>

              <div className="about__review-rating">9.9</div>
            </figcaption>
          </figure>

          <figure className="about__review">
            <blockquote className="about__review-text">
              Such a cool guy, great friend to have!
            </blockquote>

            <figcaption className="about__review-info">
              <div className="about__review-person">&mdash; A friend</div>

              <div className="about__review-rating">9.5</div>
            </figcaption>
          </figure>

          <figure className="about__review">
            <blockquote className="about__review-text">
              Why is he looking at my fries?
            </blockquote>

            <figcaption className="about__review-info">
              <div className="about__review-person">&mdash; Stranger</div>

              <div className="about__review-rating">2.2</div>
            </figcaption>
          </figure>

          <figure className="about__review">
            <blockquote className="about__review-text">
              Sometimes forget to take out trash.
            </blockquote>

            <figcaption className="about__review-info">
              <div className="about__review-person">&mdash; Wife</div>

              <div className="about__review-rating">10</div>
            </figcaption>
          </figure>

          <figure className="about__review">
            <blockquote className="about__review-text">
              Dependable, hardworking.
            </blockquote>

            <figcaption className="about__review-info">
              <div className="about__review-person">&mdash; Previous Jobs</div>

              <div className="about__review-rating">9.9</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

  )
}