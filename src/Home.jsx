import './App.css'

function Home({ onNavigate }) {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Home</p>
        <h1>Welcome to my ENC1102 Eportfolio</h1>
        <p className="subtext">
          I designed this site like a gym log: darker palette, bold headers, and sections that feel like stations. I
          stuck with a lifting theme because it matches how the semester felt: starting with shaky reps, drilling form,
          then adding weight once I trusted my setup. Over the months I went from cautiously approaching assignments to
          loading heavier ideas and moving them with confidence. Each tab here is a training day focused on one ENC 1102
          outcome so you can see how my writing strength progressed.
        </p>
        <div className="pill-row">
          <button className="pill-btn" onClick={() => onNavigate?.('warmup')}>
            Go to Outcome 1
          </button>
          <button className="pill-btn ghost" onClick={() => onNavigate?.('about')}>
            About Me
          </button>
        </div>
      </div>
      <div className="hero-photo" />
    </header>
  )
}

export default Home
