import { useState } from 'react'
import './App.css'

function WarmUpQuestions() {
  const [expandedSrc, setExpandedSrc] = useState(null)

  return (
    <section className="tab-stack">
      <div className="tab-card">
        <p className="eyebrow">Outcome 1: Generating Inquiry</p>
        <h2>Warm Up Questions (Outcome 1)</h2>
        <p className="subtext">
          I opened the semester like a warm up set, testing what felt tight or awkward and figuring out where I was
          curious. I knew I cared about writing and gym culture, so I built questions that could actually carry weight:
          how people talk about fitness online, how language in gyms shapes belonging, and where writing shows up in
          places we do not always notice. Early assignments pushed me to slow down and stretch those ideas instead of
          rushing into heavy lifts.
        </p>
      </div>

      <div className="tab-card">
        <div className="preview-row">
          <div className="preview-card">
            <h3>Discussion 1</h3>
            <p className="microcopy">Click to view full work</p>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/discussion1.pdf')}>
              <iframe title="Discussion 1 preview" src="/files/discussion1.pdf" />
            </div>
            <button className="pill-btn small" onClick={() => setExpandedSrc('/files/discussion1.pdf')}>
              Expand preview
            </button>
          </div>
          <p className="subtext">
            I began this course the same way I begin a warm up at the gym. I tried to figure out what felt right and what
            I was curious about. My ideas were very wide at first, so I treated them like warm up reps. Discussion 1
            helped me think about the communities I am part of like gaming, fitness, and computer science. I saw that all
            of them use writing in different ways. That became the first step that pushed my curiosity.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Discussion 7</h3>
            <p className="microcopy">Click to view full work</p>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/discussion7.pdf')}>
              <iframe title="Discussion 7 preview" src="/files/discussion7.pdf" />
            </div>
            <button className="pill-btn small" onClick={() => setExpandedSrc('/files/discussion7.pdf')}>
              Expand preview
            </button>
          </div>
          <p className="subtext">
            Discussion 7 helped me shape my ideas even more. I focused on fitness and the way people learn the rules of
            the gym. I wrote about how new gym members feel confused and nervous when they do not know the machines,
            language, or social rules. This made me think about gym literacy. Gym literacy means the words, rules, and
            behaviors that people learn when they enter the gym community. After more writing and reading, I created a
            clear research question. My question became how learning the literacy of gym culture affects beginners
            confidence and long term fitness participation.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Discussion 9</h3>
            <p className="microcopy">Click to view full work</p>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/discussion9.pdf')}>
              <iframe title="Discussion 9 preview" src="/files/discussion9.pdf" />
            </div>
            <button className="pill-btn small" onClick={() => setExpandedSrc('/files/discussion9.pdf')}>
              Expand preview
            </button>
          </div>
          <p className="subtext">
            Discussion 9 added even more strength to my question. I found four peer reviewed articles about gym culture.
            They talked about gender, motivation, digital tracking tools, and body image. These showed me that confidence
            in the gym is not only about lifting. It is also about social rules, expectations, and technology. This
            helped me sharpen my question and understand it better.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Literate Activity Report</h3>
            <p className="microcopy">Click to view full work</p>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/literate-activity-report.pdf')}>
              <iframe title="Literate Activity Report preview" src="/files/literate-activity-report.pdf" />
            </div>
            <button className="pill-btn small" onClick={() => setExpandedSrc('/files/literate-activity-report.pdf')}>
              Expand preview
            </button>
          </div>
          <p className="subtext">
            My Literate Activity Report helped me see literacy happening in real life. I observed a cycling class at the
            UCF gym and saw how people read numbers on the screen, listen to music, follow the coach, and match the
            rhythm. The class had its own literacy system. This connected to my research question because it showed that
            fitness spaces are full of literacy practices.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Initial Research Proposal</h3>
            <p className="microcopy">Click to view full work</p>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/initial-research-proposal.pdf')}>
              <iframe title="Initial Research Proposal preview" src="/files/initial-research-proposal.pdf" />
            </div>
            <button className="pill-btn small" onClick={() => setExpandedSrc('/files/initial-research-proposal.pdf')}>
              Expand preview
            </button>
          </div>
          <p className="subtext">
            Finally, the Initial Research Proposal brought all my inquiry together. I explained why gym literacy matters
            for confidence and participation, and I used the sources I found to support it. This helped me understand my
            question clearly and show why it is important. That is how I met Outcome 1, because I learned how to create a
            real research question that came from my own experience as a lifter and a writer.
          </p>
        </div>
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

export default WarmUpQuestions
