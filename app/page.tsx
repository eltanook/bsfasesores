"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/bsf/navbar"
import { InicioView } from "@/components/bsf/views/inicio-view"
import { NosotrosView } from "@/components/bsf/views/nosotros-view"
import { ServiciosView } from "@/components/bsf/views/servicios-view"
import { ContactoView } from "@/components/bsf/views/contacto-view"
import { FAQView } from "@/components/bsf/views/faq-view"
import { Footer } from "@/components/bsf/footer"
import { WhatsAppButton } from "@/components/bsf/whatsapp-button"

export type ViewType = "inicio" | "nosotros" | "servicios" | "contacto" | "faq"

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>("inicio")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for system preference on mount
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const savedTheme = localStorage.getItem("bsf-theme")
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("bsf-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("bsf-theme", "light")
    }
  }

  const renderView = () => {
    switch (currentView) {
      case "inicio":
        return <InicioView onNavigate={setCurrentView} isDarkMode={isDarkMode} />
      case "nosotros":
        return <NosotrosView onNavigate={setCurrentView} />
      case "servicios":
        return <ServiciosView onNavigate={setCurrentView} />
      case "contacto":
        return <ContactoView isDarkMode={isDarkMode} />
      case "faq":
        return <FAQView onNavigate={setCurrentView} />
      default:
        return <InicioView onNavigate={setCurrentView} isDarkMode={isDarkMode} />
    }
}

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main>
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
      <WhatsAppButton />
    </div>
  )
}
