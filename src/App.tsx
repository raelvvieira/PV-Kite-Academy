/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  TrendingDown, 
  AlertCircle, 
  TimerOff, 
  Play, 
  PlayCircle, 
  Star, 
  CheckCircle, 
  XCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Video,
  Map,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const line1Images = [
  "https://i.ibb.co/C3pHSDF5/1.png",
  "https://i.ibb.co/PzGzjJxS/2.png",
  "https://i.ibb.co/mFX3vsnn/3.png",
  "https://i.ibb.co/WNRQxRSk/4.png",
  "https://i.ibb.co/QFXrHLDZ/6.png",
  "https://i.ibb.co/tPYR9Xqs/5.png",
  "https://i.ibb.co/rG08tLFn/7.png",
  "https://i.ibb.co/wNqYDWsj/img-0-6-12cb07a2c4574713bbce11b98e80860e.avif"
];

const line2Images = [
  "https://i.ibb.co/pvqvGqHc/img-0-5-30ca55ba0bbb4cc1a7c3f02300b6fd80.avif",
  "https://i.ibb.co/XrHPPM97/img-0-A-BASE-92fc4f83bfa64ba8a883f74a5ca909a0.avif",
  "https://i.ibb.co/sYL6MdD/img-0-aprenda-a-sltar-bd4bca13a27644f38910a269074e840c.avif",
  "https://i.ibb.co/fVjp49Cq/img-0-Introducao-ao-kiteloop-753f87c331704a6eab1106452af72d53.avif",
  "https://i.ibb.co/67vqrFFp/img-0-AULA-INICIAL-120041b78d1242c89c172f7e258e283c.avif",
  "https://i.ibb.co/wrRq0zdZ/img-0-manobras-popo-23744b8c9583469e8d3943f451da611a.avif",
  "https://i.ibb.co/mV2jfMxN/img-0-transit-pop-9ccab220220a44f0a9cb87f952f222b0.avif",
  "https://i.ibb.co/r22gk2hp/img-0-treinamento-e6006d39975b433da87498932f95cfe1.avif"
];

const socialProofTestimonials = [
  {
    nome: "Thiago Mendes",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    depoimento: "A didática do Heiner é absurda de simples. Melhorei minha postura e a altura do salto logo nas primeiras sessões.",
    resultado: "1º salto em 15 dias"
  },
  {
    nome: "Marina Silva",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    depoimento: "Tinha pavor de perder o controle do kite no vento forte. Com as aulas teóricas de física do velejo, recuperei 100% da confiança.",
    resultado: "Velejo sem medo e transições perfeitas"
  },
  {
    nome: "Felipe Rodrigues",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    depoimento: "Eu cansava muito rápido por fazer força exagerada. O curso sobre a física do contra-vento mudou totalmente minha relação com a prancha.",
    resultado: "Evolução do básico ao intermediário"
  },
  {
    nome: "Carla Nunes",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    depoimento: "Os mapas de erros comuns são o grande diferencial. Eu batia cabeça repetindo falhas que o Heiner explicou em 5 minutos de vídeo.",
    resultado: "Subiu de nível em semanas"
  },
  {
    nome: "Ronaldo Costa",
    foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    depoimento: "Assisti ao passo a passo no celular antes de entrar na água e executei meu primeiro salto correto no mesmo dia. Incrível!",
    resultado: "Dominou a técnica de salto alto"
  }
];

