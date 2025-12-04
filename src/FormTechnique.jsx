import { useState } from 'react'
import './App.css'

function FormTechnique() {
  const [expandedSrc, setExpandedSrc] = useState(null)

  return (
    <section className="tab-stack">
      <div className="tab-card">
        <p className="eyebrow">Outcome 2: Multiple ways of writing</p>
        <h2>Form and Technique (Outcome 2)</h2>
        <p className="subtext">
          Working on this outcome felt like changing my form in the gym. When you adjust grip, tempo, or stance, the lift
          becomes smoother. With this outcome, I adjusted the form of my writing by using more than one mode at the same
          time. I mixed images, quotes, digital tools, screenshots, movement, and regular writing to make my ideas
          clearer for different audiences.
        </p>
      </div>

      <div className="tab-card">
        <div className="preview-row">
          <div className="preview-card">
            <h3>Discussion 3 Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/discussion3.pdf')}>
              <iframe title="Discussion 3 preview" src="/files/discussion3.pdf" />
            </div>
          </div>
          <p className="subtext">
            In Discussion 3 I learned how different forms change meaning. I wrote about Fishman and Halvey and compared
            their methods. I used direct quotes like “Fishman wrote that Amish children become literate by growing up in
            an environment where reading and writing are a natural part of everyday living” because quoting her showed
            how literacy can live in songs, church reading, and daily chores. Then I compared it to Halvey’s idea that
            “dance could be a type of literacy.” In my own post I wrote that dancers “interpret bodies and directions
            just like how readers interpret words.” This showed me that writing is not only words but also movement,
            timing, rhythm, and observation. Discussion 3 helped me understand multimodality because I had to connect
            reading, movement, visuals, and community habits all in one response.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Discussion 9 Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/discussion9.pdf')}>
              <iframe title="Discussion 9 preview" src="/files/discussion9.pdf" />
            </div>
          </div>
          <p className="subtext">
            In Discussion 9 I used multiple modes again. That discussion mixed quotes from four articles, summaries, my
            own explanations, and the partial IRP draft that I attached. For example, when I wrote that Andreasson and
            Johansson’s article “demonstrates that gym culture operates as an active system which supports specific
            masculine behaviors,” I combined academic evidence with my own interpretation. Then when I discussed
            Kristensen’s article and said tracking tools “create barriers for people who lack experience with
            technology,” I was blending digital literacy, social literacy, and academic writing in the same piece. The
            assignment required me to mix modes: reading academic PDFs, pulling out charts, copying quotes, writing my
            own explanation, and referencing my IRP draft. This helped me learn how multimodal writing makes arguments
            stronger.
          </p>
        </div>

        <div className="preview-row">
          <div className="preview-card">
            <h3>Literate Activity Report Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/literate-activity-report.pdf')}>
              <iframe title="Literate Activity Report preview" src="/files/literate-activity-report.pdf" />
            </div>
          </div>
          <p className="subtext">
            My Literate Activity Report was the assignment that showed me multimodality the most. In that report I used
            observation notes, verbal quotes from the instructor, digital screen numbers, music patterns, and movement
            signals. I wrote sentences like “the big screen displayed target cadence ranges together with the current
            song’s BPM.” That was me translating a visual and digital mode into written explanation. I also wrote the
            motivational sentence “This burn is temporary, but the strength you gain is permanent” because it showed how
            spoken language shaped emotional meaning. That whole project made me take physical activity, sound, numbers,
            and communication, and turn it into a written report. I was combining physical literacy, emotional literacy,
            digital literacy, and academic writing all together.
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
            My Final Research Proposal used multiple modes again. I used academic evidence, emotional explanations, gym
            culture examples, digital literacy ideas, and clear transitions to show my research. I used long paragraphs,
            citation formatting, and structured headings. For example, I wrote that digital tracking “creates emotional
            pressure by replacing personal identity with numerical identity,” which is me interpreting both emotional and
            technological literacy. This proposal felt like building a full workout program with different exercises
            working toward one goal. Each mode supported my argument.
          </p>
        </div>

      </div>

      <div className="tab-card">
        <p className="subtext">
          Even this Course ePortfolio is a multimodal project. I mixed writing with visuals, tabs, layout, navigation,
          and a gym theme. That taught me that writing is not only words. It is also design choices and how information
          is presented. This is how I met Outcome 2. I learned to combine modes to make my ideas clearer. I used
          movement, sound, images, numbers, quotes, academic writing, digital tools, and personal experience all at once
          to support my goals.
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

export default FormTechnique
