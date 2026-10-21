import { useEffect } from "react";
import "./App.css";

// Set VITE_DISABLE_ANIMATIONS=true in .env to disable animations for testing
const DISABLE_ANIMATIONS = import.meta.env.VITE_DISABLE_ANIMATIONS === "true";

function App() {
  useEffect(() => {
    if (DISABLE_ANIMATIONS) {
      document.body.classList.add("no-animations");
    } else {
      document.body.classList.remove("no-animations");
    }
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">
              One weekend
              <span className="title-dots">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </span>
            </span>
            <span className="title-line">
              One castle
              <span className="title-dots">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </span>
            </span>
            <span className="title-line">
              One married couple
              <span className="title-dots">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </span>
            </span>
            <span className="title-line">
              And 28 other
              <span className="title-dots">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </span>
            </span>
          </h1>
          <p className="hero-tagline">
            Uncover secrets hidden within the walls of{" "}
            <a
              href="https://www.szidonia.hu/en"
              className="accent-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Síd​ó​nia Castle
            </a>
          </p>
          <p className="hero-subtext">
            Step into darkness. Solve the unsolvable. Become part of the legend.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="section-title">What Awaits You</h2>

        <div className="experience-cards">
          <div className="experience-card" data-card="evening-investigations">
            <h3>Evening Investigations</h3>
            <p>
              As darkness falls over the castle, your investigation begins.
              Armed with cryptic clues and mysterious artifacts, work with
              fellow guests to unravel the secrets locked away in Síd​ó​nia's
              ancient halls. Every shadow could hide the truth.
            </p>
          </div>

          <div className="experience-card" data-card="character-encounters">
            <h3>Character Encounters</h3>
            <p>
              Meet the enigmatic residents of the castle. Each character holds a
              piece of the puzzle. Question them carefully—some are allies,
              others have their own hidden agendas. Trust is a luxury you cannot
              afford.
            </p>
          </div>

          <div className="experience-card" data-card="atmospheric-immersion">
            <h3>Atmospheric Immersion</h3>
            <p>
              Experience the castle as a crime scene. Wander through candlelit
              corridors where secrets echo off ancient stone. Explore hidden
              chambers that could be murder locations. The oppressive atmosphere
              mirrors the psychological tension of hunting a killer. Just make
              sure to check if the door is locked before going to sleep!
            </p>
          </div>

          <div className="experience-card" data-card="collaborative-discovery">
            <h3>Collaborative Discovery</h3>
            <p>
              The greatest mysteries require collaboration. Combine insights
              with your husband and other guests, piece together evidence, and
              race against time to solve the murder before the weekend ends.
              Will you crack the case?
            </p>
          </div>

          <div className="experience-card" data-card="castle-banquets">
            <h3>Castle Banquets</h3>
            <p>
              Share meals with fellow investigators in the grand dining hall.
              Over wine and candlelight, discuss theories, form alliances, and
              perhaps uncover crucial information. Every conversation is a clue.
            </p>
          </div>

          <div className="experience-card" data-card="final-revelation">
            <h3>Final Revelation</h3>
            <p>
              As the weekend draws to a close, gather in the great hall for the
              dramatic conclusion. Will your theory prove correct? Will you
              unmask the culprit? Or will it be ágyesz-bogyesz? The truth awaits
              in the final hours.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-section">
        <div className="footer-content">
          <div className="event-details-grid">
            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <h3>
                <p className="detail-text">2027 january 22-24</p>
              </h3>
              <p className="detail-subtext">3 nights of immersive mystery</p>
              <p className="detail-subtext">
                To put the psychology tricks into practice, right after the
                exams
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🏰</div>
              <h3>
                <p className="detail-text">
                  <a
                    href="https://www.szidonia.hu/en"
                    className="accent-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Síd​ó​nia Castle
                  </a>
                </p>
              </h3>
              <p className="detail-subtext">Röjtökmuzsaj</p>
              <p className="detail-subtext">
                Far from safety, the silent trees feast on stolen screams.
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🔍</div>
              <h3>
                <p className="detail-text">Interactive Investigation</p>
              </h3>
              <p className="detail-subtext">
                Finally you can put your investigation skills to the test and
                not get murdered on the first night!
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">👥</div>
              <h3>
                <p className="detail-text">Group Experience</p>
              </h3>
              <p className="detail-subtext">
                30 participants, collaborative puzzles.
              </p>
            </div>
          </div>

          <p className="footer-text">
            <a
              href="https://gyilkoshetvege.hu/mi-az-a-gyilkos-hetvege"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find out more here
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
