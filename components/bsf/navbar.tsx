"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ViewType } from "@/app/page"
import Image from "next/image"

interface NavbarProps {
  currentView: ViewType | "faq"
  onNavigate: (view: any) => void
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const navLinks: { label: string; view: string }[] = [
  { label: "INICIO", view: "inicio" },
  { label: "NOSOTROS", view: "nosotros" },
  { label: "SERVICIOS", view: "servicios" },
  { label: "FAQ", view: "faq" },
  { label: "CONTACTO", view: "contacto" },
]

// Icons as components
const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function Navbar({ currentView, onNavigate, isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (view: any) => {
    onNavigate(view)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0 })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("inicio")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/Logo_BSF.png"
              alt="BSF Asesores"
              width={140}
              height={50}
              className="h-10 lg:h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`relative text-xs font-bold tracking-widest transition-colors hover:text-primary ${
                  currentView === link.view ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
                {currentView === link.view && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <Button 
              onClick={() => handleNavClick("contacto")}
              className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-bold tracking-tight rounded-full"
            >
              SOLICITAR ASESORÍA GRATUITA
            </Button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 ml-2 rounded-full border border-border hover:bg-accent transition-colors hidden lg:flex"
              aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SunIcon />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MoonIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full"
              >
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="py-6 space-y-4 px-4">
                {navLinks.map((link) => (
                  <button
                    key={link.view}
                    onClick={() => handleNavClick(link.view)}
                    className={`block w-full text-center py-4 rounded-xl text-sm font-bold tracking-widest transition-colors ${
                      currentView === link.view 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-accent text-foreground/80 border border-transparent"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4">
                  <Button 
                    onClick={() => handleNavClick("contacto")}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 rounded-2xl font-bold"
                  >
                    SOLICITAR ASESORÍA GRATUITA
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
