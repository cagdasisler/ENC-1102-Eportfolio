import './App.css'

function Home({ onNavigate }) {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Home</p>
        <h1>Welcome to my ENC1102 Eportfolio</h1>
        <p className="subtext">
          Welcome to my ENC 1102 ePortfolio. I organized this site with a gym-inspired layout because fitness is a big
          part of my life, and it helped me structure the different stages of my work this semester. Each tab highlights
          one of the course outcomes and includes the assignments, reflections, and revisions that helped me grow as a
          writer. My goal with this portfolio is to show how my thinking developed, how my writing became clearer and
          more intentional, and how I learned to approach research with more purpose. Feel free to explore each section
          to see the progress step by step.
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
