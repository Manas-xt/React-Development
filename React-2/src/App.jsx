import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import ToggleFunc from './component/ToggleFunc'
import About from './component/About'

const Funnt = () => (
  <>
    <h1>FUNCTIONAL COMPONENTS</h1>
    <ToggleFunc />
  </>
)

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Funnt />} />
            <Route path="/about_me" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App