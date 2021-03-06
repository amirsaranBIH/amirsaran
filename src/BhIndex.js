import React from "react";

import Navigation from "./components/Navigation";

function UsIndex() {
  return (
    <div>
      <section className="hero">
        <div className="container section">
          <section className="hero-header">
            <div className="social-media">
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
            <div className="navigation">
              <Navigation />
            </div>
          </section>

          <section className="headlines">
            <h1>Amir Šaran</h1>
            <h2>Softver i Web Developer</h2>
          </section>

          <div className="arrow-down">
            <a data-scroll href="#projects">
              <img src="/images/arrow-down.svg" alt="arrow-down" />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="projects section">
        <div className="container">
          <h2 className="section-header">Projekti</h2>

          <div className="section-description">
            <p>
              Projekti koje sam napravio sa svojim znanjem i iskustvom u
              programiranju i izradi web stranica. Kod za projekte možete naći
              na mom{" "}
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
              profilu.
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
                    Team Alliance je tim koji sam napravio da kodiram i
                    dizajniram web stranice za klijente.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/tree/master/public/projects/team-alliance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pogledaj Kod &rarr;
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
                    Internet stranica Johna Lextera, on je fotografa i jedan od
                    mojih prvih klijenata koje sam imao. Napravio sam web
                    stranicu za prikazivanje njegovih snimaka i malo o njemu.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/tree/master/public/projects/john-lexter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pogledaj Kod &rarr;
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
                    Igra za testiranje vaših sposobnosti pamćenja prekrasnim
                    slikama i odličnim UX dizajnom.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/tree/master/public/projects/memory"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pogledaj Kod &rarr;
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
                    SadPM je web stranica na kojoj ljudi koji pate od depresije
                    i tjeskobe mogu dobiti brzu i korisnu podršku. Ovo je sajt
                    koji sam napravio za klijenta besplatno.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/tree/master/public/projects/sadpm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pogledaj Kod &rarr;
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
                    Worldstory je blog sajt za koji sam dizajn našao na PSD
                    Freebies i pomoći dizajna napravio front-end sajta samo iz
                    PSD datoteke za praksu.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/tree/master/public/projects/worldstory"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pogledaj Kod &rarr;
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
                    Ako ne možete da odlučite koju boju ili paletu boja da
                    izaberete, možete da koristite ColorChoice da bi vam pomogao
                    da odlučite.
                  </p>
                  <a
                    href="https://github.com/amirsaranBIH/amirsaran/tree/master/public/projects/color-choice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pogledaj Kod &rarr;
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
          <h2 className="section-header">O meni</h2>

          <div className="section-description">
            <p>
              Moje ime je Amir i imam 20 godina. Dolazim iz Živinica, to je mali
              grad u Bosni i Hercegovini. Potpuno sam samouk u web tehnologijama
              i dizajnu sa online resursima i puno posvećenosti.
            </p>
            <p>
              Učim dizajnirati i razvijati web stranice od 2016. godine i još
              uvijek to radim danas sa istom strašću kao kad sam počeo. Počeo
              sam u front-end razvoju, ali nakon godinu dana u front-end sam
              počeo da radim back-end u NodeJS i PHP i zaista uživam u njemu.
            </p>
          </div>

          <section className="resume">
            <h3>Rezime</h3>

            <img src="/images/resume-icon.png" alt="resume-icon" />

            <div className="resume-buttons">
              <a
                href="/Amir_Šaran_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Pogledaj onlajn PDF"
              >
                Pogledaj Onlajn
              </a>
              <a href="/Amir_Šaran_CV.pdf" title="Preuzmi rezime" download>
                Preuzmi Rezime
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default UsIndex;
