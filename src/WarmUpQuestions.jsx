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
          Working on Outcome 1 felt like warming up before a heavy lift. At first everything was loose and unsure. My
          ideas were wide, and I did not know exactly what my research question should be. Over time, the warm up helped
          me stretch my thinking, slow down, and build a clear question about gym literacy and confidence.
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
            In Discussion 1 I took my first small steps into inquiry. I introduced myself and talked about my backgrounds
            in gaming, fitness, and computer science. In that post I said that writing shows up a lot more than we
            notice, like in “workout logs, messages to gaming friends, and online posts.” When I realized that even my
            daily life had many forms of writing and reading, it pushed me to think deeper about literacy. This was the
            first moment I saw that my own communities could become research topics. That was my first warm up rep
            because I started looking at everyday activities as possible research questions instead of separate hobbies.
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
            In Discussion 7 my inquiry started to take shape. I wrote about gym culture and why beginners sometimes feel
            lost when they enter fitness spaces. In that post I wrote that “new gym members feel confused and nervous
            when they do not know the machines, language, or social rules.” That sentence showed me I was already
            talking about literacy without using the word. I also wrote that gym literacy “means the words, rules, and
            behaviors that people learn when they enter the gym community.” After working through the assignment prompts,
            I turned my broad idea into a real question: How does learning the literacy of gym culture affect beginners
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
            In Discussion 9 I added more weight to my inquiry by bringing in real research. I found four peer reviewed
            sources about gender, motivation, body image, and tracking technology. In my post I wrote that Andreasson and
            Johansson show how gym culture “supports specific masculine behaviors,” and that Kristensen’s article says
            tracking tools “create barriers for people who lack experience with technology.” Putting these quotes
            together helped me see that confidence in the gym is not only physical. It is also social, emotional, and
            digital. Discussion 9 helped me sharpen my research question because each source gave me another angle to
            think about. I learned that inquiry grows slowly one step at a time, the same way you add small plates to a
            warm up set.
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
            My Literate Activity Report helped me understand inquiry in the real world. I observed a cycling class at UCF
            and took notes on everything happening which included movement, sound, screen numbers, music, and emotions.
            In my report, I wrote that participants “read cadence numbers on the big screen and follow the beat of the
            music,” and that the instructor’s motivational line “This burn is temporary, but the strength you gain is
            permanent” shaped the mood of the class. That moment showed me that literacy exists everywhere, even in a
            workout. This assignment connected directly to my research question because I saw gym literacy happening in
            front of me. It made my inquiry feel real.
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
            Finally, my Initial Research Proposal brought everything together. In the proposal I wrote that gym literacy
            is made of “social rules, digital tools, and emotional experiences,” and that these shape how beginners feel
            in the gym. I used the sources from Discussion 9 and added deeper explanations. Writing the proposal helped
            me prove that my research question matters for students who use campus gyms. It also helped me see how inquiry
            turns into a full research project. By the end I moved from a loose idea to a focused question supported by
            evidence. That is how I met Outcome 1. I learned how to form a real research question that came from my own
            life and grew stronger through reading, reflection, and observation.
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
