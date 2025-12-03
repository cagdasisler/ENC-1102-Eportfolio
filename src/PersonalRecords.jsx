import { useState } from 'react'
import './App.css'

function PersonalRecords() {
  const [expandedSrc, setExpandedSrc] = useState(null)

  return (
    <section className="tab-stack">
      <div className="tab-card">
        <p className="eyebrow">Outcome 5: Contributing Knowledge</p>
        <h2>Personal Records (Outcome 5)</h2>
        <p className="subtext">
          For this outcome, I looked at my Literature Review, my Initial Research Proposal, and my Final Research
          Proposal, because these were the assignments where I started contributing something new to the conversation
          about gym literacy. Instead of only repeating what researchers said, I began combining my own observations with
          secondary sources to create my own argument about how gym literacy works as a complete system.
        </p>
      </div>

      <div className="tab-card">
        <div className="preview-row">
          <div className="preview-card">
            <h3>Literature Review Preview</h3>
            <p className="microcopy">Click to view full work</p>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/literature-review.pdf')}>
              <iframe title="Literature Review preview" src="/files/literature-review.pdf" />
            </div>
            <button className="pill-btn small" onClick={() => setExpandedSrc('/files/literature-review.pdf')}>
              Expand preview
            </button>
          </div>
          <p className="subtext">
            My Literature Review was the first assignment where this contribution appeared. In the niche section, I
            explained that the studies I reviewed all focused on separate pieces of gym culture but never combined them.
            Andreasson and Johansson looked at gender and masculinity. Kristensen et al. studied digital barriers in
            wearable technology. Lamarche et al. focused on emotional comfort and body image. They were all valuable, but
            they were disconnected. In my niche section, I wrote that “gym literacy must be studied as a combination of
            social, digital, and emotional skills,” because beginners deal with all three at once. This idea came from
            comparing the studies and noticing a gap in the field.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Initial Research Proposal Preview</h3>
            <p className="microcopy">Click to view full work</p>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/initial-research-proposal.pdf')}>
              <iframe title="Initial Research Proposal preview" src="/files/initial-research-proposal.pdf" />
            </div>
            <button className="pill-btn small" onClick={() => setExpandedSrc('/files/initial-research-proposal.pdf')}>
              Expand preview
            </button>
          </div>
          <p className="subtext">
            My Initial Research Proposal also supported this outcome because it was the first time I noticed how
            different literacies overlap in gym spaces. I wrote that beginners feel lost because they are “learning
            physical movements, hidden social rules, and confusing digital tools at the same time.” When I revisited this
            idea in my Final Research Proposal, I realized it was the foundation of my contribution.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Final Research Proposal Preview</h3>
            <p className="microcopy">Click to view full work</p>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/final-research-proposal.pdf')}>
              <iframe title="Final Research Proposal preview" src="/files/final-research-proposal.pdf" />
            </div>
            <button className="pill-btn small" onClick={() => setExpandedSrc('/files/final-research-proposal.pdf')}>
              Expand preview
            </button>
          </div>
          <p className="subtext">
            In my Final Research Proposal, I shaped this insight into a full contribution. In the significance section, I
            explained that gyms need to adjust how they teach newcomers because social pressure, technology anxiety, and
            emotional stress all shape confidence and participation. I used the studies from my Literature Review to
            support this idea, but the conclusion itself came from my own analysis. I argued that gyms should rethink
            their orientation systems, beginner teaching methods, and digital onboarding because the current approach
            assumes beginners already understand the language, expectations, and tools. No study I reviewed made that
            argument, which is why it became my unique contribution to the field.
          </p>
        </div>
      </div>

      <div className="tab-card">
        <p className="subtext">
          Outcome 5 shows how my understanding grew from reading sources to adding my own new point to the conversation.
          I moved from summarizing research to contributing ideas that help explain how gym literacy works as a complete
          system.
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

export default PersonalRecords
