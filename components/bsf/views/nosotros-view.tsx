"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Award, Target, Users, Heart, ArrowDown } from "lucide-react"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { ViewType } from "@/app/page"

interface NosotrosViewProps {
  onNavigate: (view: ViewType) => void
}

const values = [
  {
    icon: Heart,
    title: "Confianza",
    description: "Construimos relaciones duraderas basadas en la transparencia y la honestidad con cada uno de nuestros clientes.",
  },
  {
    icon: Award,
    title: "Integridad",
    description: "Actuamos siempre con ética profesional, priorizando los intereses de nuestros clientes sobre todo lo demás.",
  },
  {
    icon: Target,
    title: "Profesionalismo",
    description: "Brindamos excelencia en cada asesoría, con conocimiento actualizado y las mejores prácticas del sector.",
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Nos comprometemos con el éxito de nuestros clientes y asesores, acompañándolos en cada paso del camino.",
  },
]

const timeline = [
  { year: "1999", event: "Fundación de BSF Asesores" },
  { year: "2005", event: "Expansión a nivel nacional" },
  { year: "2010", event: "Alianza con principales aseguradoras" },
  { year: "2015", event: "Lanzamiento del programa de desarrollo de asesores" },
  { year: "2020", event: "Transformación digital" },
  { year: "2024", event: "+200 clientes y +25 años de experiencia" },
]

export function NosotrosView({ onNavigate }: NosotrosViewProps) {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-[50vh] flex items-center bg-[#0a1628]">
        {/* Premium CSS Header Style */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1a6acd]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1a3a5c]/30 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/80 to-[#0a1628]/40" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll variant="slideLeft">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white dark:text-[#1a6acd] mb-6 leading-tight font-serif">
                Más de <span className="text-[#1a6acd] dark:text-white">25 años</span> <br/>
                Protegiendo Tu Futuro.
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                BSF Asesores nació con la visión de transformar la manera en que las personas 
                y empresas acceden a servicios financieros y de protección patrimonial.
              </p>
              <Button 
                variant="default"
                size="lg"
                onClick={() => window.location.href = '#'}
                className="mt-8"
              >
                Conoce Más
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll variant="slideRight" className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/5">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fotografos-papaya-estudio-sesion-edgar-blanco-1-UWX4Goujmw4yKGQxNt23GsO3YVCDA9.jpg"
                  alt="Edgar Blanco - Fundador de BSF Asesores"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section - Moved Up */}
      <section className="relative -mt-12 z-10 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll
                key={value.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-card border border-border rounded-3xl p-8 h-full shadow-2xl group hover:border-[#1a6acd] transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-[#1a6acd]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a6acd] transition-colors duration-500">
                    <value.icon className="w-8 h-8 text-[#1a6acd] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-4 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Leader & Philosophy Section - Merged */}
      <section className="py-20 lg:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            {/* Image (Now Left) */}
            <AnimateOnScroll variant="slideLeft" className="relative group">
              <div className="relative rounded-[30px] overflow-hidden shadow-2xl max-h-[650px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fotografos-papaya-estudio-sesion-edgar-blanco-3-MKcMsAXZxbo7w0hRl0X3GZfRMeLU4L.jpg"
                  alt="Edgar Blanco - Director de BSF Asesores"
                  width={600}
                  height={800}
                  className="w-full h-[650px] object-cover object-[center_35%] transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1a6acd]/10 rounded-full blur-3xl -z-10" />
            </AnimateOnScroll>

            {/* Content (Now Right) */}
            <AnimateOnScroll variant="slideRight">
              <span className="tag-pill">
                Liderazgo & Filosofía
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0a1628] dark:text-[#1a6acd] mb-8 font-serif">
                Edgar Blanco
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>
                  En BSF Asesores, nuestra misión trasciende la simple venta de una póliza. Estamos 
                  aquí para construir legados y blindar el futuro de las familias mexicanas."
                </p>
                <p>
                  Con más de dos décadas de liderazgo, Edgar Blanco ha consolidado una firma 
                  basada en la integridad, el profesionalismo y un compromiso inquebrantable 
                  con la excelencia en el servicio. Especialista en blindaje patrimonial con 
                  una profunda vocación humana de protección.
                </p>
              </div>

              <Button 
                variant="default" 
                size="lg"
                onClick={() => onNavigate("contacto")}
                className="rounded-full px-8 shadow-xl hover:shadow-[#1a6acd]/20"
              >
                Agendar con Edgar
              </Button>

              <div className="grid sm:grid-cols-2 gap-4 mt-12">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl border border-border">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-bold text-sm">Asesoría Certificada</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl border border-border">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-bold text-sm">Experto en Mercados</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white dark:text-[#1a6acd] mb-6 font-serif">
              Nuestra <span className="text-[#1a6acd] dark:text-white">Trayectoria</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm">Un camino de crecimiento y confianza</p>
          </AnimateOnScroll>

          <div className="relative max-w-6xl mx-auto">
            {/* Background Road Graphics */}
            <div className="absolute top-6 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 hidden md:block" />
            
            {/* The Road Path (SVG) */}
            <div className="absolute top-6 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#1a6acd]/30 to-transparent -translate-y-1/2 hidden md:block blur-sm" />
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1a6acd] to-transparent -translate-y-1/2 hidden md:block" />

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {timeline.map((item, index) => (
                <AnimateOnScroll
                  key={item.year}
                  variant="fadeUp"
                  delay={index * 0.15}
                  className="relative group"
                >
                  {/* Road Marker */}
                  <div className="hidden md:flex flex-col items-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#0a1628] border-2 border-[#1a6acd] flex items-center justify-center z-20 group-hover:scale-125 transition-transform duration-500">
                      <div className="w-4 h-4 bg-[#1a6acd] rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 group-hover:bg-[#1a6acd]/10 group-hover:border-[#1a6acd]/30 transition-all duration-500 h-full">
                    <div className="text-3xl font-black text-[#1a6acd] mb-3 font-serif italic">
                      {item.year}
                    </div>
                    <p className="text-sm text-gray-300 font-medium leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                  
                  {/* Mobile Mobile Road Arrow */}
                  <div className="md:hidden flex justify-center mt-4">
                    <ArrowDown className="w-6 h-6 text-[#1a6acd]/30" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Decorative Years Background */}
        <div className="absolute top-0 right-0 text-[10rem] font-black text-white/[0.02] pointer-events-none select-none">
          2024
        </div>
        <div className="absolute bottom-0 left-0 text-[10rem] font-black text-white/[0.02] pointer-events-none select-none">
          1999
        </div>
      </section>
    </div>
  )
}
