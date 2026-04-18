"use client"

import { motion } from "framer-motion"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShieldCheck, Instagram, Linkedin, Facebook } from "lucide-react"
import type { ViewType } from "@/app/page"
import Image from "next/image"

interface AboutSectionProps {
  onNavigate: (view: ViewType) => void
}

const values = [
  { label: "Confianza", description: "Relaciones basadas en transparencia y honestidad" },
  { label: "Integridad", description: "Actuamos siempre con ética profesional" },
  { label: "Profesionalismo", description: "Excelencia en cada asesoría" },
]

// Floating label with subtle animation
function FloatingLabel({ 
  children, 
  className, 
  delay = 0,
  position 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
  position: "top-right" | "bottom-left" | "left" | "bottom-right"
}) {
  const positionClasses = {
    "top-right": "absolute -top-3 -right-3 lg:top-6 lg:right-0",
    "bottom-left": "absolute bottom-16 left-4 lg:-left-6", // Adjusted slightly
    "left": "absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-8",
    "bottom-right": "absolute bottom-8 right-4 lg:-right-6",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
      className={`${positionClasses[position]} ${className} z-30`} // Higher z-index to stay above social overlay
    >
      <motion.div
        animate={{ 
          y: [0, -6, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4 + delay,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <AnimateOnScroll variant="slideLeft">
            <span className="tag-pill">
              Por qué somos diferentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a1628] dark:text-[#1a6acd] mb-6 font-serif">
              Sobre <span className="text-[#1a6acd] dark:text-white">BSF Asesores</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              BSF Asesores es una firma de élite con más de 25 años de trayectoria sólida en el mercado asegurador y financiero mexicano. 
              Nos especializamos en el diseño de estrategias de blindaje patrimonial, optimización fiscal y desarrollo integral de negocios. 
              Nuestra filosofía se basa en ir más allá de una simple protección; buscamos construir legados financieros resilientes que garanticen 
              la tranquilidad y el bienestar de las familias y empresas que confían en nosotros.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">{value.label}:</span>
                    <span className="text-muted-foreground ml-1">{value.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              variant="default"
              size="lg"
              onClick={() => onNavigate("contacto")}
            >
              Agendar Llamada
            </Button>
          </AnimateOnScroll>

          {/* Right Column - Image with Floating Badges */}
          <AnimateOnScroll variant="slideRight" className="relative group/main">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 z-10 group/img">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fotografos-papaya-estudio-sesion-edgar-blanco-3-MKcMsAXZxbo7w0hRl0X3GZfRMeLU4L.jpg"
                  alt="Edgar Blanco - Director de BSF Asesores"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  className="object-cover object-[center_35%] group-hover/img:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent z-10" />
                
                {/* Social Overlay on Hover (Below Labels) */}
                <div className="absolute inset-0 bg-[#0a1628]/40 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 z-20">
                  <motion.a 
                    whileHover={{ scale: 1.2, y: -5 }}
                    href="#" 
                    aria-label="Instagram"
                    className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-[#1a6acd] transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.2, y: -5 }}
                    href="#" 
                    aria-label="LinkedIn"
                    className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-[#1a6acd] transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.2, y: -5 }}
                    href="#" 
                    aria-label="Facebook"
                    className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-[#1a6acd] transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Authority Stats Badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-white dark:bg-card p-6 rounded-[2rem] shadow-2xl border border-border z-40">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a6acd]/20 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#1a6acd]" />
                  </div>
                  <div>
                    <div className="text-2xl font-black font-serif text-[#0a1628] dark:text-white">25+ Años</div>
                    <p className="text-[10px] text-[#1a6acd] uppercase tracking-widest font-bold">Autoridad Probada</p>
                  </div>
                </div>
              </div>

              {/* Rectangular Floating Label - Stats */}
              <FloatingLabel position="bottom-left" delay={0.4}>
                <div className="bg-[#0a1628]/80 backdrop-blur-md text-white rounded-2xl p-4 shadow-xl border border-white/10 opacity-90">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">Clientes Contentos</div>
                </div>
              </FloatingLabel>

              {/* Rectangular Floating Label - Profesionalismo */}
              <FloatingLabel position="top-right" delay={0.6}>
                <div className="bg-[#1a6acd]/80 backdrop-blur-md text-white rounded-xl px-6 py-3 shadow-lg border border-white/20 opacity-90">
                  <span className="font-bold tracking-tight">Profesionalismo Directo</span>
                </div>
              </FloatingLabel>
              
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
