import { useState } from 'react'
import './App.css'

function ResearchFuel() {
  const [expandedSrc, setExpandedSrc] = useState(null)

  return (
    <section className="tab-stack">
      <div className="tab-card">
        <p className="eyebrow">Outcome 3: Information Literacy</p>
        <h2>Research Fuel (Outcome 3)</h2>
        <p className="subtext">
          Working on Outcome 3 felt like learning how to fuel my lifts properly. When you are serious about training, you
          stop eating random stuff and start checking labels, reading ingredients, and choosing food that actually helps
          you grow. Information literacy worked the same way. I had to stop grabbing random sources and learn how to
          check if something was clean, credible, and useful before I put it into my writing.
        </p>
      </div>

      <div className="tab-card">
        <div className="preview-row">
          <div className="preview-card">
            <h3>Research Log Preview</h3>
            <div className="mini-embed" onClick={() => setExpandedSrc('/files/research-log.pdf')}>
              <iframe title="Research Log preview" src="/files/research-log.pdf" />
            </div>
          </div>
          <p className="subtext">
            My Research Log was the first place where this skill really showed up. In that assignment I wrote down
            exactly where each source came from and why it mattered for my project. For example, when I evaluated
            Andreasson and Johansson’s article, I wrote that the study “supports my argument that gym literacy has social
            as well as physical components” and that it was credible because it was “peer reviewed” and focused on
            “gender-based barriers in gym culture.” That showed I was not just picking sources randomly. I was checking
            credibility, relevance, and why the source belonged in my argument. It felt like tracking macros because it
            forced me to see if I was relying too much on one type of evidence or skipping something important.
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
            In my Literature Review, I learned how to evaluate sources as a group instead of separately. I had to decide
            which studies actually helped me answer my research question about gym literacy and which ones were extra
            noise. For example, I used Andreasson and Johansson again because their research proves that “the gym
            environment teaches people how to act and communicate” and ties gender norms to literacy. I also used
            Kristensen et al., who explain that wearable technology “presents difficulties for those who lack experience
            with digital information display,” which helped me show why gym literacy now includes digital skills. I
            included Lamarche et al. to highlight how body image affects confidence because their study showed that
            self-image “emerges from social comfort during interactions.” I only kept the sources that directly helped me
            understand the social, digital, or emotional sides of gym literacy. That was me learning to act on relevance
            and credibility instead of including everything I read.
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
            My Initial Research Proposal brought all this filtering together. By the time I wrote it, I had already
            learned how to look for ethical, credible, and meaningful sources. In the proposal, I wrote that gym literacy
            is made of “social rules, digital tools, and emotional experiences,” and that these shape how beginners feel
            in the gym. I used the sources from my Literature Review and added deeper explanations. I explained how
            Rapport et al. show that members need “social ties to achieve success,” how Kristensen et al. show that
            digital tools “generate stress and uncertainty among new members,” and how Lamarche et al. reveal that body
            expectations can “increase or decrease” confidence. I chose these studies on purpose because they were peer
            reviewed, clear, and directly connected to my question. This was the first time I felt like I understood how
            to use sources ethically and not just to fill space.
          </p>
        </div>

      </div>

      <div className="tab-card">
        <p className="subtext">
          Outcome 3 taught me that a good draft needs clean sources the same way a good workout needs clean fuel. When I
          cut out weak sources and kept only the ones that were relevant, credible, and ethical, my writing became
          stronger and easier to trust. By the time I reached my final proposal, I was choosing sources with purpose
          instead of guessing. That is how I met Outcome 3.
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

export default ResearchFuel
