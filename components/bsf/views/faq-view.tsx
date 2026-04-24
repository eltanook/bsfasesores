"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, MessageCircle, Calendar, ArrowRight, Check } from "lucide-react"

const categories = [
  { id: "general", label: "General" },
  { id: "proteccion", label: "Protección" },
  { id: "retiro", label: "Retiro" },
  { id: "asesores", label: "Ser Asesor" },
]

const faqs = [
  // General
  {
    category: "general",
    question: "¿En qué ciudades de México tienen presencia?",
    answer: "Nuestra oficina central está en la Ciudad de México (Av. Reforma), pero brindamos asesoría digital y presencial en toda la República Mexicana. Hemos protegido familias desde Tijuana hasta Cancún.",
  },
  {
    category: "general",
    question: "¿Cómo es el seguimiento después de contratar?",
    answer: "En BSF no somos vendedores de pólizas, somos somos socios de vida. Tendrás un gestor de cuenta dedicado y una revisión anual de tus metas para asegurar que tu protección evolucione con tus necesidades.",
  },
  {
    category: "general",
    question: "¿Qué compañías aseguradoras respaldan sus servicios?",
    answer: "Trabajamos con las instituciones líderes en el mercado, incluyendo GNP, AXA, MetLife, Seguros Monterrey y Allianz, entre otras. Esto nos permite comparar y ofrecerte siempre la mejor opción.",
  },
  {
    category: "general",
    question: "¿Tienen algún costo las asesorías iniciales?",
    answer: "No, en BSF Asesores creemos firmemente en el valor de la información. Nuestra primera sesión de diagnóstico es totalmente gratuita y sin compromiso de contratación.",
  },

  // Protección
  {
    category: "proteccion",
    question: "¿Qué tipos de seguros ofrecen en BSF Asesores?",
    answer: "Ofrecemos una gama premium de seguros: Vida, Gastos Médicos Mayores, Seguros Internacionales, y Protección Patrimonial. Garantizamos el mejor respaldo disponible en México.",
  },
  {
    category: "proteccion",
    question: "¿Qué sucede si ya tengo un seguro pero quiero asesoría de BSF?",
    answer: "Podemos realizar una 'Auditoría de Pólizas' sin costo. Analizamos tus coberturas actuales y te decimos si estás pagando de más o si tienes huecos de protección. Te ayudamos a optimizar lo que ya tienes.",
  },
  {
    category: "proteccion",
    question: "¿Cómo funcionan los seguros internacionales?",
    answer: "Están diseñados para quienes buscan atención en los mejores hospitales del mundo, principalmente en EE.UU. y Europa, con coberturas millonarias y servicios de élite en cualquier parte del planeta.",
  },
  {
    category: "proteccion",
    question: "¿Puedo asegurar a mi empresa y empleados?",
    answer: "Sí, contamos con soluciones corporativas que incluyen seguros de vida grupo, gastos médicos mayores colectivo y blindaje de hombre clave para proteger la continuidad de tu negocio.",
  },

  // Retiro
  {
    category: "retiro",
    question: "¿Cómo funcionan los beneficios fiscales en los planes de retiro?",
    answer: "Los planes personales de retiro (PPR) te permiten deducir tus aportaciones de impuestos anualmente (Art. 151 LISR). Esto significa que el gobierno te devuelve una parte de tu ahorro cada año en tu declaración anual.",
  },
  {
    category: "retiro",
    question: "¿A qué edad es ideal comenzar un plan de jubilación?",
    answer: "El mejor momento fue ayer; el segundo mejor es hoy. Debido al interés compuesto, comenzar a los 25 años requiere una inversión significativamente menor que comenzar a los 45 para obtener el mismo capital final.",
  },
  {
    category: "retiro",
    question: "¿Mi ahorro para el retiro está protegido contra la inflación?",
    answer: "Totalmente. Nuestros planes están ligados a instrumentos que absorben el impacto inflacionario (como UDIs o dólares), garantizando que tu poder adquisitivo se mantenga intacto al momento de jubilarte.",
  },
  {
    category: "retiro",
    question: "¿Puedo retirar mi dinero antes de los 65 años?",
    answer: "Existen opciones de liquidez programada, aunque el beneficio fiscal máximo se alcanza a los 65 años. Diseñamos el plan de acuerdo a tus metas específicas de corto, mediano y largo plazo.",
  },

  // Ser Asesor
  {
    category: "asesores",
    question: "¿Qué apoyo brindan a los nuevos asesores?",
    answer: "Ofrecemos el programa 'BSF Academy': capacitación técnica certificada, mentoría 1-a-1 con Edgar Blanco, herramientas digitales de prospección y acceso directo a los portales de las mejores aseguradoras.",
  },
  {
    category: "asesores",
    question: "¿Es necesario tener experiencia previa para ser asesor?",
    answer: "No es indispensable, pero buscamos perfiles con alta ética, vocación de servicio y ambición. Nosotros te certificamos ante la CNSF y te enseñamos la metodología que nos ha dado 25 años de éxito.",
  },
  {
    category: "asesores",
    question: "¿Cuál es el esquema de compensación?",
    answer: "Contamos con uno de los esquemas de comisiones y bonos más competitivos del sector, además de convenciones internacionales y premios por cumplimiento de metas de protección.",
  },
  {
    category: "asesores",
    question: "¿Cómo me convierto en asesor de BSF?",
    answer: "El proceso inicia con una entrevista de perfilamiento. Si eres seleccionado, iniciamos tu capacitación para el examen de certificación de la Comisión Nacional de Seguros y Fianzas.",
  },
]

