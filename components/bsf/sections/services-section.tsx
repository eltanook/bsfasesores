"use client"

import { motion } from "framer-motion"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { Heart, ArrowUpRight, Phone, CheckCircle2, CircleDollarSign } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Asesoría en Seguros de Vida",
    description: "Protección financiera integral para tu familia con seguros de vida que combinan ahorro, inversión y coberturas flexibles. Aseguramos tu legado con una estrategia personalizada adaptada a cada etapa de tu vida.",
    featured: true,
  },
  {
    title: "Promotoría y Desarrollo",
    description: "Lideramos el éxito de una nueva generación de asesores, brindando mentoría experta, herramientas digitales y un portafolio premium para potenciar tu carrera profesional.",
  },
  {
    title: "Gastos Médicos Mayores",
    description: "Garantizamos el acceso a la mejor atención médica privada con seguros de cobertura amplia, coordinando servicios hospitalarios y tratamientos especializados.",
  },
  {
    title: "Planes Personales de Retiro",
    description: "Diseñamos planes de retiro con una visión estratégica, optimizando rendimientos y beneficios fiscales para que disfrutes de una jubilación digna, segura y financieramente independiente.",
    featured: true,
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll variant="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag-pill">
            Cómo lo resolvemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a1628] dark:text-[#1a6acd] mb-6 font-serif">
            Nuestros <span className="text-[#1a6acd] dark:text-white">Servicios y Planes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Soluciones financieras diseñadas para blindar tu salud, patrimonio y el futuro de tu familia.
          </p>
        </AnimateOnScroll>

        {/* Bento Grid Layout - 3 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Service 1 - Life Insurance */}
          <AnimateOnScroll variant="slideLeft" className="md:col-span-2 lg:col-span-2">
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative h-full min-h-[340px] bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] rounded-[2.5rem] overflow-hidden grid md:grid-cols-2"
            >
              <div className="relative p-8 lg:p-10 flex flex-col z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-[#1a6acd]/10 rounded-xl">
                    <Heart className="w-8 h-8 text-[#1a6acd]" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="flex-grow flex flex-col justify-end">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-serif">
                    {services[0].title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {services[0].description}
                  </p>
                </div>
              </div>
              
              <div className="relative p-6 h-full flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                  <Image
                    src="/images/life-insurance.png"
                    alt="Seguros de Vida"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    quality={85}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0a1628]/20" />
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>

          {/* Service 2 - Advisor Development */}
          <AnimateOnScroll variant="slideRight" delay={0.1} className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative h-full min-h-[260px] bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] rounded-[2.5rem] overflow-hidden"
            >
              {/* Background Favicon Logo - Bottom Center */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 opacity-[0.12] pointer-events-none">
                <Image
                  src="/images/favicon.png"
                  alt="Background Logo"
                  width={140}
                  height={140}
                  className="grayscale invert"
                />
              </div>

              <div className="relative p-8 lg:p-10 h-full flex flex-col z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-5 bg-[#1a6acd]/10 rounded-2xl">
                    <Phone className="w-14 h-14 text-[#1a6acd]" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">
                  {services[1].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </motion.div>
          </AnimateOnScroll>

          {/* Service 3 - Medical Insurance */}
          <AnimateOnScroll variant="slideLeft" delay={0.2} className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative h-full min-h-[260px] bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] rounded-[2.5rem] overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 400" className="absolute bottom-0 right-0 h-full" preserveAspectRatio="xMaxYMax meet">
                  <path d="M80,400 L80,200 L100,150 L100,130 Q90,120 90,100 Q90,80 100,70 Q110,60 120,70 Q130,80 130,100 Q130,120 120,130 L120,150 L140,200 L140,400 Z" fill="currentColor" className="text-[#1a6acd]" />
                  <path d="M60,400 L60,250 L80,200 L80,400 Z" fill="currentColor" className="text-[#1a6acd]/70" />
                  <path d="M140,400 L140,200 L160,250 L160,400 Z" fill="currentColor" className="text-[#1a6acd]/50" />
                </svg>
              </div>

              <div className="relative p-8 lg:p-10 h-full flex flex-col z-10 text-white">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-[#1a6acd]/10 rounded-xl">
                    <CheckCircle2 className="w-8 h-8 text-[#1a6acd]" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">
                  {services[2].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[85%]">
                  {services[2].description}
                </p>
              </div>
            </motion.div>
          </AnimateOnScroll>

          {/* Service 4 - Retirement Plans */}
          <AnimateOnScroll variant="slideRight" delay={0.3} className="md:col-span-2 lg:col-span-2">
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative h-full min-h-[340px] bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] rounded-[2.5rem] overflow-hidden grid md:grid-cols-2"
            >
              <div className="relative p-6 h-full flex items-center justify-center order-2 md:order-1">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                  <Image
                    src="/images/retirement.png"
                    alt="Planes de Retiro"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    quality={85}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0a1628]/20" />
                </div>
              </div>

              <div className="relative p-8 lg:p-10 flex flex-col z-10 order-1 md:order-2">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-[#1a6acd]/10 rounded-xl">
                    <CircleDollarSign className="w-8 h-8 text-[#1a6acd]" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="flex-grow flex flex-col justify-end">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-serif">
                    {services[3].title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {services[3].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}
