import { useState } from 'react'
import './App.css'

// Drop your PDFs/images into public/artifacts/ (folder exists with .gitkeep) and update each embedSrc below to "/artifacts/your-file.pdf" (or .png/.jpg).

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
        embedSrc: '/artifacts/lit%20activity%20rep/literate%20activity%20report%20final.pdf',
      },
      {
        name: 'Initial Research Proposal + brief analysis (PDF)',
        type: 'PDF embed',
        outcomeFocus: 'Proposal and early analysis showing how I refined the core question.',
        embedSrc: '/artifacts/final%20research%20proposal/annotated-1102_Proposal_Review.docx.pdf',
      },
    ],
    reflectionText:
      'These two artifacts capture the messy start of my project. In the literate activity report I’m blunt about what I read, how I learned, and why bias in forensic psychology stuck in my head. The annotated proposal shows me chopping that curiosity into a researchable slice after peer/instructor feedback. I cut scope, rewrote research questions, and kept only what served the main line of inquiry. Inquiry for me is a loop: notice a hunch, draft a question, stress-test it with readers, then sand it down until it’s specific and doable. You can literally see the early “maybe I can study everything” moments get crossed out and replaced with a tighter focus that respects time, length, and audience.',
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
        embedSrc: '/artifacts/lit%20review/annotated-1102_Self_LR-3%20%281%29.pdf',
      },
    ],
    reflectionText:
      'I lean on multimodality whenever the writing risks turning into a wall of text. In the draft I tie each claim to a screenshot or visual so readers can see what I’m seeing rather than trusting a summary. Color-coded annotations help me surface patterns faster than another paragraph could, and they also keep me honest about where I’m inferring versus observing. The site layout mirrors that “skim then dive” rhythm so you can hop between sections and visuals without getting lost. Whether I’m talking to Writing & Rhetoric faculty or CS peers, the goal is the same: give them anchors (color, images, layout cues) so the evidence is easy to follow.',
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
        embedSrc: '/artifacts/research%20log/Research%20Log%20Complete.pdf',
      },
      {
        name: 'Literature Review + reflection (PDF)',
        type: 'PDF embed',
        outcomeFocus: 'How I organized sources, tracked gaps, and cited ethically.',
        embedSrc: '/artifacts/lit%20review/Lit%20Review%20Completedpdf.pdf',
      },
    ],
    reflectionText:
      'The research log is me documenting every “why this source, why not that one” decision—databases searched, filters applied, how I checked bias, and where I bailed on a source. It’s picky on purpose. The literature review is the synthesis: grouping sources, exposing gaps, and showing how I avoided leaning too hard on one article or one viewpoint. You can see me quote, paraphrase, and then step back to question relevance. Together they show repeatable info-lit habits I can reuse in CS research where credibility and ethics are non-negotiable.',
  },
  {
    id: 'outcome-4',
    title: 'Outcome 4 · Research Genre Production',
    description: 'Navigating genre expectations (IMRaD, proposals, reviews) for academic and public audiences.',
    artifacts: [
      {
        name: 'Final Research Proposal (PDF)',
        type: 'PDF embed',
        outcomeFocus: 'Intro–method–significance flow demonstrating genre awareness.',
        embedSrc: '/artifacts/final%20research%20proposal/Final%20Research%20Proposal.pdf',
      },
      {
        name: 'Genre comparison notes',
        type: 'Text/image',
        outcomeFocus: 'Comparison of proposal vs. literature review and how constraints changed my approach.',
        embedSrc: '',
      },
    ],
    reflectionText:
      'The researched write-up outline is my scaffold. It moves from outer structures of my primary data to the inner details, and I even left a third claim I later cut so you can see the decision trail. The final proposal sticks to that outside-to-inside flow while arguing about bias in forensic psychology evaluations. I limited embeds to the few visuals that actually help readers stay oriented because too many screenshots made the draft unreadable in peer review. Color-coded feedback sits on the draft so you can see where audience eyes made me restructure sections and tighten claims. This is me using genre rules (like IMRaD-ish sequencing) on purpose, not by accident.',
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
        embedSrc: '/artifacts/lit%20review/annotated-Lit%20review%20part%20c.pdf',
      },
      {
        name: 'Final Research Proposal – significance',
        type: 'PDF embed',
        outcomeFocus: 'Planned study significance for readers beyond the classroom.',
        embedSrc: '/artifacts/final%20research%20proposal/C%29%20final%20proposal.pdf',
      },
    ],
    reflectionText:
      'Contribution shows up in how I staged the argument. The outline forces me to earn each claim—start with big patterns in the data, then zoom into the inner pieces—so readers always know why a detail matters. The final paper on bias in forensic psychology evaluations keeps that sequence and pairs visuals with claims so the “so what” stays visible instead of buried. Peer comments (color-coded to the edits they triggered) pushed me to sharpen the significance sections instead of just reporting what I found. The result is a clearer claim about where bias shows up, why it’s a problem for real cases, and how this adds to the conversation rather than repeating it.',
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
        embedSrc: '/artifacts/final%20research%20proposal/annotated-1102_Proposal_Review.docx.pdf',
      },
      {
        name: 'Before/after paragraph comparison',
        type: 'Text',
        outcomeFocus: 'Before/after paragraph snapshot to make revision visible.',
        embedSrc: '',
      },
    ],
    reflectionText:
      'Revision is me being coachable. I tag feedback by type—structure, clarity, evidence—then decide what actually aligns to my research question. Conflicting comments get weighed against the core argument instead of whoever is louder. The color-coded peer notes on the proposal make those choices visible: you can trace how one comment led me to reorder sections, cut a weak claim, or swap in a clearer visual. It’s messy, but the before/after snapshots show exactly where the paper tightened up and why I trusted some feedback over other feedback.',
  },
]

function ArtifactCard({ artifact, onExpand }) {
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
          <div className="embed-actions">
            <button className="pill-btn small" onClick={() => onExpand(artifact.embedSrc)}>
              Expand to read
            </button>
            <a className="pill-btn ghost small" href={artifact.embedSrc} target="_blank" rel="noreferrer">
              Open in new tab ↗
            </a>
          </div>
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
          <ArtifactCard key={artifact.name} artifact={artifact} onExpand={(src) => outcome.onExpand?.(src)} />
        ))}
      </div>

      <div className="reflection-block">
        <p className="eyebrow">Reflection</p>
        <p className="subtext">{outcome.reflectionText}</p>
      </div>
    </section>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const [expandedSrc, setExpandedSrc] = useState(null)

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
              <OutcomeSection key={outcome.id} outcome={{ ...outcome, onExpand: setExpandedSrc }} />
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

      {expandedSrc && (
        <div className="modal-backdrop" onClick={() => setExpandedSrc(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <p className="eyebrow">Expanded view</p>
              <button className="pill-btn small" onClick={() => setExpandedSrc(null)}>
                Close
              </button>
            </div>
            <iframe title="Expanded artifact" src={expandedSrc} loading="lazy" className="modal-embed" />
            <div className="modal-actions">
              <a className="pill-btn ghost small" href={expandedSrc} target="_blank" rel="noreferrer">
                Open in new tab ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