export function FAQView({ onNavigate }: { onNavigate: (view: any) => void }) {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filteredFaqs = faqs.filter(faq => 
    (faq.category === activeCategory || activeCategory === "all")
  )

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a1628]">
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
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white dark:text-[#1a6acd] mb-6 leading-tight font-serif uppercase tracking-tight">
                Resolvemos <br/>
                <span className="text-[#1a6acd] dark:text-white">Tus Dudas.</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Todo lo que necesitas saber sobre protección, retiro y carrera profesional en BSF Asesores.
              </p>
              <Button 
                variant="default"
                size="lg"
                onClick={() => onNavigate("contacto")}
                className="mt-4"
              >
                Hablemos Hoy
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll variant="slideRight" className="relative hidden lg:block">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/5 h-[400px] lg:h-[500px]">
                <img
                  src="/images/cta-team.jpg"
                  alt="Atención BSF"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Categories - Adjusted Positioning to bridge sections perfectly */}
      <section className="container mx-auto px-4 relative z-20 -mt-6">
        <div className="max-w-4xl mx-auto">
          {/* Desktop Pills */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setOpenIndex(null)
                }}
                className={`px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat.id 
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/40 scale-105" 
                  : "bg-white dark:bg-[#1a1f2e] text-foreground hover:bg-gray-100 dark:hover:bg-[#252a3a] border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full p-5 rounded-2xl bg-card border border-border text-foreground font-black uppercase tracking-widest flex items-center justify-between shadow-xl"
            >
              <span>{categories.find(c => c.id === activeCategory)?.label}</span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-primary" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-4 right-4 mt-2 p-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl z-50 overflow-hidden"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id)
                        setOpenIndex(null)
                        setIsDropdownOpen(false)
                      }}
                      className={`flex items-center justify-between w-full p-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                        activeCategory === cat.id 
                          ? "bg-primary/10 text-primary" 
                          : "hover:bg-accent text-foreground/70"
                      }`}
                    >
                      {cat.label}
                      {activeCategory === cat.id && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Questions Grid */}
      <section className="py-20 lg:py-28 container mx-auto px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-4 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white dark:bg-[#1a1f2e] border border-border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "ring-2 ring-[#1a6acd] shadow-2xl" : "hover:shadow-xl"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-lg lg:text-xl font-bold font-serif text-[#0a1628] dark:text-[#1a6acd] pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="flex-shrink-0 w-10 h-10 bg-[#1a6acd]/10 rounded-full flex items-center justify-center text-[#1a6acd]"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-muted-foreground leading-relaxed text-sm lg:text-base">
                        <div className="h-px w-full bg-border mb-6" />
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Premium CTA Banner - Styled like Home page CTA */}
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
                <div className="max-w-2xl text-left">
                  <span className="tag-pill mb-4 border-white/20 text-white">
                    Diagnóstico Gratuito
                  </span>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-serif leading-tight">
                    ¿Aún tienes dudas? <br/>
                    <span className="text-[#1a6acd]">Hablemos hoy mismo.</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light italic opacity-90">
                    Nuestro equipo de expertos está listo para brindarte la asesoría personalizada 
                    que tú y tu familia necesitan. Recibe una sesión de diagnóstico sin costo.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button 
                      variant="default"
                      size="lg"
                      onClick={() => onNavigate("contacto")}
                      className="group px-8 hover:scale-105 transition-transform"
                    >
                      <Calendar className="mr-2 w-5 h-5" />
                      AGENDAR ASESORÍA
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full px-8"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="mr-2 w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WHATSAPP DIRECTO
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