export default function App() {
  const [isManeuversExpanded, setIsManeuversExpanded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary selection:text-on-primary overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="absolute top-0 w-full flex justify-center items-center px-3 md:px-8 py-2 md:py-4 z-50">
        <img 
          src="https://i.ibb.co/gbLQm6jf/logo.png" 
          alt="Heiner Academy Logo" 
          className="h-[110px] md:h-[166px] w-auto"
          referrerPolicy="no-referrer"
          decoding="async"
          {...{ fetchPriority: "high" }}
        />
      </nav>

      {/* Cinematic Hero */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden diagonal-hero pt-40 md:pt-56 lg:pt-60 pb-16 md:pb-24 bg-black">
        {/* Subtle orange ambient glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] bg-primary/20 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] md:w-[35rem] md:h-[35rem] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 max-w-7xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-center lg:text-left">
            {/* Left side: Text content */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start gap-6">
              {/* Headline Principal (H1) */}
              <h1 className="font-headline font-normal text-[22px] md:text-[25px] leading-[1.3] tracking-tighter text-white">
                <span className="inline-block whitespace-nowrap">Aprenda Kitesurf em menos de 30 dias</span>{" "}
                <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent font-normal block sm:inline">
                  com a plataforma online nº1 do Brasil com video aulas das principais manobras de kite
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="font-body text-[16px] md:text-[18px] text-[#D0D0D0] max-w-xl leading-[1.65] font-normal">
                Mesmo que você nunca tenha praticado Kitesurf, ou que já seja avançado, aqui você terá uma base de conhecimento e tudo para sua evolução ao nível Pro.
              </p>
              
              {/* CTA Principal */}
              <div className="flex flex-col items-center lg:items-start gap-4 w-full max-w-md mt-1">
                <a 
                  href="#pricing"
                  className="btn-premium-primary text-[16px] md:text-[18px] font-semibold tracking-wide w-full flex items-center justify-center py-3 px-6"
                >
                  Quero aprender kitesurf agora
                </a>
              </div>
            </div>

            {/* Right side: Mockup Image */}
            <div className="lg:col-span-6 w-full relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-3xl pointer-events-none"></div>
              <img 
                src="https://i.ibb.co/PvCmjmbm/Design-sem-nome-4.png" 
                alt="Visualização da Plataforma KiteAcademy" 
                className="w-full h-auto object-contain relative z-10 max-w-[32rem] lg:max-w-none lg:scale-120 origin-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                {...{ fetchPriority: "high" }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Prova Social Section */}
      <section className="relative py-16 md:py-24 bg-black overflow-hidden border-t border-white/5">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3] mb-3">
              Confiado por <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">mais de 3.600 alunos</span>
            </h2>
            <p className="text-[#CCCCCC] text-[18px] md:text-[20px] leading-[1.4] font-normal max-w-xl mx-auto">
              Resultados reais e comprovados de quem aprendeu kitesurf de verdade com nosso método.
            </p>
          </div>

          {/* Stats em 3 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300">
              <span className="block font-headline font-normal text-[18px] md:text-[22px] text-[#FF6B35] mb-2">97%</span>
              <p className="text-[#D0D0D0] text-[14px] md:text-[16px] leading-[1.65] font-normal">
                Conseguem o 1º salto em menos de 30 dias
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300">
              <span className="block font-headline font-normal text-[18px] md:text-[22px] text-[#FF6B35] mb-2">4.8/5 ⭐</span>
              <p className="text-[#D0D0D0] text-[14px] md:text-[16px] leading-[1.65] font-normal">
                De satisfação dos alunos
              </p>
            </div>
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300">
              <span className="block font-headline font-normal text-[18px] md:text-[22px] text-[#FF6B35] mb-2">+10.000</span>
              <p className="text-[#D0D0D0] text-[14px] md:text-[16px] leading-[1.65] font-normal">
                Horas de aulas já assistidas
              </p>
            </div>
          </div>

          {/* Carrossel de Depoimentos */}
          <div className="relative max-w-4xl mx-auto px-4 select-none">
            <div className="overflow-hidden relative min-h-[220px] md:min-h-[180px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonialIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center shadow-2xl relative"
                >
                  {/* Avatar / Photo */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-full blur opacity-75"></div>
                    <img
                      src={socialProofTestimonials[activeTestimonialIndex].foto}
                      alt={socialProofTestimonials[activeTestimonialIndex].nome}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-background relative z-10"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow text-center md:text-left">
                    <span className="inline-block bg-primary/10 text-[#FF6B35] text-[14px] md:text-[16px] font-normal px-3 py-1 rounded-full mb-3 tracking-wider">
                      {socialProofTestimonials[activeTestimonialIndex].resultado}
                    </span>
                    <p className="text-[#D0D0D0] text-[16px] md:text-[18px] italic font-normal leading-[1.65] mb-4">
                      "{socialProofTestimonials[activeTestimonialIndex].depoimento}"
                    </p>
                    <h4 className="font-headline font-normal text-white text-[18px] md:text-[20px] leading-[1.4]">
                      {socialProofTestimonials[activeTestimonialIndex].nome}
                    </h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2 mx-auto sm:mx-0">
                {socialProofTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonialIndex === idx
                        ? "bg-primary w-6"
                        : "bg-neutral-700 hover:bg-neutral-500"
                    }`}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons (Desktop/Tablet) */}
              <div className="hidden sm:flex gap-3">
                <button
                  onClick={() =>
                    setActiveTestimonialIndex(
                      (prev) => (prev - 1 + socialProofTestimonials.length) % socialProofTestimonials.length
                    )
                  }
                  className="bg-neutral-900 border border-white/10 hover:border-primary/50 text-white p-2.5 rounded-full transition-all duration-200 flex items-center justify-center hover:bg-neutral-850"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-neutral-300" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonialIndex((prev) => (prev + 1) % socialProofTestimonials.length)
                  }
                  className="bg-neutral-900 border border-white/10 hover:border-primary/50 text-white p-2.5 rounded-full transition-all duration-200 flex items-center justify-center hover:bg-neutral-850"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-5 h-5 text-neutral-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maneuvers List Section */}
      <section className="py-12 md:py-20 w-full overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14 px-4">
          <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3] mb-8">
            O que você <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">vai receber</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            <div className="flex items-center gap-3 bg-neutral-900/60 border border-white/5 p-5 rounded-xl hover:border-primary/30 transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <h4 className="text-white text-[18px] md:text-[20px] font-normal leading-[1.4]">Mais de 20 manobras ensinadas</h4>
            </div>
            
            <div className="flex items-center gap-3 bg-neutral-900/60 border border-white/5 p-5 rounded-xl hover:border-primary/30 transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <h4 className="text-white text-[18px] md:text-[20px] font-normal leading-[1.4]">Mapa mental + glossário interativo</h4>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900/60 border border-white/5 p-5 rounded-xl hover:border-primary/30 transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <h4 className="text-white text-[18px] md:text-[20px] font-normal leading-[1.4]">Análise visual de erros</h4>
            </div>

            <div className="flex items-center gap-3 bg-neutral-900/60 border border-white/5 p-5 rounded-xl hover:border-primary/30 transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <h4 className="text-white text-[18px] md:text-[20px] font-normal leading-[1.4]">Plataforma em constante evolução</h4>
            </div>
          </div>
        </div>

        {/* Double Infinite Carousel Section (Edge-to-Edge) */}
        <div className="w-full flex flex-col gap-6 md:gap-8 mb-10 md:mb-14 relative select-none">
          {/* Row 1 - Leftward Carousel */}
          <div className="relative w-full overflow-hidden flex py-2 border-y border-white/5 bg-black/20">
            <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-marquee-left-slow flex gap-4 md:gap-6 px-4">
              {[...line1Images, ...line1Images, ...line1Images].map((img, idx) => (
                <div 
                  key={`line1-${idx}`} 
                  className="flex-shrink-0 w-36 sm:w-48 md:w-56 aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl hover:border-primary/50 transition-all duration-300 pointer-events-auto bg-neutral-900"
                >
                  <img 
                    src={img} 
                    alt={`Preview Line 1 ${idx}`} 
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Rightward Carousel */}
          <div className="relative w-full overflow-hidden flex py-2 border-y border-white/5 bg-black/20">
            <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-marquee-right-slow flex gap-4 md:gap-6 px-4">
              {[...line2Images, ...line2Images, ...line2Images].map((img, idx) => (
                <div 
                  key={`line2-${idx}`} 
                  className="flex-shrink-0 w-36 sm:w-48 md:w-56 aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl hover:border-primary/50 transition-all duration-300 pointer-events-auto bg-neutral-900"
                >
                  <img 
                    src={img} 
                    alt={`Preview Line 2 ${idx}`} 
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* List of Modules Layout centered */}
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsManeuversExpanded(!isManeuversExpanded)}
              className="w-full bg-surface-container hover:bg-neutral-850 border border-white/10 hover:border-primary/50 transition-all p-5 md:p-7 rounded-2xl flex items-center justify-between group shadow-2xl cursor-pointer"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="font-headline font-normal text-[18px] md:text-[20px] leading-[1.4] text-white tracking-tight">
                    Veja algumas das manobras que você irá aprender
                  </h3>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 text-primary transition-transform duration-300 ${isManeuversExpanded ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isManeuversExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden w-full space-y-4 mt-6"
                >
                  {[
                    { name: "01 · Transição simples", result: "O fim das viradas brutas: mude de direção com elegância e sem perder o vento. A base de tudo." },
                    { name: "02 · Toeside", result: "Domine a base invertida: navegue com style e prepare o terreno para manobras de onda." },
                    { name: "03 · Pop", result: "A explosão controlada: aprenda a usar a prancha como mola para saltos potentes." },
                    { name: "04 · Backroll", result: "O giro perfeito com controle total: a manobra que faz todo mundo na praia parar pra olhar." },
                    { name: "05 · Front roll", result: "O giro pra frente que exige técnica pura: domine a orientação espacial e surpreenda no velejo." },
                    { name: "06 · Darkslide", result: "A manobra de assinatura: deslize na água com o estilo que define os kitesurfistas avançados." },
                    { name: "07 · Kiteloop na areia", result: "Pratique o movimento do kite em terra firme antes de entrar na água. O segredo de quem aprende sem tombos desnecessários." },
                    { name: "08 · Kiteloop no bodydrag", result: "Execute o loop sem a prancha para gravar o timing no corpo. A forma mais segura de decodificar o giro." },
                    { name: "09 · Heliloop", result: "A variação que conecta o loop ao salto. Domine o giro combinado com altitude e prepare o terreno para o nível máximo." },
                    { name: "10 · Megaloop", result: "O loop em máxima potência, altitude e velocidade angular. A manobra que define os kitesurfistas de elite: agora ao seu alcance." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ x: 10 }}
                      className="bg-surface-container p-4 md:p-5 flex flex-col justify-center border-l-2 border-transparent hover:border-primary transition-all cursor-default rounded-r-md"
                    >
                      <h4 className="font-headline font-normal text-[18px] md:text-[20px] leading-[1.4] text-white tracking-tight mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[#D0D0D0] text-[16px] md:text-[18px] font-normal leading-[1.65]">{item.result}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="#pricing"
              className="btn-premium-primary text-[16px] md:text-[18px] font-semibold tracking-wide uppercase whitespace-nowrap"
            >
              Quero entrar na plataforma
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section (White Background Contrast) */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white text-background">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10 px-4">
            <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-background tracking-tighter leading-[1.3] mb-6">O que te <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">trava</span></h2>
            <p className="font-body text-background/80 text-[18px] md:text-[20px] leading-[1.4] max-w-2xl mx-auto">Muitos praticantes passam meses ou anos sem sair do mesmo lugar no velejo. Descubra os principais fatores que impedem a sua evolução.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
            {[
              {
                icon: <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />,
                title: "Estagnado no bate e volta"
              },
              {
                icon: <TrendingDown className="w-6 h-6 text-primary flex-shrink-0" />,
                title: "Medo de perder o controle"
              },
              {
                icon: <TimerOff className="w-6 h-6 text-primary flex-shrink-0" />,
                title: "Força bruta no lugar de técnica"
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />,
                title: "YouTube não é suficiente"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 md:p-5 border border-background/5 bg-background/5 hover:border-primary/50 transition-all rounded-lg"
              >
                <div>{item.icon}</div>
                <h3 className="font-headline font-normal text-[18px] md:text-[20px] text-background tracking-tight leading-[1.4]">{item.title}</h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 md:mt-14 text-center max-w-4xl mx-auto text-background">
            <p className="font-body text-background/80 text-[16px] md:text-[18px] leading-[1.65] max-w-2xl mx-auto mb-6">Todos os problemas têm solução técnica. A KiteAcademy foi construída para eliminar cada um deles, na progressão certa, com o método visual que o Heiner levou 14 anos para decifrar.</p>
            <p className="font-body text-[#FF6B35] font-normal text-[16px] md:text-[18px] leading-[1.65] tracking-wide max-w-2xl mx-auto">É isso que a KiteAcademy resolve.</p>
          </div>
        </div>
      </section>

      {/* Benefits (6 Pilares da Evolução) */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14 px-4">
          <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3]">
            Uma <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">metodologia estruturada</span> de ensino para desenvolver senso crítico, orientar o timing e destravar cada fase do movimento de forma consistente e segura.
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {[
            { num: "01", title: "Visão de raio-x", desc: "Visualize as fases da manobra antes de entrar na água." },
            { num: "02", title: "Dna da evolução", desc: "Entenda a relação de progresso entre cada manobra." },
            { num: "03", title: "Senso crítico", desc: "Aprenda a diagnosticar e ajustar seu próprio velejo." },
            { num: "04", title: "Laboratório de erros", desc: "Corrija falhas com análises visuais de erros comuns." },
            { num: "05", title: "Timing inteligente", desc: "Decodifique o momento de comando do kite em segundos." },
            { num: "06", title: "Progressão segura", desc: "Adquira total confiança técnica antes de subir a potência." }
          ].map((benefit, i) => (
            <div key={i} className="glass p-4 sm:p-5 hover:bg-white/5 transition-colors rounded-xl group">
              <div className="text-[#FF6B35] font-headline font-normal text-[18px] md:text-[22px] mb-2 group-hover:scale-105 transition-transform origin-left">{benefit.num}</div>
              <h4 className="font-headline font-normal text-[18px] md:text-[20px] leading-[1.4] text-white mb-1 tracking-tight">{benefit.title}</h4>
              <p className="text-[16px] md:text-[18px] text-[#D0D0D0] font-normal leading-[1.65]">{benefit.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-14 text-center">
          <a 
            href="#pricing"
            className="btn-premium-primary text-[16px] md:text-[18px] font-semibold tracking-wide uppercase whitespace-nowrap"
          >
            Quero acessar a plataforma
          </a>
        </div>
      </section>

      {/* Method Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-background">
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3] mb-6">
              A plataforma que <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">encurta anos</span> em semanas
            </h2>
            <p className="font-body text-[#D0D0D0] text-[18px] md:text-[20px] leading-[1.4] max-w-2xl mx-auto mb-6 font-normal">
              Não é sobre força. É sobre o ângulo da prancha, a posição da barra e o timing exato do kite. O Heiner decodificou cada movimento, das manobras fundamentais ao MegaLoop, para que você não precise adivinhar nada.
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 max-w-4xl mx-auto">
              {[
                { text: "Aulas em alta definição", icon: <Video className="w-5 h-5 text-primary" /> },
                { text: "Análise de erros reais", icon: <AlertCircle className="w-5 h-5 text-primary" /> },
                { text: "Mapa visual de progressão completo", icon: <Map className="w-5 h-5 text-primary" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full shadow-xl backdrop-blur-[4px] hover:border-primary/40 hover:bg-white/10 transition-all duration-300">
                  {item.icon}
                  <span className="font-body font-normal text-[16px] md:text-[18px] text-[#D0D0D0] leading-[1.65]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gráfico Visual */}
          <div className="bg-[#121212] text-white rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-white/10 shadow-2xl mt-12 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h3 className="font-headline font-normal text-[18px] md:text-[20px] leading-[1.4] text-white tracking-tight">Curva de evolução</h3>
                <p className="text-[#999999] text-[14px] leading-[1.6] font-normal">Estimativa de progresso em 12 semanas</p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[14px] leading-[1.6] font-normal">
                <span className="flex items-center gap-1.5 text-red-500">
                  <span className="w-3.5 h-0.5 border-t-2 border-dashed border-red-500"></span> Sem Kite Academy
                </span>
                <span className="flex items-center gap-1.5 text-emerald-500">
                  <span className="w-3.5 h-0.5 bg-emerald-500"></span> Com Kite Academy
                </span>
              </div>
            </div>

            {/* Responsive SVG Container - Entirely visible on mobile, no horizontal scroll */}
            <div className="w-full h-auto">
              <svg viewBox="0 0 600 310" className="w-full h-auto overflow-visible select-none">
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((level, i) => (
                  <line 
                    key={i}
                    x1="50" 
                    y1={40 + (1 - level/100) * 220} 
                    x2="540" 
                    y2={40 + (1 - level/100) * 220} 
                    stroke="rgba(255, 255, 255, 0.05)" 
                    strokeWidth="1" 
                  />
                ))}

                {/* X Axis Weeks Grid */}
                {[0, 2, 4, 6, 8, 10, 12].map((week, i) => (
                  <line 
                    key={i}
                    x1={50 + (week / 12) * 490} 
                    y1="40" 
                    x2={50 + (week / 12) * 490} 
                    y2="260" 
                    stroke="rgba(255, 255, 255, 0.02)" 
                    strokeWidth="1" 
                  />
                ))}

                {/* Text for levels on Y Axis */}
                {[0, 25, 50, 75, 100].map((level, i) => (
                  <text
                    key={i}
                    x="40"
                    y={44 + (1 - level/100) * 220}
                    fill="rgba(255, 255, 255, 0.45)"
                    fontSize="11"
                    textAnchor="end"
                    className="font-mono font-normal"
                  >
                    {level}%
                  </text>
                ))}

                {/* Text for weeks on X Axis */}
                {[0, 2, 4, 6, 8, 10, 12].map((week, i) => (
                  <text
                    key={i}
                    x={50 + (week / 12) * 490}
                    y="280"
                    fill="rgba(255, 255, 255, 0.45)"
                    fontSize="11"
                    textAnchor="middle"
                    className="font-mono font-normal"
                  >
                    {week === 0 ? "Início" : `Sem ${week}`}
                  </text>
                ))}

                {/* Gradient and glow filter definitions */}
                <defs>
                   <linearGradient id="com-estrutura-gradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                     <stop offset="100%" stopColor="#10b981" stopOpacity="0.00" />
                   </linearGradient>
                   <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="3" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                </defs>

                {/* Area path for Com Estrutura */}
                <motion.path 
                  d="M 50 260 
                     L 90.8 233.6 
                     L 131.6 205 
                     L 172.5 189.6 
                     L 213.3 172 
                     L 254.1 154.4 
                     L 295 136.8 
                     L 335.8 117 
                     L 376.6 101.6 
                     L 417.5 88.4 
                     L 458.3 77.4 
                     L 499.1 68.6 
                     L 540 62 
                     L 540 260 Z" 
                  fill="url(#com-estrutura-gradient)" 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />

                {/* Curve for: Sem Estrutura */}
                <motion.path 
                  d="M 50 260 
                     L 90.8 249 
                     L 131.6 238 
                     L 172.5 227 
                     L 213.3 216 
                     L 254.1 213.8 
                     L 295 211.6 
                     L 335.8 209.4 
                     L 376.6 207.2 
                     L 417.5 205 
                     L 458.3 202.8 
                     L 499.1 198.4 
                     L 540 194" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                />

                {/* Curve for: Com Estrutura */}
                <motion.path 
                  d="M 50 260 
                     L 90.8 233.6 
                     L 131.6 205 
                     L 172.5 189.6 
                     L 213.3 172 
                     L 254.1 154.4 
                     L 295 136.8 
                     L 335.8 117 
                     L 376.6 101.6 
                     L 417.5 88.4 
                     L 458.3 77.4 
                     L 499.1 68.6 
                     L 540 62" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  filter="url(#glow-emerald)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />

                {/* Dots for endpoints */}
                <motion.circle 
                  cx="540" 
                  cy="194" 
                  r="5" 
                  fill="#ef4444" 
                  stroke="#ffffff" 
                  strokeWidth="1.5" 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                />
                <motion.circle 
                  cx="540" 
                  cy="62" 
                  r="6" 
                  fill="#10b981" 
                  stroke="#ffffff" 
                  strokeWidth="2" 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Short Instructor Section */}
      <section className="py-12 md:py-20 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3]">
              Seu <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">instrutor</span>
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 md:-inset-4 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all rounded-3xl"></div>
            <div className="relative glass p-6 md:p-8 rounded-2xl border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 md:items-stretch items-center">
              
              {/* Image side */}
              <div className="relative overflow-hidden rounded-xl border border-white/5 shadow-2xl max-w-sm md:max-w-none mx-auto md:mx-0 w-full h-full min-h-[340px] md:min-h-0 flex flex-col justify-stretch">
                <img 
                  src="https://i.ibb.co/3ydxSSp6/foto-do-heiner.png" 
                  alt="Heiner Hofmann" 
                  className="w-full h-full object-cover rounded-xl flex-grow min-h-[340px] md:min-h-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 left-3 z-10 bg-black/75 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <p className="font-body font-normal text-[18px] md:text-[20px] leading-[1.4] text-white tracking-tight">Heiner Hofmann</p>
                  <p className="text-[#FF6B35] text-[14px] leading-[1.6] font-normal">Fundador da KiteAcademy</p>
                </div>
              </div>

              {/* Bio and CTA side */}
              <div className="flex flex-col justify-center text-center md:text-left">
                <div className="space-y-4 text-[#D0D0D0] font-body text-[16px] md:text-[18px] leading-[1.65] font-normal">
                  <p>
                    Heiner Hofmann é instrutor de elite com 14 anos de experiência no Kitesurf, tendo fundado uma das maiores academias de performance do país.
                  </p>
                  <p>
                    Já transformou o velejo de mais de 3.600 alunos, desbloqueando a evolução de praticantes que orçavam mal em atletas de Freestyle que dominam o mar com técnica e estilo.
                  </p>
                  <p>
                    Meu compromisso é encurtar o seu caminho, entregando a técnica visual que levei anos para decifrar nas condições mais variadas. Agora vou fazer o mesmo por você.
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center md:justify-start">
                  <a 
                    href="#pricing"
                    className="btn-premium-primary text-[16px] md:text-[18px] font-semibold tracking-wide uppercase whitespace-nowrap py-2.5 px-6 animate-pulse"
                  >
                    ACESSAR A KITEACADEMY
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (White Background Contrast) */}
      <section className="py-10 md:py-16 px-0 bg-white text-background">
        <div className="w-full">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
            <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-background tracking-tighter leading-[1.3] mb-6"><span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">Resultados reais</span> de alunos reais</h2>
            <p className="font-body text-background/80 text-[18px] md:text-[20px] leading-[1.4] max-w-2xl mx-auto">Veja o feedback de quem já destravou suas manobras e encurtou anos de tentativas frustradas com a didática do Heiner.</p>
          </div>

          {/* Video Testimonials */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full rounded-2xl shadow-xl border border-background/5"
                src="https://www.youtube.com/embed/Mkh7eml60LA?si=9K0bdVFM1amaxRCu" 
                title="YouTube video player 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full rounded-2xl shadow-xl border border-background/5"
                src="https://www.youtube.com/embed/I6eUi072XCQ?si=t7T1ZlLTfFpJbLx2" 
                title="YouTube video player 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full rounded-2xl shadow-xl border border-background/5"
                src="https://www.youtube.com/embed/I6eUi072XCQ?si=t7T1ZlLTfFpJbLx2" 
                title="YouTube video player 3" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="mt-8 md:mt-12 text-center px-4">
            <a 
              href="#pricing"
              className="btn-premium-primary text-[16px] md:text-[18px] font-semibold tracking-wide uppercase py-3 px-8 inline-flex items-center justify-center shadow-lg"
            >
              Assinar plataforma
            </a>
          </div>
        </div>
      </section>

      {/* Valor da Plataforma */}
      <section className="py-16 md:py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/5 blur-[130px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3]">
              Por menos do que <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">1 aula presencial</span>
            </h2>
          </div>

          {/* Comparison Cards Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Sem Estrutura Card */}
            <div className="bg-[#121212]/60 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-white/10 transition-all duration-300 relative">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <XCircle className="w-5 h-5 shrink-0" />
                  </div>
                  <h3 className="font-headline font-semibold text-[18px] md:text-[20px] text-neutral-300">Sem Kite Academy</h3>
                </div>

                <div className="mb-6 pb-6 border-b border-white/5">
                  <span className="font-mono text-[14px] md:text-[15px] text-white block">Investimento médio estimado:</span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="font-headline font-semibold text-[24px] text-white line-through">R$ 150 - 200</span>
                    <span className="text-white/80 text-[13px] font-mono">/ hora de aula</span>
                  </div>
                </div>

                <ul className="space-y-4 text-neutral-400 text-[14px] md:text-[15px]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 text-[16px] font-bold shrink-0 leading-none mt-0.5">•</span>
                    <span>Instrução limitada estritamente ao tempo de água</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 text-[16px] font-bold shrink-0 leading-none mt-0.5">•</span>
                    <span>Sem identificação ativa e antecipação de erros comuns</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 text-[16px] font-bold shrink-0 leading-none mt-0.5">•</span>
                    <span>Evolução demorada baseada em tentativa e erro</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 text-[16px] font-bold shrink-0 leading-none mt-0.5">•</span>
                    <span>Nenhum material de apoio ou guias rápidos de revisão</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kite Academy Card */}
            <div className="bg-gradient-to-b from-[#181818] to-[#0d0d0d] border border-primary/25 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-primary/45 transition-all duration-300 relative shadow-[0_8px_32px_rgba(255,102,0,0.06)]">
              {/* Featured Badge */}
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-[#FF6600] to-[#E55A00] text-white font-headline font-semibold text-[11px] tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-lg border border-white/10">
                Melhor escolha
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  </div>
                  <h3 className="font-headline font-semibold text-[18px] md:text-[20px] text-white">Com Kite Academy</h3>
                </div>

                <p className="text-neutral-300 text-[15px] md:text-[16px] leading-[1.5] font-normal mb-6">
                  Estrutura sequencial completa desenvolvida para encurtar o seu aprendizado em semanas.
                </p>
                
                <div className="mb-6 pb-6 border-b border-white/5">
                  <span className="text-emerald-500 text-[13px] font-semibold tracking-wider uppercase block">Acesso total e imediato</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-headline font-semibold text-[32px] text-white">R$ 67</span>
                    <span className="text-neutral-400 text-[15px] font-normal font-sans">/mês</span>
                  </div>
                </div>

                <ul className="space-y-4 text-neutral-300 text-[14px] md:text-[15px]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Mais de 20 manobras didaticamente detalhadas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Prevenção sistemática e correção cirúrgica de erros</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Suporte contínuo via plataforma e fórum oficial</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Acesso ilimitado de qualquer dispositivo e local</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="text-center mt-12">
            <a 
              href="#pricing"
              className="btn-premium-primary text-[16px] md:text-[18px] font-semibold tracking-wide uppercase px-10 py-3 inline-flex items-center justify-center shadow-lg border border-white/5"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Pricing and Bonus Section */}
      <section className="pt-12 md:pt-20 pb-8 md:pb-12 bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Bonus Section (BEFORE Pricing) */}
        <div className="max-w-4xl mx-auto px-4 relative z-10 mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
            <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3] mb-4">
              <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">Bônus exclusivos</span> da assinatura
            </h2>
            <p className="font-body text-[#D0D0D0] text-[18px] md:text-[20px] leading-[1.4] max-w-2xl mx-auto">
              Aproveite conteúdos complementares projetados para acelerar os seus resultados sem pagar nenhum centavo a mais.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Bonus Card 1 - Horizontal & Minimalist */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 group relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/25"
            >
              {/* Cover Image */}
              <div className="flex-shrink-0 w-28 md:w-36 flex justify-center">
                <img 
                  src="https://i.ibb.co/j9LLGVKm/mapa-mental.png" 
                  alt="Mapa Mental" 
                  className="w-full h-auto object-contain max-h-36 group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Card Details */}
              <div className="flex-grow text-center md:text-left w-full">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                    <h3 className="font-headline font-semibold text-[20px] text-white tracking-tight">
                      Mapa mental técnico
                    </h3>
                    <span className="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full w-fit self-center sm:self-auto">
                      Bônus Grátis
                    </span>
                  </div>
                  <div className="text-[13px] text-neutral-500 font-mono">
                    Valor original: <span className="line-through">R$ 47,00</span>
                  </div>
                </div>

                <p className="text-[#FF6600] text-[15px] md:text-[16px] font-medium mb-2.5 leading-tight">
                  Sua bússola visual para todas as manobras
                </p>
                <p className="text-neutral-400 text-[14px] md:text-[15px] font-normal leading-[1.6] mb-4 max-w-2xl">
                  A síntese visual completa das manobras fundamentais e do KiteLoop para revisar em segundos antes de cada sessão.
                </p>

                {/* Sub features tags */}
                <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-[12px] md:text-[13px] text-primary/85 font-mono justify-center md:justify-start">
                  <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">Backroll</span>
                  <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">Front Roll</span>
                  <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">Darkslide</span>
                  <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">KiteLoop</span>
                  <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">Heliloop</span>
                  <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">MegaLoop</span>
                </div>
              </div>
            </motion.div>

            {/* Bonus Card 2 - Horizontal & Minimalist */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 group relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/25"
            >
              {/* Cover Image */}
              <div className="flex-shrink-0 w-28 md:w-36 flex justify-center">
                <img 
                  src="https://i.ibb.co/0yc2qQ4r/gloss-rio.png" 
                  alt="Glossário" 
                  className="w-full h-auto object-contain max-h-36 group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Card Details */}
              <div className="flex-grow text-center md:text-left w-full">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                    <h3 className="font-headline font-semibold text-[20px] text-white tracking-tight">
                      Glossário premium
                    </h3>
                    <span className="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full w-fit self-center sm:self-auto">
                      Bônus Grátis
                    </span>
                  </div>
                  <div className="text-[13px] text-neutral-500 font-mono">
                    Valor original: <span className="line-through">R$ 50,00</span>
                  </div>
                </div>

                <p className="text-[#FF6600] text-[15px] md:text-[16px] font-medium mb-2.5 leading-tight">
                  O vocabulário da performance
                </p>
                <p className="text-neutral-400 text-[14px] md:text-[15px] font-normal leading-[1.6] mb-4 max-w-2xl">
                  Domine cada termo e variação técnica que define o velejo de alto nível. Entenda exatamente o que os prós estão falando.
                </p>

                <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 py-1.5 px-4 rounded text-[12px] md:text-[13px] text-emerald-400 font-semibold uppercase tracking-wider">
                  ✓ Incluso no pacote especial
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pricing Card Section */}
        <div id="pricing" className="max-w-2xl mx-auto px-4 relative z-10 scroll-mt-24">
          <div className="glass relative p-5 md:p-8 overflow-hidden shadow-[0_0_50px_rgba(247,89,0,0.1)] border-primary/20 rounded-2xl">
            
            <div className="grid grid-cols-1 gap-6 items-center">
              <div className="flex flex-col items-center w-full">
                <div className="max-w-md mx-auto text-center mb-6 px-2">
                  <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3] mb-3">Acesso imediato à <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">KiteAcademy</span></h2>
                </div>

                {/* Lista Completa */}
                <div className="w-full max-w-lg mx-auto mb-6 text-left px-2">
                  <h3 className="font-headline font-normal text-[16px] md:text-[18px] text-[#FF6B35] mb-3 text-center md:text-left">
                    O que está incluso:
                  </h3>
                  <div className="space-y-3 font-body divide-y divide-white/5">
                    <div className="flex justify-between items-center py-2 text-[16px] md:text-[18px]">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-normal">Curso Freestyle Base</span>
                      </div>
                      <span className="font-mono text-white/50 line-through text-[14px] md:text-[16px]">R$ 297,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-[16px] md:text-[18px]">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-normal">KiteLoop Masterclass</span>
                      </div>
                      <span className="font-mono text-white/50 line-through text-[14px] md:text-[16px]">R$ 397,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-[16px] md:text-[18px]">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-normal">Mapa Mental Técnico</span>
                      </div>
                      <span className="font-mono text-white/50 line-through text-[14px] md:text-[16px]">R$ 47,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-[16px] md:text-[18px]">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-normal">Glossário Premium</span>
                      </div>
                      <span className="font-mono text-white/50 line-through text-[14px] md:text-[16px]">R$ 50,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-[16px] md:text-[18px]">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-normal">Novos Conteúdos mensais</span>
                      </div>
                      <span className="text-[#FF6B35] font-normal text-[14px] md:text-[16px] bg-[#FF6B35]/10 px-2.5 py-0.5 rounded">Incluso</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-[16px] md:text-[18px]">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-normal">Garantia Incondicional</span>
                      </div>
                      <span className="text-emerald-500 font-normal text-[14px] md:text-[16px] bg-emerald-500/10 px-2.5 py-0.5 rounded">Sem risco</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                     <span className="text-white/60 font-normal text-[14px] md:text-[16px]">Soma dos valores avulsos:</span>
                    <span className="font-headline font-normal text-white/50 line-through text-[14px] md:text-[16px]">R$ 791,00</span>
                  </div>
                </div>

                {/* Offer Section */}
                <div className="flex flex-col items-center mb-5 text-center">
                  <p className="text-[#D0D0D0] text-[16px] md:text-[18px] font-normal mb-2">
                    Assine hoje por apenas:
                  </p>
                  
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-headline font-normal text-[22px] md:text-[25px] text-[#FF6B35]">R$ 67,00</span>
                    <span className="text-white text-[16px] md:text-[18px] font-normal">/ mês</span>
                  </div>

                  <div className="flex items-center justify-center bg-white/5 py-2 px-5 rounded-full border border-white/10 mt-3.5 mb-2">
                    <span className="text-[#D0D0D0] text-[14px] md:text-[16px] font-normal">
                      Cancele quando quiser • Sem fidelidade
                    </span>
                  </div>
                </div>

                <div className="w-full flex flex-col items-center px-2">
                  <a 
                    href="https://pay.kiwify.com.br/JgM9BI0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-lg btn-premium-primary text-[16px] md:text-[18px] font-semibold tracking-wide animate-glow uppercase py-4 md:py-4.5 flex items-center justify-center px-6"
                  >
                    Assinar Agora
                  </a>
                </div>

                <p className="mt-6 text-center text-[14px] md:text-[16px] text-[#999999]/90 font-normal">Pagamento 100% seguro via Kiwify</p>

                <div className="w-[calc(100%+40px)] -mx-5 md:w-[calc(100%+64px)] md:-mx-8 mt-4 overflow-hidden">
                  <img 
                    src="https://i.ibb.co/BHvDQ1rG/Design-sem-nome.png" 
                    alt="Design sem nome" 
                    className="w-full h-auto object-contain block"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-12 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left relative z-10 backdrop-blur-sm shadow-xl">
            <img 
              src="https://i.ibb.co/Jws3zPL0/Garantia.png" 
              alt="Garantia" 
              className="w-24 sm:w-28 md:w-32 h-auto shrink-0 filter drop-shadow-[0_0_20px_rgba(255,102,0,0.25)] hover:scale-105 transition-transform duration-300" 
              referrerPolicy="no-referrer" 
              loading="lazy"
              decoding="async"
            />
            <div>
              <h4 className="font-headline font-normal text-[18px] md:text-[20px] leading-[1.4] text-white tracking-tight mb-2">Garantia incondicional de 7 dias</h4>
              <p className="text-[#D0D0D0] text-[16px] md:text-[18px] font-normal leading-[1.65]">
                Se você não ficar 100% satisfeito por qualquer motivo, basta solicitar o reembolso e devolveremos todo o seu investimento de forma simples e rápida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Glass Accordion) */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10 px-4">
          <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3] mb-6"><span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">Perguntas</span> frequentes</h2>
          <p className="font-body text-[#D0D0D0] text-[18px] md:text-[20px] leading-[1.4] max-w-2xl mx-auto">Tem alguma dúvida sobre o funcionamento da plataforma ou do método? Confira as respostas abaixo.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "O que é a KiteAcademy e como funciona a assinatura?",
              a: "A KiteAcademy é uma plataforma de ensino por assinatura para kitesurfistas. Por R$ 67/mês você tem acesso a todos os cursos, mapas mentais, glossário e novos conteúdos que chegam todo mês. Cancele quando quiser, sem multa ou burocracia."
            },
            {
              q: "Como eu evoluo sem aula prática presencial?",
              a: "O método do Heiner foi desenvolvido especificamente para ensino visual à distância. Você assiste às aulas, entende os mapas de erros, aplica a progressão pedagógica e vai para a água com um plano claro de execução. Mais de 3.600 alunos evoluíram sem o Heiner presencialmente."
            },
            {
              q: "Este conteúdo é para o meu nível?",
              a: "A plataforma atende desde intermediários que querem desbloquear as primeiras manobras até avançados que querem dominar o MegaLoop. Há uma trilha para cada nível: você encontra o ponto certo para entrar e segue evoluindo."
            },
            {
              q: "Já assisti vários vídeos no YouTube e não evoluí. Por que seria diferente aqui?",
              a: "O YouTube mostra o resultado, mas a KiteAcademy decodifica o movimento. A diferença é a análise de erros reais, o mapa visual de onde as pessoas erram em cada manobra, e a progressão pedagógica que garante que você não pule nenhum degrau."
            },
            {
              q: "Posso cancelar a assinatura quando quiser?",
              a: "Sim. Sem fidelidade, sem multa, sem burocracia. Você cancela quando quiser pela própria plataforma. Seu acesso fica ativo até o final do período pago."
            },
            {
              q: "E se eu não gostar?",
              a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar, basta solicitar o reembolso e devolvemos 100% do valor. Sem perguntas, sem burocracia."
            }
          ].map((faq, i) => (
            <div 
              key={i} 
              className="glass p-5 md:p-6 cursor-pointer rounded-xl transition-all"
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h4 className="font-headline font-normal text-[18px] md:text-[20px] leading-[1.4] text-white">
                  {faq.q}
                </h4>
                <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 text-primary transition-transform duration-300 shrink-0 ${activeFaq === i ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence initial={false}>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#D0D0D0] text-[16px] md:text-[18px] font-normal leading-[1.65]">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-28 flex items-center justify-center overflow-hidden border-t border-white/5 bg-black">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="font-headline font-normal text-[28px] md:text-[35px] text-white tracking-tighter leading-[1.3] mb-6">
            A sua evolução <span className="bg-gradient-to-r from-[#FF6600] to-[#E50000] bg-clip-text text-transparent">começa aqui</span>
          </h2>
          <p className="font-body text-[#D0D0D0] text-[18px] md:text-[20px] leading-[1.4] max-w-2xl mx-auto mb-10">
            Não perca mais tempo tentando adivinhar manobras sozinho. Junte-se à maior plataforma de evolução guiada no kitesurf.
          </p>
          <a 
            href="#pricing"
            className="btn-premium-primary text-[16px] md:text-[18px] font-semibold tracking-wide uppercase flex items-center justify-center mx-auto w-fit py-2.5 px-7"
          >
            Acessar a KiteAcademy
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center gap-8 px-4 py-20 bg-surface-container-lowest">
        <img 
          src="https://i.ibb.co/gbLQm6jf/logo.png" 
          alt="KiteLoop Masterclass Logo" 
          className="h-32 md:h-64 w-auto"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <p className="font-body text-[14px] leading-[1.6] tracking-normal text-[#999999] opacity-60">© 2025 Kiteacademy | Heiner Hofmann. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
