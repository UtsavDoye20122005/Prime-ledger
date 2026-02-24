import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import CaseStudiesPage from './components/CaseStudiesPage'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import CaseStudyDetailPage from './pages/CaseStudyDetailPage'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CaseStudiesPage />
      <AboutSection />
      <ContactSection />
    </>
  )
}

function AppShell() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  )
}
