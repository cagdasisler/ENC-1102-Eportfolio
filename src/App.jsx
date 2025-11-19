import { useState } from 'react'
import './App.css'

// Drop your PDFs/images into public/artifacts/ (folder exists with .gitkeep) and update each embedSrc below to "/artifacts/your-file.pdf" (or .png/.jpg).

const outcomes = [
  {
    id: 'outcome-1',
    title: 'Outcome 1 · Generating Inquiry',
    description: '',
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
      'This outcome shows how my curiosity about gym culture turned into a focused research question. The Literate Activity Report was the first step because it pushed me to observe the cycling class closely and pay attention to technical terms, emotional cues, and digital signals working together to shape how people understood the workout. That early observation helped me see that gyms function as learning spaces, not just workout rooms. When I moved into my early proposal draft, I used that same curiosity to narrow my topic into a specific question about social rules, digital tools, and emotional responses in gyms. Comparing these two artifacts makes the progress clear. The first one captures the moment where everything felt new and full of possibilities. The second shows how I began to cut extra ideas and center the inquiry around one main direction. Together they show how my thinking shifted from broad interest to a focused question that guided the rest of my project.',
  },
  {
    id: 'outcome-2',
    title: 'Outcome 2 · Multiple Ways of Writing',
    description: '',
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
      'This outcome highlights how I used different modes and design choices to make my writing easier for readers to navigate. The multimodal draft with color coded annotations helped me understand where my arguments were strong and where I needed to revise. Making those revisions visible through color and layout helped me track patterns that I could not see in plain text. I also applied multimodality in my ePortfolio by organizing the page with clear sections, embedded PDFs, and labeled headings that guide readers through each outcome. These choices mirror the same habits I used in my drafts, where visuals, spacing, and screenshots helped me present research and feedback clearly. Across both artifacts, multimodality allowed me to communicate in a way that supports the reader rather than overwhelming them.',
  },
  {
    id: 'outcome-3',
    title: 'Outcome 3 · Information Literacy',
    description: '',
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
      'This outcome focuses on how I learned to locate sources, evaluate them, and use them ethically. My Research Log shows that process clearly because each entry explains where I found the source, how I searched for it, and why it was credible. I learned to pay attention to peer review, publication details, and the purpose of each study. The Literature Review demonstrates the next step: putting all those sources together into a single conversation. Instead of treating each article separately, I grouped them by shared ideas about social behavior, digital tools, and emotional literacy in gyms. These two artifacts show how my research skills improved. I moved from simply gathering sources to analyzing their connections and deciding which ones actually supported my argument.',
  },
  {
    id: 'outcome-4',
    title: 'Outcome 4 · Research Genre Production',
    description: '',
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
      'This outcome shows how I learned to write within a specific academic genre. The Final Research Proposal follows the structure expected for college level research: introduction, literature review, methodology, and significance. I used the literature review to show what other scholars have already discovered and where the gap in the research exists. In the methodology section, I explained who I planned to interview, why I selected them, how I would collect the data, and how I would analyze it. The significance section helped me think about why the research matters for gyms, instructors, and students who rely on digital tools and emotional support to build confidence. This artifact demonstrates that I can take a complex topic and organize it into a structured, readable research proposal.',
  },
  {
    id: 'outcome-5',
    title: 'Outcome 5 · Contributing Knowledge',
    description: '',
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
      'This outcome shows how my work adds something new to the conversation created by other scholars. In my literature review, I identified that researchers usually study gym social rules, digital systems, and emotional factors separately. By bringing these three literacies together, my project highlights how they interact to shape real experiences in gyms. The significance section of my proposal explains why this matters. Understanding how these literacies overlap can help fitness centers create better support for beginners, improve digital onboarding, and strengthen community building. This contribution moves beyond summarizing research and instead uses the existing studies to build a new direction that future research could expand.',
  },
  {
    id: 'outcome-6',
    title: 'Outcome 6 · Revision',
    description: '',
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
      'This outcome highlights how feedback and self review shaped my writing. The annotated proposal shows where peer comments helped me rearrange paragraphs, cut weaker claims, and clarify confusing parts of my argument. Color coded markings made the revision process easy to track because I could see exactly which notes referred to structure, clarity, or evidence. When comparing the draft to the final proposal, the changes are visible. I reorganized sections, strengthened transitions, and simplified the methodology to make it more readable. This outcome makes it clear that revision was not just correcting mistakes but making choices based on what supported the project best. It shows how being open to feedback helped me produce a stronger final piece.',
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
