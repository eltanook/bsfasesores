"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { Button } from "@/components/ui/button"
import type { ViewType } from "@/app/page"
import Image from "next/image"

interface ServiciosViewProps {
  onNavigate: (view: ViewType) => void
}

const services = [
  {
    tag: "Protección Familiar",
    title: "Asesoría En Seguros De Vida",
    description: "No solo vendemos pólizas, diseñamos el blindaje de tu familia. Te ayudamos a elegir el seguro de vida ideal, con opciones flexibles que incluyen ahorro y cobertura personalizada.",
    features: [
      "Coberturas flexibles adaptadas a tu etapa de vida",
      "Estrategias con componente de ahorro e inversión bursátil",
      "Blindaje patrimonial ante fluctuaciones económicas",
    ],
    image: "/images/life-insurance.png",
  },
  {
    tag: "Carrera Profesional",
    title: "Promotoría & Desarrollo de Asesores",
    description: "Buscamos a los futuros líderes del sector asegurador. Te ofrecemos un programa de formación acelerada, mentoría directa y las herramientas tecnológicas más avanzadas del mercado.",
    features: [
      "Programa 'BSF Academy' de capacitación técnica",
      "Mentorías presenciales y digitales personalizadas",
      "Ecosistema digital de prospección y CRM avanzado",
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
  },
  {
    tag: "Salud & Bienestar",
    title: "Gastos Médicos Mayores",
    description: "Tu salud no puede esperar a trámites burocráticos. Diseñamos planes que te dan acceso inmediato a la mejor red hospitalaria nacional e internacional con blindaje financiero.",
    features: [
      "Cobertura premium nacional e internacional",
      "Acceso directo a especialistas y hospitales de primer nivel",
      "Coordinación de emergencias críticas 24/7",
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
  },
  {
    tag: "Futuro Financiero",
    title: "Planes Personales de Retiro (PPR)",
    description: "El retiro es la etapa más larga de tu vida. Implementamos planes que aprovechan los beneficios fiscales para que tus rendimientos protejan tu patrimonio contra la inflación.",
    features: [
      "Deducibilidad de impuestos bajo el Art. 151 de la LISR",
      "Fondos de inversión con rendimientos protegidos",
      "Protección automática contra inflación y devaluación",
    ],
    image: "/images/retirement.png",
  },
]

export function ServiciosView({ onNavigate }: ServiciosViewProps) {
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
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#1a6acd 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll variant="slideLeft">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white dark:text-[#1a6acd] mb-6 font-serif leading-[0.9]">
                Protección Que <br/>
                <span className="text-[#1a6acd] dark:text-white">Trasciende Generaciones.</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Descubre nuestra gama de servicios diseñados bajo un estándar de excelencia, 
                enfocados en blindar tu salud, patrimonio y metas futuras.
              </p>
              <Button 
                variant="default"
                size="lg"
                onClick={() => onNavigate("contacto")}
                className="mt-4"
              >
                Solicitar Asesoría
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll variant="slideRight" className="relative hidden lg:block">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/5 h-[400px] lg:h-[575px]">
                <Image
                  src="/images/team2.jpg"
                  alt="Asesoría BSF"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {services.map((service, index) => (
              <AnimateOnScroll
                key={service.title}
                variant={index % 2 === 0 ? "slideLeft" : "slideRight"}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="lg:w-1/2">
                  <span className="tag-pill mb-4">
                    {service.tag}
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-black text-[#0a1628] dark:text-[#1a6acd] mb-6 font-serif leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid sm:grid-cols-1 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#1a6acd]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1a6acd]" />
                        </div>
                        <span className="text-foreground font-bold text-sm tracking-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="default"
                    size="lg"
                    onClick={() => onNavigate("contacto")}
                    className="shadow-xl"
                  >
                    Hablar con un asesor
                  </Button>
                </div>

                {/* Visual Card (Image with Enhanced Glass Card) */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative aspect-[16/11.5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 dark:border-white/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
                    
                    {/* Enhanced Floating Info Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 p-6 lg:p-8 backdrop-blur-xl bg-white/10 dark:bg-[#0a1628]/20 border border-white/20 rounded-[2rem] shadow-2xl"
                    >
                      <div className="text-white">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-[#1a6acd]">BSF Garantía</p>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 leading-tight uppercase font-serif">{service.title}</h3>
                        <p className="text-xs opacity-70 leading-relaxed max-w-xs font-light tracking-wide">Asesoría certificada respaldada por más de dos décadas de excelencia en el mercado mexicano.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Banner - Styled like "Únete al equipo" */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll variant="fadeUp" className="max-w-7xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-[3.5rem] overflow-hidden shadow-2xl min-h-[400px] flex items-center"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/team.jpg')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/60" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 md:p-16 lg:p-20">
                <div className="max-w-2xl">
                  <span className="tag-pill mb-4 border-white/20 text-white">
                    Diagnóstico Gratuito
                  </span>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-serif leading-tight">
                    ¿Tu patrimonio está <br/>
                    <span className="text-[#1a6acd]">realmente protegido?</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light italic opacity-90">
                    No dejes al azar lo que te ha tomado años construir. Recibe una sesión de diagnóstico sin costo hoy mismo con nuestros expertos certificados.
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
                      className="group px-8 hover:scale-105 transition-transform"
                    >
                      SOLICITAR ASESORÍA GRATUITA
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
