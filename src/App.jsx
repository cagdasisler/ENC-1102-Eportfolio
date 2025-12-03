import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import WarmUpQuestions from './WarmUpQuestions'
import FormTechnique from './FormTechnique'
import ResearchFuel from './ResearchFuel'
import WorkoutProgramming from './WorkoutProgramming'
import PersonalRecords from './PersonalRecords'
import CoachingRevision from './CoachingRevision'

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'warmup', label: 'Warm Up Questions' },
  { id: 'form', label: 'Form and Technique' },
  { id: 'fuel', label: 'Research Fuel' },
  { id: 'program', label: 'Workout Programming' },
  { id: 'pr', label: 'Personal Records' },
  { id: 'revision', label: 'Coaching and Revision' },
]

function App() {
  const [activeTab, setActiveTab] = useState('intro')

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />
      case 'about':
        return <About />
      case 'warmup':
        return <WarmUpQuestions />
      case 'form':
        return <FormTechnique />
      case 'fuel':
        return <ResearchFuel />
      case 'program':
        return <WorkoutProgramming />
      case 'pr':
        return <PersonalRecords />
      case 'revision':
        return <CoachingRevision />
      default:
        return null
    }
  }

  return (
    <div className="page">
      <nav className="top-nav">
        <div className="nav-links">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="tab-container">{renderTab()}</div>
    </div>
  )
}

export default App
