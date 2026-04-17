"use client"

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
}

export function InicioView({ onNavigate }: InicioViewProps) {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection onNavigate={onNavigate} />
      <ProblemSection />
      <ServicesSection />
      <AboutSection onNavigate={onNavigate} />
      <TestimonialsSection />
      <CTABannerSection onNavigate={onNavigate} />
      <BrandsSection />
    </div>
  )
}
