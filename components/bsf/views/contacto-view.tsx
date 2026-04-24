"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const contactInfo = [
  {
    icon: MapPin,
    label: "DIRECCIÓN",
    value: "Av Reforma 342 piso 21, col. Juárez, CDMX",
  },
  {
    icon: Phone,
    label: "TELÉFONO",
    value: "+55 1239 0806",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "contacto@bsfasesores.com",
  },
  {
    icon: Clock,
    label: "HORARIO",
    value: "Lun - Vie: 9:00 AM - 6:00 PM",
  },
]

export function ContactoView({ isDarkMode }: { isDarkMode: boolean }) {
  const calendlyUrl = isDarkMode 
    ? "https://calendly.com/alexblan/45min?hide_landing_page_details=1&hide_gdpr_banner=1&back=1&month=2026-04&background_color=0a1628&text_color=ffffff&primary_color=1a6acd"
    : "https://calendly.com/alexblan/45min?hide_landing_page_details=1&hide_gdpr_banner=1&back=1&month=2026-04"

  const [formState, setFormState] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ nombre: "", empresa: "", telefono: "", email: "", mensaje: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="pt-32 lg:pt-44 bg-background dark:bg-[#0a1628]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Block 1: Calendly (Focus: Entrevista con Alex Blanco) */}
        <section className="mb-24 lg:mb-32">
          <AnimateOnScroll variant="fadeUp">
            <div className="text-center mb-12">
              <span className="tag-pill mb-4">Agenda Directa</span>
              <h2 className="text-3xl lg:text-5xl font-black text-[#0a1628] dark:text-[#1a6acd] mb-6 font-serif uppercase">
                Entrevista con <span className="text-[#1a6acd] dark:text-white">Alex Blanco</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
                Selecciona el horario que mejor te convenga para una entrevista de perfilamiento 
                con nuestro equipo de liderazgo.
              </p>
            </div>
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
        </section>

        {/* Block 2: Info & Form (8/4 Grid) */}
        <section className="mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto items-start">
            
            {/* Col 8: Form (Direct on background) */}
            <div className="lg:col-span-8">
              <AnimateOnScroll variant="slideLeft">
                <span className="tag-pill mb-4">
                  Contacto Directo
                </span>
                <h1 className="text-4xl lg:text-6xl font-black text-[#0a1628] dark:text-[#1a6acd] mb-8 font-serif uppercase tracking-tight">
                  Envíanos Un <span className="text-[#1a6acd] dark:text-white">Mensaje</span>
                </h1>
                
                {isSubmitted ? (
                  <div className="bg-white dark:bg-[#1a1f2e] p-12 rounded-[3.5rem] border border-border shadow-3xl text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-black mb-2">¡Mensaje Recibido!</h4>
                    <p className="text-muted-foreground">Un asesor experto se pondrá en contacto contigo a la brevedad.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <Input
                          placeholder="Nombre completo"
                          value={formState.nombre}
                          onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                          required
                          className="h-16 rounded-2xl px-6 bg-muted/30 border-border focus:ring-2 ring-[#1a6acd] transition-all"
                        />
                        <Input
                          placeholder="Empresa (opcional)"
                          value={formState.empresa}
                          onChange={(e) => setFormState({ ...formState, empresa: e.target.value })}
                          className="h-16 rounded-2xl px-6 bg-muted/30 border-border"
                        />
                      </div>
                      <div className="space-y-6">
                        <Input
                          type="email"
                          placeholder="Correo electrónico"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                          className="h-16 rounded-2xl px-6 bg-muted/30 border-border"
                        />
                        <Input
                          placeholder="Teléfono / WhatsApp"
                          value={formState.telefono}
                          onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                          required
                          className="h-16 rounded-2xl px-6 bg-muted/30 border-border"
                        />
                      </div>
                    </div>
                    <Textarea
                      placeholder="¿En qué podemos asesorarte hoy?"
                      value={formState.mensaje}
                      onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                      required
                      className="min-h-[200px] rounded-[2rem] px-6 py-6 bg-muted/30 border-border resize-none"
                    />
                    <Button 
                      variant="default" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full lg:w-auto px-12 h-16 rounded-2xl shadow-xl hover:scale-[1.02] transition-all group"
                    >
                      {isSubmitting ? "Enviando..." : "SOLICITAR ASESORÍA"}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </AnimateOnScroll>
            </div>

            {/* Col 4: Contact Info (Stacked) */}
            <div className="lg:col-span-4 space-y-4">
              <AnimateOnScroll variant="slideRight">
                <div className="flex flex-col gap-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="bg-white dark:bg-[#1a1f2e] p-8 rounded-[2.5rem] border border-border shadow-sm group hover:border-[#1a6acd] transition-all duration-500"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-[#1a6acd]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a6acd] transition-colors">
                          <info.icon className="w-6 h-6 text-[#1a6acd] group-hover:text-white" />
                        </div>
                        <div>
                          <h3 className="text-[10px] font-black text-[#1a6acd] tracking-[0.2em] mb-2 uppercase">{info.label}</h3>
                          <p className="text-foreground font-bold text-sm lg:text-base leading-tight break-words">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>


      </div>

      {/* Block 3: Map View (OUTSIDE container for true full width) */}
      <section className="mt-24">
        <AnimateOnScroll variant="fadeUp" className="container mx-auto px-4 lg:px-8 mb-8">
          <h3 className="text-2xl font-black text-[#0a1628] dark:text-[#1a6acd] font-serif uppercase tracking-tight flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#1a6acd]" />
            Nuestra <span className="text-[#1a6acd] dark:text-white">Ubicación</span>
          </h3>
        </AnimateOnScroll>
        
        <div className="relative w-full h-[500px] lg:h-[650px] overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661889566802!2d-99.16558492469546!3d19.427023981866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff315d3a3333%3A0x9c1a5f2e0a9e6a9e!2sAv.%20Paseo%20de%20la%20Reforma%20342%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1699999999999!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación BSF"
            className="w-full h-full transition-all duration-500 dark:brightness-[0.7] dark:contrast-[1.2] dark:invert dark:hue-rotate-[180deg]"
          />
        </div>
      </section>
    </div>
  )
}
