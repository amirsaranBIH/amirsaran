import React from "react";

import Navigation from "./components/Navigation";

function UsIndex() {
  return (
    <div>
      <section className="hero">
        <div className="container section">
          <section className="row social-media">
            <div className="col-md-6">
              <a
                href="https://www.linkedin.com/in/amir%C5%A1aran/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkedin.svg" alt="linkedin-logo-icon" />
              </a>
              <a
                href="https://github.com/amirsaranBIH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/github.svg" alt="github-logo-icon" />
              </a>
            </div>
            <div className="col-md-6">
              <Navigation />
            </div>
          </section>

          <section className="headlines">
            <h1>Amir Šaran</h1>
            <h2>Software and Web Developer</h2>
          </section>

          <a className="arrow-down" data-scroll href="#projects">
            <img src="/images/arrow-down.svg" alt="arrow-down" />
          </a>
        </div>
      </section>

      <section id="projects" className="projects section">
        <div className="container">
          <h2 className="section-header">Projects</h2>

          <div className="section-description">
            <p>
              Projects that I've made with my knowledge and experience with
              programming and web development. Code for the projects can be
              found on my{" "}
              <a
                className="link"
                href="https://github.com/amirsaranBIH"
                target="_blank"
                rel="noopener noreferrer"
                title="View code on GitHub"
              >
                {" "}
                GitHub
              </a>{" "}
              page.
            </p>
          </div>

          <div
            id="project-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ul className="carousel-indicators">
              <li
                data-target="#project-carousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#project-carousel" data-slide-to="1" />
              <li data-target="#project-carousel" data-slide-to="2" />
              <li data-target="#project-carousel" data-slide-to="3" />
              <li data-target="#project-carousel" data-slide-to="4" />
              <li data-target="#project-carousel" data-slide-to="5" />
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <a
                  href="/projects/team-alliance"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Team Alliance Website"
                >
                  <img
                    src="/images/team-alliance.jpg"
                    alt="team-alliance-home-page"
                  />
                </a>
                <div className="carousel-caption">
                  <h3>Team Alliance Website</h3>
                  <p>
                    Team Alliance is a team that I made to do website
                    development and design for clients.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/public/projects/team-alliance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code &rarr;
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href="/projects/john-lexter"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="John Lexter Portfolio Gallery"
                >
                  <img
                    src="/images/john-lexter.jpg"
                    alt="john-lexter-home-page"
                  />
                </a>
                <div className="carousel-caption">
                  <h3>John Lexter Portfolio Gallery</h3>
                  <p>
                    The website for John Lexter, a photographer is one of my
                    first clients that I had. I made a single page website for
                    showcasing his shots and a little bit about him.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/public/projects/john-lexter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code &rarr;
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href="/projects/memory"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Memory Game App"
                >
                  <img src="/images/memory-game.jpg" alt="memory-game" />
                </a>
                <div className="carousel-caption">
                  <h3>Memory Game App</h3>
                  <p>
                    A game to test your memory skills with beautiful images and
                    a great UX design.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/public/projects/memory"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code &rarr;
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href="/projects/sadpm"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="SadPM Website"
                >
                  <img src="/images/sadpm.jpg" alt="sadpm-home-page" />
                </a>
                <div className="carousel-caption">
                  <h3>SadPM Website</h3>
                  <p>
                    SadPM is a website where people who suffer depression and
                    anxiety are able to receive quick and helpful support. This
                    is a website I made for them for free.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/public/projects/sadpm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code &rarr;
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href="/projects/worldstory"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Worldstory Blog Website"
                >
                  <img
                    src="/images/worldstory.jpg"
                    alt="worldstory-home-page"
                  />
                </a>
                <div className="carousel-caption">
                  <h3>Worldstory Blog Website</h3>
                  <p>
                    Worldstory is a magazine blog website that I got the design
                    from PSD Freebies and I just made the website front-end from
                    just the PSD file to practice.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/public/projects/worldstory"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code &rarr;
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href="/projects/color-choice"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ColorChoice App"
                >
                  <img
                    src="/images/colorchoice.jpg"
                    alt="color-choice-home-page"
                  />
                </a>
                <div className="carousel-caption">
                  <h3>ColorChoice App</h3>
                  <p>
                    If you can't decide what color or color palette to chose you
                    can use ColorChoice to help you decide.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/public/projects/color-choice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code &rarr;
                  </a>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#project-carousel"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </a>
            <a
              className="carousel-control-next"
              href="#project-carousel"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="container">
          <h2 className="section-header">About me</h2>

          <div className="section-description">
            <p>
              My name is Amir and I am 19 years old. I come from Živinice, it's
              a small city in Bosnia and Herzegovina. I am completely
              self-taught in web technologies and design with online resources
              and lots of dedication.
            </p>
            <p>
              I am learning to design and develop websites from the end of 2016
              and I am still doing it today with the same passion as when I
              started. I started off in front-end development, but after a year
              into front-end I started doing back-end work with NodeJS and PHP
              and I really enjoy it.
            </p>
            <p>
              Other activities apart from web design and development are
              football/soccer, video games (League of Legends, Paladins and
              Hearthstone) and logo design.
            </p>
          </div>

          <section className="resume">
            <h3>Resume</h3>

            <img src="/images/resume-icon.png" alt="resume-icon" />

            <div className="resume-buttons">
              <a
                href="/AmirŠaran_Resume_ENG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="View online PDF"
              >
                View online
              </a>
              <a
                href="/AmirŠaran_Resume_ENG.pdf"
                title="Download resume"
                download
              >
                Download resume
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default UsIndex;
