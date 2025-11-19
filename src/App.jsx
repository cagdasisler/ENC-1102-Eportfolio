import { useState } from 'react'
import './App.css'

// Drop your PDFs/images into public/artifacts/ and update each embedSrc below to "/artifacts/your-file.pdf" (or .png/.jpg).

const outcomes = [
  {
    id: 'outcome-1',
    title: 'Outcome 1 · Generating Inquiry',
    description: 'Curiosity moved into focused research questions through my literacy activity report and early proposals.',
    artifacts: [
      {
        name: 'Literate Activity Report (PDF)',
        type: 'PDF embed',
        outcomeFocus: 'How my literacy background shaped the questions I pursued.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        name: 'Initial Research Proposal + brief analysis (PDF)',
        type: 'PDF embed',
        outcomeFocus: 'Proposal and early analysis showing how I refined the core question.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
    ],
    reflectionPrompts: [
      'The line of inquiry that first excited me and how it evolved after early research.',
      'Peer or instructor feedback that reframed or narrowed the question.',
      'How this inquiry habit will transfer to future CS research projects.',
    ],
  },
  {
    id: 'outcome-2',
    title: 'Outcome 2 · Multiple Ways of Writing',
    description: 'Multimodal choices—visuals, layout, media—that supported my argument across assignments.',
    artifacts: [
      {
        name: 'Course ePortfolio (this site)',
        type: 'Live page',
        outcomeFocus: 'Layout, color, and embeds used to keep the outcomes easy to navigate.',
        embedSrc: '',
      },
      {
        name: 'Multimodal draft or discussion post',
        type: 'Image/PDF embed',
        outcomeFocus: 'A multimodal artifact (charts, sketches, bilingual elements) that supported the research story.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
    ],
    reflectionPrompts: [
      'Where I intentionally mixed modes (text, visuals, links) to make evidence clearer.',
      'Design or language choices tailored to an international audience or CS peers.',
      'What I would add (video, code snippets, interactive chart) with more time.',
    ],
  },
  {
    id: 'outcome-3',
    title: 'Outcome 3 · Information Literacy',
    description: 'Evaluating sources, logging research choices, and synthesizing credible evidence.',
    artifacts: [
      {
        name: 'Research Log (PDF)',
        type: 'PDF embed',
        outcomeFocus: 'Source vetting, database filters, and notes about credibility/ethics.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        name: 'Literature Review + reflection (PDF)',
        type: 'PDF embed',
        outcomeFocus: 'How I organized sources, tracked gaps, and cited ethically.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
    ],
    reflectionPrompts: [
      'How I judged credibility and relevance for the research question.',
      'Search strategies or databases that worked best and how I will reuse them in CS research.',
      'How I handled citation ethics (quoting, paraphrasing, avoiding over-reliance on one source).',
    ],
  },
  {
    id: 'outcome-4',
    title: 'Outcome 4 · Research Genre Production',
    description: 'Navigating genre expectations (IMRaD, proposals, reviews) for academic and public audiences.',
    artifacts: [
      {
        name: 'Final Research Proposal (PDF placeholder)',
        type: 'PDF embed',
        outcomeFocus: 'Intro–method–significance flow demonstrating genre awareness.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        name: 'Genre comparison notes',
        type: 'Text/image',
        outcomeFocus: 'Comparison of proposal vs. literature review and how constraints changed my approach.',
        embedSrc: '',
      },
    ],
    reflectionPrompts: [
      'Genre conventions that helped me communicate effectively and where they felt restrictive.',
      'How audience (professor, peers, public readers) changed my choices.',
      'Where I borrowed models like IMRaD or Swales’ CARS to structure sections.',
    ],
  },
  {
    id: 'outcome-5',
    title: 'Outcome 5 · Contributing Knowledge',
    description: 'Connecting primary evidence to the scholarly conversation and explaining my contribution.',
    artifacts: [
      {
        name: 'Literature Review “niche” section',
        type: 'PDF embed',
        outcomeFocus: 'The gap I identified and how I positioned this project inside it.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        name: 'Final Research Proposal – significance',
        type: 'PDF embed',
        outcomeFocus: 'Planned study significance for readers beyond the classroom.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
    ],
    reflectionPrompts: [
      'The claim I add to the conversation and the evidence that supports it.',
      'How I situate my perspective with other scholars.',
      'The next experiment or artifact that would strengthen this contribution.',
    ],
  },
  {
    id: 'outcome-6',
    title: 'Outcome 6 · Revision',
    description: 'How peer/instructor feedback and self-review shaped drafts, structure, and design.',
    artifacts: [
      {
        name: 'Revision map with peer feedback',
        type: 'Image/PDF embed',
        outcomeFocus: 'Comments received and the concrete edits I made.',
        embedSrc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        name: 'Before/after paragraph comparison',
        type: 'Text',
        outcomeFocus: 'Before/after paragraph snapshot to make revision visible.',
        embedSrc: '',
      },
    ],
    reflectionPrompts: [
      'The feedback that changed my direction the most.',
      'How I triaged conflicting feedback.',
      'Revision habits I will keep (versioning, checklists, read-alouds).',
    ],
  },
]

function ArtifactCard({ artifact }) {
  return (
    <div className="artifact-card">
      <div className="artifact-meta">
        <span className="tag">{artifact.type}</span>
        <span className="microcopy">{artifact.outcomeFocus}</span>
      </div>
      <h4>{artifact.name}</h4>
      {artifact.embedSrc ? (
        <div className="embed-shell">
          <iframe title={artifact.name} src={artifact.embedSrc} loading="lazy" />
        </div>
      ) : (
        <div className="embed-shell empty">PDF or image placeholder.</div>
      )}
      <p className="reflection-hook">Reflection: how this piece meets the outcome above.</p>
    </div>
  )
}

function OutcomeSection({ outcome }) {
  return (
    <section id={outcome.id} className="outcome-card">
      <div className="outcome-header">
        <div>
          <p className="eyebrow">ENC 1102 · Evidence</p>
          <h3>{outcome.title}</h3>
          <p className="subtext">{outcome.description}</p>
        </div>
      </div>

      <div className="artifact-grid">
        {outcome.artifacts.map((artifact) => (
          <ArtifactCard key={artifact.name} artifact={artifact} />
        ))}
      </div>

      <div className="reflection-prompts">
        <p className="eyebrow">Reflection prompts</p>
        <ul>
          {outcome.reflectionPrompts.map((prompt) => (
            <li key={prompt}>{prompt}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="page">
      <nav className="top-nav">
        <div className="brand">
          <span className="dot" /> ENC 1102 ePortfolio
        </div>
        <div className="nav-links">
          <button className={`nav-btn ${page === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>
            Home
          </button>
          <button className={`nav-btn ${page === 'about' ? 'active' : ''}`} onClick={() => setPage('about')}>
            About
          </button>
          <button className={`nav-btn ${page === 'outcomes' ? 'active' : ''}`} onClick={() => setPage('outcomes')}>
            Outcomes
          </button>
          <button className={`nav-btn ${page === 'contact' ? 'active' : ''}`} onClick={() => setPage('contact')}>
            Contact
          </button>
        </div>
      </nav>

      {page === 'home' && (
        <header className="hero home-hero">
          <div className="home-box">
            <h1>ENC 1102 Course ePortfolio</h1>
            <p className="subtext">Work across six outcomes, curated for the Department of Writing & Rhetoric.</p>
            <div className="pill-row">
              <button className="pill-btn" onClick={() => setPage('about')}>
                About
              </button>
              <button className="pill-btn" onClick={() => setPage('outcomes')}>
                Outcomes
              </button>
              <button className="pill-btn" onClick={() => setPage('contact')}>
                Contact
              </button>
            </div>
          </div>
        </header>
      )}

      {page === 'about' && (
        <main>
          <section className="card-shell">
            <div>
              <p className="eyebrow">About Me</p>
              <h2>Hey, I&apos;m an international CS student from Istanbul.</h2>
              <p className="subtext">
                I study Computer Science and bring a multilingual, cross-cultural lens to research and design. This site
                shows how I meet ENC 1102 outcomes while building habits I can reuse in software projects.
              </p>
            </div>
            <div className="callouts">
              <div className="callout">
                <p className="eyebrow">Audience</p>
                <p>Department of Writing & Rhetoric · peers · future collaborators.</p>
              </div>
              <div className="callout">
                <p className="eyebrow">Identity</p>
                <p>International CS student from Istanbul; bilingual perspective in research and design.</p>
              </div>
              <div className="callout">
                <p className="eyebrow">Navigation</p>
                <p>Use the menu to view outcomes or contact.</p>
              </div>
            </div>
          </section>
        </main>
      )}

      {page === 'outcomes' && (
        <main>
          <section className="outcomes-wrapper">
            <h2>Outcome sections</h2>
            <p className="subtext">Each outcome pairs 1–2 artifacts and a brief reflection on how the evidence meets it.</p>
            {outcomes.map((outcome) => (
              <OutcomeSection key={outcome.id} outcome={outcome} />
            ))}
          </section>
        </main>
      )}

      {page === 'contact' && (
        <main>
          <section className="card-shell">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect</h2>
            <p className="subtext">My School Email: emre@ucf.edu</p>
            <p className="subtext">My Linkedin: https://www.linkedin.com/in/cagdasisler/</p>
          </section>
        </main>
      )}
    </div>
  )
}

export default App
