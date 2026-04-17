"use client"

import { motion } from "framer-motion"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { ViewType } from "@/app/page"

interface CTABannerSectionProps {
  onNavigate: (view: ViewType) => void
}

export function CTABannerSection({ onNavigate }: CTABannerSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll variant="fadeUp" className="max-w-7xl mx-auto">
          {/* Card with background image */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/cta-team.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl">
                <span className="tag-pill border-white/20 text-white">
                  Únete al equipo
                </span>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 font-serif leading-tight">
                  ¿Quieres unirte a BSF Asesores?
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic">
                  Te ofrecemos la oportunidad de crecer profesionalmente con nosotros y alcanzar el 
                  éxito en el sector asegurador.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    variant="default"
                    size="lg"
                    onClick={() => onNavigate("contacto")}
                    className="group"
                  >
                    Unirse Al Equipo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
