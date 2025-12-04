import { useState } from 'react'
import './App.css'

function CoachingRevision() {
  const [expandedSrc, setExpandedSrc] = useState(null)

  return (
    <section className="tab-stack">
      <div className="tab-card">
        <p className="eyebrow">Outcome 6: Revision</p>
        <h2>Coaching and Revision (Outcome 6)</h2>
        <p className="subtext">
          Revision felt like getting coached during a heavy training cycle. Every time I received peer or instructor
          feedback, it was like someone pointing out where my form broke down: weak transitions, unclear claims, messy
          citations, or missing details. Instead of taking it personally, I brought those notes back to the rack and used
          them to tighten my writing.
        </p>
      </div>

      <div className="tab-card">
        <div className="preview-row">
          <div className="preview-card">
            <h3>Discussion 10 Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/discussion10.pdf')}>
              <iframe title="Discussion 10 preview" src="/files/discussion10.pdf" />
            </div>
          </div>
          <p className="subtext">
            In Discussion 10, Ayush and Nieko gave me specific feedback on my Background and Plan sections. Ayush told me
            to “sharpen your research question” and clarify if my focus was more on technology or gym culture. That
            pushed me to rewrite my research question so it clearly connected digital literacy, social rules, and
            confidence. Nieko pointed out that some of my citation transitions broke the flow, especially places where I
            wrote sentences like “The study by...” which made the writing feel choppy. After reading that, I went back
            into my draft and smoothed out my transitions so the sources blended naturally into each paragraph.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Discussion 26 Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/discussion26.pdf')}>
              <iframe title="Discussion 26 preview" src="/files/discussion26.pdf" />
            </div>
          </div>
          <p className="subtext">
            In Discussion 26, I received more direct feedback on my Methodology and Significance sections. Brian told me
            I needed more detail about “how exactly you plan to recruit participants,” which made me rewrite the method
            to specify how I would approach UCF gym members and how I would screen them. He also said the survey
            justification was vague, so I added a paragraph explaining why surveys help capture emotional responses and
            technology interactions. He recommended adding demographic details like “age range, experience in gyms, and
            familiarity with technology,” so I expanded the participant description. He also said my significance section
            needed clearer implications, so I connected my argument to specific authors and explained how my study could
            help gyms create more supportive environments.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card two-up">
            <div className="double-preview">
              <div className="mini-embed" onClick={() => setExpandedSrc('/files/initial-research-proposal.pdf')}>
                <iframe title="Initial Draft preview" src="/files/initial-research-proposal.pdf" />
              </div>
              <div className="mini-embed" onClick={() => setExpandedSrc('/files/final-research-proposal.pdf')}>
                <iframe title="Final Draft preview" src="/files/final-research-proposal.pdf" />
              </div>
            </div>
          </div>
          <p className="subtext">
            The draft that changed the most was my Final Research Proposal. My original draft had long, uneven paragraphs
            and unclear methods. After reading peer feedback, I cut unnecessary fluff, reorganized the Background so it
            flowed from social norms to digital barriers to emotional confidence, and rewrote my Methodology so the steps
            were clearer and more professional. I also improved transitions between paragraphs so the argument moved more
            smoothly. These changes made the final proposal more confident and easier to understand.
          </p>
        </div>
      </div>

      <div className="tab-card">
        <p className="subtext">
          Outcome 6 taught me that revision is not punishment. It is training. Each edit strengthened the writing just
          like each coached rep builds better form. Seeing the before and after versions of my drafts showed how feedback
          helped me create a final project that was more organized, clearer, and stronger.
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

export default CoachingRevision
