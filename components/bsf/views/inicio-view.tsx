"use client"

import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { HeroSection } from "@/components/bsf/sections/hero-section"
import { ProblemSection } from "@/components/bsf/sections/problem-section"
import { ServicesSection } from "@/components/bsf/sections/services-section"
import { AboutSection } from "@/components/bsf/sections/about-section"
import { TestimonialsSection } from "@/components/bsf/sections/testimonials-section"
import { CTABannerSection } from "@/components/bsf/sections/cta-banner-section"
import { BrandsSection } from "@/components/bsf/sections/brands-section"
import type { ViewType } from "@/app/page"

interface InicioViewProps {
  onNavigate: (view: ViewType) => void
  isDarkMode: boolean
}

export function InicioView({ onNavigate, isDarkMode }: InicioViewProps) {
  const calendlyUrl = isDarkMode 
    ? "https://calendly.com/alexblan/45min?hide_landing_page_details=1&hide_gdpr_banner=1&back=1&month=2026-04&background_color=0a1628&text_color=ffffff&primary_color=1a6acd"
    : "https://calendly.com/alexblan/45min?hide_landing_page_details=1&hide_gdpr_banner=1&back=1&month=2026-04"

  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection onNavigate={onNavigate} />
      <ProblemSection />
      <ServicesSection />
      <AboutSection onNavigate={onNavigate} />
      <TestimonialsSection />

      {/* Calendly Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll variant="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
            <span className="tag-pill">
              Agenda Online
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a1628] dark:text-[#1a6acd] mb-6 font-serif uppercase">
              Entrevista con <span className="text-[#1a6acd] dark:text-white">Alex Blanco</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              Selecciona el horario que mejor te convenga para una entrevista inicial 
              con nuestro líder de desarrollo.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeUp">
            <div className={`h-[600px] sm:h-[750px] rounded-3xl sm:rounded-[3.5rem] overflow-hidden shadow-3xl border-8 border-white dark:border-white/5 transition-colors duration-500 ${isDarkMode ? "bg-[#0a1628]" : "bg-white"}`}>
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Alex Blanco"
                className={isDarkMode ? "bg-[#0a1628]" : "bg-white"}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABannerSection onNavigate={onNavigate} />
      <BrandsSection />
    </div>
  )
}
