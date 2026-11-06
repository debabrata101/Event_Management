import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}
function NotFound() {
  return <div className="container-wide py-28 text-center"><p className="eyebrow">404 error</p><h1 className="mt-3 font-display text-4xl font-extrabold dark:text-white">This page wandered off.</h1><p className="muted mt-3 text-sm text-slate-500">Let's get you back to something happening.</p><a href="#/" className="btn-primary mt-7">Back home</a></div>
}
export default function App() {
  return <><ScrollToTop/><Navbar/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/events/:id" element={<EventDetails/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes><Footer/><BackToTop/></>
}
