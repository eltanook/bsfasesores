"use client"

import { motion } from "framer-motion"
import { AnimateOnScroll } from "@/components/bsf/animate-on-scroll"
import { LineChart, Clock, Activity, HelpCircle, TrendingDown, ShieldAlert, GraduationCap, UserCircle } from "lucide-react"

const problems = [
  {
    title: "Sin Protección Patrimonial",
    description: "Tu patrimonio y el de tu familia quedan expuestos ante imprevistos.",
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    title: "Retiro Sin Planificar",
    description: "Sin un plan, tu estabilidad financiera futura está en riesgo.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Gastos Médicos Inesperados",
    description: "Una emergencia de salud puede agotar tus ahorros en semanas.",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "Falta de Asesoría",
    description: "Decisiones financieras sin guía experta pueden costarte caro.",
    icon: <HelpCircle className="w-6 h-6" />,
  },
  {
    title: "Inflación Imparable",
    description: "Tus ahorros pierden valor real cada día que no están invertidos.",
    icon: <TrendingDown className="w-6 h-6" />,
  },
  {
    title: "Patrimonio Expuesto",
    description: "Años de esfuerzo pueden desaparecer ante una crisis no prevista.",
    icon: <ShieldAlert className="w-6 h-6" />,
  },
  {
    title: "Educación Incierta",
    description: "El costo de la universidad crece más rápido que la economía.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Dependencia de Pensión",
    description: "Confiar solo en el gobierno para tu retiro es un riesgo futuro.",
    icon: <UserCircle className="w-6 h-6" />,
  },
]

export function ProblemSection() {
  const allProblems = [...problems, ...problems, ...problems] // Triple for seamless scroll

  return (
    <section className="py-20 lg:py-28 bg-background dark:bg-[#0a1628] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <AnimateOnScroll variant="fadeUp" className="text-center max-w-3xl mx-auto">
          <span className="tag-pill">
            El Problema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#0a1628] dark:text-[#1a6acd] mb-6 font-serif leading-tight">
            La incertidumbre <br/>
            <span className="text-[#1a6acd] dark:text-white">frena tu crecimiento</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sin la protección adecuada, tu patrimonio y el futuro de tu familia están 
            expuestos a riesgos imprevistos.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Infinite Ribbon Carousel - CSS Animation for reliable pause-on-hover */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Blur Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-r from-background dark:from-[#0a1628] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-l from-background dark:from-[#0a1628] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-problem w-max">
          {allProblems.map((problem, index) => (
            <div
              key={`${problem.title}-${index}`}
              className="flex-shrink-0 w-80 lg:w-96 p-8 mx-3 rounded-3xl bg-card border border-border shadow-md backdrop-blur-sm hover:border-[#1a6acd] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#1a6acd]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a6acd] transition-colors duration-500">
                <span className="text-[#1a6acd] group-hover:text-white transition-colors duration-500">
                  {problem.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] dark:text-[#1a6acd] mb-3 group-hover:text-[#1a6acd] dark:group-hover:text-white transition-colors">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-problem {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll-problem {
          animation: scroll-problem 60s linear infinite;
        }
        .animate-scroll-problem:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
