import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Introduction from './pages/about/Introduction'
import Members from './pages/members/Members'
import Awards from './pages/about/Awards'
import Application from './pages/join/Application'
import Faq from './pages/join/Faq'
import Contact from './pages/join/Contact'
import Curriculum from './pages/activities/Curriculum'
import Gathering from './pages/activities/Gathering'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main/introduction" element={<Introduction />} />
        <Route path="/main/members" element={<Members />} />
        <Route path="/main/awards" element={<Awards />} />
        <Route path="/join" element={<Navigate to="/join/application" replace />} />
        <Route path="/join/application" element={<Application />} />
        <Route path="/join/faq" element={<Faq />} />
        <Route path="/join/contact" element={<Contact />} />
        <Route path="/activities/curriculum" element={<Curriculum />} />
        <Route path="/networking/gathering" element={<Gathering />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App