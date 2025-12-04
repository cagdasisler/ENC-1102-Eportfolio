import { useState } from 'react'
import './App.css'

function WorkoutProgramming() {
  const [expandedSrc, setExpandedSrc] = useState(null)

  return (
    <section className="tab-stack">
      <div className="tab-card">
        <p className="eyebrow">Outcome 4: Research Genre Production</p>
        <h2>Workout Programming (Outcome 4)</h2>
        <p className="subtext">
          Working on Outcome 4 felt like learning how to design a real workout program. A good program has phases,
          structure, rest, and a clear plan for progression. Research writing worked the same way. Each assignment this
          semester had its own genre rules, its own order, and its own expectations, just like different training cycles.
          I had to learn those rules to make my writing fit the academic community I was writing for.
        </p>
      </div>

      <div className="tab-card">
        <div className="preview-row">
          <div className="preview-card">
            <h3>Literate Activity Report Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/literate-activity-report.pdf')}>
              <iframe title="Literate Activity Report preview" src="/files/literate-activity-report.pdf" />
            </div>
          </div>
          <p className="subtext">
            My Literate Activity Report was the first genre that taught me how strict research writing can be. That
            assignment required me to follow the method of participant observation and use specific sections like
            Introduction, Methods, Results, and Discussion. It was an IMRD genre. I learned why this structure matters
            when I wrote that cycling class participants “read cadence numbers on the big screen and follow the beat of
            the music,” because that detail belonged to the Results section and not the Introduction. IMRD forced me to
            separate what I observed from what I interpreted. It was like learning proper form on a lift because you
            can’t mix steps or skip parts or the whole movement falls apart.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Initial Research Proposal Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/initial-research-proposal.pdf')}>
              <iframe title="Initial Research Proposal preview" src="/files/initial-research-proposal.pdf" />
            </div>
          </div>
          <p className="subtext">
            My Initial Research Proposal showed me how different genres serve different purposes. A proposal is basically
            the planning phase of a research program. It required me to write Background, Analysis, and a Plan. In the
            Background section I explained that gym culture “operates as a form of literacy” and that newcomers need to
            understand “social rules, communication practices, and digital tools” to feel confident. In the Analysis
            section I compared studies and explained what they showed about gym literacy. Then in the Plan I had to
            detail step by step how I would collect data. This genre helped me slow down my thinking and make sure every
            part of my project had a purpose. It felt like writing out sets, reps, and percentages before lifting because
            the structure made my ideas organized and focused.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Literature Review Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/literature-review.pdf')}>
              <iframe title="Literature Review preview" src="/files/literature-review.pdf" />
            </div>
          </div>
          <p className="subtext">
            My Literature Review was a completely different genre with its own expectations. Instead of telling my own
            story or presenting observations, I had to summarize, compare, and connect other scholars’ work into themes.
            I created a section about “Social and Cultural Rules in Gym Literacy” where I discussed how Andreasson and
            Johansson show that gyms follow traditional masculine norms, and how Rapport et al. and Lamarche et al.
            connect belonging and confidence to social rules. I also created a section on “Digital Tools and Emerging
            Literacies” where I explained how Kristensen et al. show that wearable technology “presents difficulties for
            those who lack experience with digital information display.” Writing within this genre taught me discipline
            because I had to stay objective and hold back my opinion until the conclusion. It felt like sticking to
            accessory work even when I wanted to jump straight to heavy sets.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Final Research Proposal Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/final-research-proposal.pdf')}>
              <iframe title="Final Research Proposal preview" src="/files/final-research-proposal.pdf" />
            </div>
          </div>
          <p className="subtext">
            Finally, my Final Research Proposal combined everything into one complete research genre. It followed strict
            academic expectations that included clear citations, organized headings, formal tone, and logical flow. In
            that proposal I explained why gym literacy matters for student confidence and why universities should care. I
            used evidence from my Literature Review and wrote about digital tools, social norms, and emotional literacy.
            Writing the final proposal felt like finishing a full program from warm up to peak phase. Every part had to
            line up. The genre forced me to write clearly, support every claim, and think about the audience of academic
            readers who expect evidence and structure instead of casual storytelling.
          </p>
        </div>
      </div>

      <div className="tab-card">
        <p className="subtext">
          Outcome 4 taught me that research has its own genres the same way lifting has its own programs. Following genre
          rules doesn’t limit creativity. It makes the writing stronger because everything has a place and a purpose.
          Learning IMRD, learning how to plan research, learning how to organize literature, and learning how to write a
          full proposal helped me become more confident working inside academic expectations. I learned to make choices
          based on what the genre demands and to stay consistent under those constraints. That is how I met Outcome 4.
        </p>
      </div>

      {expandedSrc && (
        <div className="modal-backdrop" onClick={() => setExpandedSrc(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <p className="eyebrow">Preview</p>
              <button className="pill-btn small" onClick={() => setExpandedSrc(null)}>
                Close
              </button>
            </div>
            <iframe title="Expanded preview" src={expandedSrc} loading="lazy" className="modal-embed" />
          </div>
        </div>
      )}
    </section>
  )
}

export default WorkoutProgramming
