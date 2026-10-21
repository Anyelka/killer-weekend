import './App.css'

function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">One weekend</span>
            <span className="title-line">One castle</span>
            <span className="title-line">One married couple...</span>
            <span className="title-line">And 28 other</span>
          </h1>
          <p className="hero-tagline">Uncover secrets hidden within the walls of Síd​ó​nia Castle</p>
          <p className="hero-subtext">Step into darkness. Solve the unsolvable. Become part of the legend.</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="section-title">What Awaits You</h2>
        
        <div className="experience-cards">
          <div className="experience-card">
            <h3>Evening Investigations</h3>
            <p>
              As darkness falls over the castle, your investigation begins. Armed with cryptic clues and mysterious artifacts, work with fellow guests to unravel the secrets locked away in Síd​ó​nia's ancient halls. Every shadow could hide the truth.
            </p>
          </div>

          <div className="experience-card">
            <h3>Character Encounters</h3>
            <p>
              Meet the enigmatic residents of the castle. Each character holds a piece of the puzzle. Question them carefully—some are allies, others have their own hidden agendas. Trust is a luxury you cannot afford.
            </p>
          </div>

          <div className="experience-card">
            <h3>Atmospheric Immersion</h3>
            <p>
              Experience the castle as it was meant to be witnessed. Wander through candlelit corridors, explore hidden chambers, and feel the weight of centuries pressing down. The atmosphere is as much a mystery as any clue.
            </p>
          </div>

          <div className="experience-card">
            <h3>Collaborative Discovery</h3>
            <p>
              The greatest mysteries require collaboration. Combine insights with other guests, piece together evidence, and race against time to solve the murder before the weekend ends. Will you crack the case?
            </p>
          </div>

          <div className="experience-card">
            <h3>Castle Banquets</h3>
            <p>
              Share meals with fellow investigators in the grand dining hall. Over wine and candlelight, discuss theories, form alliances, and perhaps uncover crucial information. Every conversation is a clue.
            </p>
          </div>

          <div className="experience-card">
            <h3>Final Revelation</h3>
            <p>
              As the weekend draws to a close, gather in the great hall for the dramatic conclusion. Will your theory prove correct? Will you unmask the culprit? The truth awaits in the final hours.
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
              <h3>Dates</h3>
              <p className="detail-text">January 22-24, 2027</p>
              <p className="detail-subtext">3 nights of immersive mystery</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🏰</div>
              <h3>Location</h3>
              <p className="detail-text">Síd​ó​nia Castle</p>
              <p className="detail-subtext">Hungary</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🔍</div>
              <h3>Experience</h3>
              <p className="detail-text">Interactive Investigation</p>
              <p className="detail-subtext">Solve mysteries, uncover clues</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">👥</div>
              <h3>Format</h3>
              <p className="detail-text">Group Experience</p>
              <p className="detail-subtext">30 participants, collaborative puzzles</p>
            </div>
          </div>

          <p className="footer-text">
            Find out more{' '}
            <a href="https://gyilkoshetvege.hu/mi-az-a-gyilkos-hetvege" className="footer-link">
              here
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

export default App
