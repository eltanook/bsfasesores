"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, TrendingUp, Building2, ShieldCheck } from "lucide-react"
import type { ViewType } from "@/app/page"
import Image from "next/image"

interface HeroSectionProps {
  onNavigate: (view: ViewType) => void
}

const dynamicWords = ["Familia", "Retiro", "Empresa", "Salud"]

// CountUp component
function CountUpStat({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(end * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end])

  return (
    <div ref={ref} className="bg-white/10 rounded-xl p-4 text-center">
      <div className="text-3xl font-bold text-white">{count}{suffix}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  )
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_aniv-2x1sD6r8CDM9LZWE0RrwLeoQcMJRT1.jpg"
          alt="Hero Background"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-black leading-[1.1] mb-8 font-serif text-[#1a6acd] dark:text-white">
              Protegemos tu <br/>
              <span className="relative inline-block min-w-[200px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[currentWordIndex]}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-white dark:text-[#1a6acd] block"
                  >
                    {dynamicWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-black mb-8 text-gray-300 uppercase tracking-widest">
              Con Estrategias Inteligentes.
            </h2>

            <div className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              <p>
                Protección inteligente, inversiones estratégicas y asesoría personalizada 
                para asegurar tu patrimonio y el de tu familia.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                variant="default"
                size="lg"
                onClick={() => onNavigate("contacto")}
              >
                Agendar Sesión de Diagnóstico Gratuita
              </Button>
              <p className="text-sm text-gray-400">
                Sin compromiso de contratación.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Glass Card */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Stats Grid with CountUp */}
                  <div className="grid grid-cols-2 gap-4">
                    <CountUpStat end={25} suffix="+" label="Años de Experiencia" />
                    <CountUpStat end={200} suffix="+" label="Clientes Satisfechos" />
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {dynamicWords.map((word, index) => (
                      <motion.div
                        key={word}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          index === currentWordIndex 
                            ? "bg-[#1a6acd]/30 border border-[#1a6acd]/50" 
                            : "bg-white/5"
                        } transition-all duration-300`}
                      >
                        <div className={`p-2 rounded-lg ${
                          index === currentWordIndex ? "bg-[#1a6acd]" : "bg-white/10"
                        }`}>
                          {index === 0 && <Heart className="w-5 h-5 text-white" />}
                          {index === 1 && <TrendingUp className="w-5 h-5 text-white" />}
                          {index === 2 && <Building2 className="w-5 h-5 text-white" />}
                          {index === 3 && <ShieldCheck className="w-5 h-5 text-white" />}
                        </div>
                        <span className="text-white font-medium">{word}</span>
                      </motion.div>
                    ))}
                  </div>


                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 bg-[#1a6acd] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                100% Confiable
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
