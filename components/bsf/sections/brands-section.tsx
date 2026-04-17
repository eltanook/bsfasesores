"use client"

import { motion } from "framer-motion"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"

// Placeholder brand names for insurance companies
const brands = [
  "GNP Seguros",
  "Metlife",
  "AXA",
  "Allianz",
  "MAPFRE",
  "Zurich",
  "Seguros Monterrey",
  "Banorte Seguros",
]

export function BrandsSection() {
  return (
    <section className="py-16 lg:py-20 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <AnimateOnScroll variant="fadeUp" className="text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            Trabajamos con las mejores
          </p>
          <h3 className="text-xl font-black text-[#0a1628] dark:text-white uppercase tracking-tight">
            Aseguradoras Aliadas
          </h3>
        </AnimateOnScroll>
      </div>

      {/* Scrolling Brands - Full Width Layout */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Blur/Fade Edges via Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-12 animate-scroll w-max">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <motion.div
              key={`${brand}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex-shrink-0 px-10 py-6 bg-muted/30 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm hover:border-[#1a6acd]/50 transition-all duration-300"
            >
              <span className="text-xl font-bold text-[#1a6acd] dark:text-white/80 whitespace-nowrap">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
