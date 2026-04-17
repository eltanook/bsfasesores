"use client"

import { motion } from "framer-motion"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import Image from "next/image"

const testimonials = [
  {
    name: "Adolfo Carrizales",
    role: "Cliente",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adolfo-sTw1kutAe9qxgo0rFpgwg670xgKpw5.jpg",
    quote: "Quiero agradecer a Edgar Blanco por su respaldo para poder iniciar en esta nueva experiencia y sé que vamos a lograr muchas cosas ya que es una persona muy trabajadora, responsable y dedicada, además de ser muy empática con sus asesores.",
  },
  {
    name: "Emanuel Blanco Rosales",
    role: "Asesor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emanuel-G1rhOG6rZMenQrhnt2lUs0pGO0VoRn.jpg",
    quote: "BSF Asesores se enfoca en desarrollar constantemente al asesor, brindándole las herramientas necesarias e impulsando su crecimiento a través de capacitaciones continuas, con el objetivo de alcanzar sus metas profesionales y personales.",
  },
  {
    name: "Liliana Méndez",
    role: "Cliente",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liliana-Zc0tVZX2476xlc9gW9bM17TWHOBooU.jpg",
    quote: "Gracias a BSF Asesores encontré el plan de retiro perfecto para mi situación. La atención personalizada y el seguimiento constante me dieron la confianza que necesitaba para proteger mi futuro financiero.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_aniv-2x1sD6r8CDM9LZWE0RrwLeoQcMJRT1.jpg"
          alt="Testimonios Background"
          fill
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/85" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimateOnScroll variant="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag-pill">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white dark:text-[#1a6acd] mb-6 font-serif">
            Lo que dicen <span className="text-[#1a6acd] dark:text-white">nuestros clientes</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={testimonial.name}
              variant="fadeUp"
              delay={index * 0.15}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-2xl h-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#1a6acd]/50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed flex-grow italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
