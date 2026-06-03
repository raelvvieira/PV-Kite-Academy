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
  ChevronDown,
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

export default function App() {
  const [isManeuversExpanded, setIsManeuversExpanded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
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
        />
      </nav>


      {/* Cinematic Hero */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden diagonal-hero pt-40 md:pt-56 lg:pt-60 pb-16 md:pb-24">
        <div 
          className="absolute inset-0 bg-[url('https://i.ibb.co/ynkpcwvd/Fundo-Hero.jpg')] bg-cover bg-center opacity-65" 
          aria-label="Dramatic kitesurfer jumping high in ocean spray"
          style={{ contentVisibility: 'auto' }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
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
              <h1 className="font-headline font-black text-2xl sm:text-4xl md:text-[3.12rem] lg:text-[3.84rem] leading-[1.1] lg:leading-[1.0] tracking-tighter text-white uppercase">
                Aprenda Kitesurf na <span className="text-gradient font-black">primeira plataforma de ensino de Kite do Brasil!</span>
              </h1>
              
              {/* Subheadline */}
              <p className="font-body text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed font-normal">
                Para Kitesurfistas de Todos os Níveis que Querem Evoluir Rápido. Aprenda, execute, suba de nível com aulas guiadas, manuais detalhados e mapas de erros comuns, tudo em um lugar único, com a didática de quem já ensinou mais de +3.600 pessoas a velejar.
              </p>
              
              {/* CTA Principal */}
              <div className="flex flex-col items-center lg:items-start gap-4 w-full max-w-md mt-2">
                <a 
                  href="#pricing"
                  className="btn-premium-primary text-xs sm:text-base md:text-lg tracking-wide w-full uppercase flex items-center justify-center py-3 px-6"
                >
                  ASSINE AGORA POR R$67/MÊS
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
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Maneuvers List Section */}
      <section className="py-12 md:py-20 w-full overflow-hidden">
        {/* Contêiner de Cabeçalho Centralizado */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
          <h2 className="font-headline font-black text-2.5xl md:text-4xl text-white uppercase tracking-tighter leading-none mb-6">
            Tudo que você precisa para <span className="text-gradient font-black">subir de nível</span>
          </h2>
          <p className="font-body text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">Dois cursos completos, mapa mental e glossário premium, tudo acessível por R$ 67/mês. Uma progressão do básico ao MegaLoop, com análise visual de erros em cada etapa.</p>
        </div>

        {/* Double Infinite Carousel Section (Edge-to-Edge) */}
        <div className="w-full flex flex-col gap-6 md:gap-8 mb-10 md:mb-14 relative select-none">
          {/* Row 1 - Leftward Carousel */}
          <div className="relative w-full overflow-hidden flex py-2 border-y border-white/5 bg-black/20">
            {/* Smooth Edge Fading Gradients */}
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
            {/* Smooth Edge Fading Gradients */}
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
                  <h3 className="font-headline font-black text-sm md:text-xl text-white uppercase tracking-tight">
                    Veja as principais manobras que você vai aprender
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm mt-1 uppercase tracking-wider font-semibold">
                    Clique aqui para expandir o cronograma completo
                  </p>
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
                    { name: "01 · TRANSIÇÃO SIMPLES", result: "O fim das viradas brutas: mude de direção com elegância e sem perder o vento. A base de tudo." },
                    { name: "02 · TOESIDE", result: "Domine a base invertida: navegue com estilo e prepare o terreno para manobras de onda." },
                    { name: "03 · POP", result: "A explosão controlada: aprenda a usar a prancha como mola para saltos potentes." },
                    { name: "04 · BACKROLL", result: "O giro perfeito com controle total: a manobra que faz todo mundo na praia parar pra olhar." },
                    { name: "05 · FRONT ROLL", result: "O giro pra frente que exige técnica pura: domine a orientação espacial e surpreenda no velejo." },
                    { name: "06 · DARKSLIDE", result: "A manobra de assinatura: deslize na água com o estilo que define os kitesurfistas avançados." },
                    { name: "07 · KITELOOP NA AREIA", result: "Pratique o movimento do kite em terra firme antes de entrar na água. O segredo de quem aprende sem tombos desnecessários." },
                    { name: "08 · KITELOOP NO BODYDRAG", result: "Execute o loop sem a prancha para gravar o timing no corpo. A forma mais segura de decodificar o giro." },
                    { name: "09 · HELILOOP", result: "A variação que conecta o loop ao salto. Domine o giro combinado com altitude e prepare o terreno para o nível máximo." },
                    { name: "10 · MEGALOOP", result: "O loop em máxima potência, altitude e velocidade angular. A manobra que define os kitesurfistas de elite: agora ao seu alcance." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ x: 10 }}
                      className="bg-surface-container p-4 md:p-5 flex flex-col justify-center border-l-2 border-transparent hover:border-primary transition-all cursor-default rounded-r-md"
                    >
                      <h4 className="font-headline font-black text-sm md:text-[1.05rem] text-white uppercase tracking-tight mb-1">
                        {item.name}
                      </h4>
                      <p className="text-neutral-300 text-xs md:text-sm font-normal leading-relaxed">{item.result}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="#pricing"
              className="btn-premium-primary text-xs sm:text-base md:text-xl tracking-wide uppercase whitespace-nowrap"
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
            <h2 className="font-headline font-black text-2.5xl md:text-4xl text-background uppercase tracking-tighter leading-none mb-6">O que te trava</h2>
            <p className="font-body text-background/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">Muitos praticantes passam meses ou anos sem sair do mesmo lugar no velejo. Descubra os principais fatores que impedem a sua evolução.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {[
              {
                icon: <AlertCircle className="w-7 h-7 md:w-11 md:h-11 text-primary" />,
                title: "ESTAGNADO NO BATE E VOLTA",
                desc: "Já faz meses que seu velejo é sempre igual. Você tenta saltar, mas falta a técnica fina para transformar força em altura, e cada sessão termina igual à anterior."
              },
              {
                icon: <TrendingDown className="w-7 h-7 md:w-11 md:h-11 text-primary" />,
                title: "MEDO DE PERDER O CONTROLE",
                desc: "O vento sobe e você quer tentar uma manobra nova, mas trava. Sem entender a física do kite and o timing exato, qualquer tentativa parece um risco desnecessário."
              },
              {
                icon: <TimerOff className="w-7 h-7 md:w-11 md:h-11 text-primary" />,
                title: "FORÇA BRUTA NO LUGAR DE TÉCNICA",
                desc: "Você termina a sessão moído porque usa força para compensar a falta de timing. Manobra de verdade é leveza, posição e o milissegundo certo, não esforço."
              },
              {
                icon: <CheckCircle className="w-7 h-7 md:w-11 md:h-11 text-primary" />,
                title: "YOUTUBE NÃO É SUFICIENTE",
                desc: "Horas de vídeo e nada conecta na água. Vídeos genéricos mostram o resultado, mas não decodificam o movimento, não mostram os erros reais e não têm progressão pedagógica."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -3 }}
                className="p-5 md:p-6 border border-background/5 bg-background/5 hover:border-primary/50 transition-all rounded-lg"
              >
                <div className="mb-3 md:mb-4">{item.icon}</div>
                <h3 className="font-headline font-black text-base md:text-lg text-background mb-1.5 uppercase tracking-tight leading-tight">{item.title}</h3>
                <p className="text-background/80 text-xs md:text-sm leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 md:mt-14 text-center max-w-4xl mx-auto">
            <p className="font-body text-background/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">Todos os problemas têm solução técnica. A KiteAcademy foi construída para eliminar cada um deles, na progressão certa, com o método visual que o Heiner levou 14 anos para decifrar.</p>
            <p className="font-body text-primary font-bold text-sm md:text-lg uppercase tracking-wide max-w-2xl mx-auto">É isso que a KiteAcademy resolve.</p>
          </div>
        </div>
      </section>

      {/* Benefits (6 Pilares da Evolução) */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
          <h2 className="font-headline font-black text-2.5xl md:text-4xl text-white uppercase tracking-tighter leading-none mb-6">A CIÊNCIA DA EVOLUÇÃO &bull; OS 6 PILARES DA PLATAFORMA</h2>
          <p className="font-body text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">Uma metodologia estruturada de ensino para desenvolver senso crítico, orientar o timing e destravar cada fase do movimento de forma consistente e segura.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {[
            { num: "01", title: "Visão de Raio-X", desc: "Visualize cada fase da manobra antes de entrar na água. Mapas visuais que nenhum vídeo do YouTube oferece." },
            { num: "02", title: "DNA da Evolução", desc: "Cada manobra abre o caminho para a próxima. Entenda a relação entre elas e siga evoluindo de forma independente." },
            { num: "03", title: "Senso Crítico", desc: "Aprenda a diagnosticar o que acontece durante a sua manobra. Quem desenvolve senso crítico evolui de forma inevitável." },
            { num: "04", title: "Laboratório de Erros", desc: "Corrija falhas a partir de erros reais gravados em aula. Ver o erro do outro é o atalho mais eficiente para não repeti-lo." },
            { num: "05", title: "Timing Inteligente", desc: "Decodifique o momento exato de cada manobra em segundos. Timing não é talento: é técnica visual que pode ser aprendida." },
            { num: "06", title: "Progressão Segura", desc: "Construa confiança técnica antes de aumentar a potência. Cada degrau é uma razão a menos para cair no próximo." }
          ].map((benefit, i) => (
            <div key={i} className="glass p-4 sm:p-5 hover:bg-white/5 transition-colors rounded-xl group">
              <div className="text-primary font-headline font-black text-xl md:text-2xl mb-2 group-hover:scale-105 transition-transform origin-left">{benefit.num}</div>
              <h4 className="font-headline font-bold text-sm md:text-base text-white uppercase mb-1 tracking-tight">{benefit.title}</h4>
              <p className="text-[11px] md:text-xs text-neutral-400 font-normal leading-normal">{benefit.desc}</p>
            </div>
          ))}
        </div>
          <div className="mt-10 md:mt-14 text-center">
            <a 
              href="#pricing"
              className="btn-premium-primary text-xs sm:text-base md:text-xl tracking-wide uppercase whitespace-nowrap"
            >
              Quero acessar a plataforma
            </a>
          </div>
      </section>

      {/* Method Section (Image Background) */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/XfhfwXGr/foto-de-fundo.jpg" 
            alt="Kitesurf Action" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-headline font-black text-2.5xl md:text-4xl text-white uppercase tracking-tighter leading-none mb-6">
              A PLATAFORMA QUE <span className="text-gradient">ENCURTA ANOS</span> EM SEMANAS
            </h2>
            <p className="font-body text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
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
                  <span className="font-body font-semibold text-sm md:text-base text-white/95 leading-none">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Heiner Card */}
          <div className="max-w-4xl mx-auto relative group mt-10">
            <div className="absolute -inset-2 md:-inset-4 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all rounded-3xl"></div>
            <div className="relative glass p-6 md:p-8 rounded-2xl border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              
              {/* Image side */}
              <div className="relative overflow-hidden rounded-xl border border-white/5 shadow-2xl max-w-sm mx-auto w-full">
                <img 
                  src="https://i.ibb.co/3ydxSSp6/foto-do-heiner.png" 
                  alt="Heiner Hofmann" 
                  className="w-full h-auto object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 left-3 z-10 bg-black/75 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <p className="font-body font-bold text-xs text-white uppercase tracking-tight">HEINER HOFMANN</p>
                  <p className="text-primary text-[10px] font-medium uppercase">Fundador da KiteAcademy</p>
                </div>
              </div>

              {/* Bio and CTA side */}
              <div className="flex flex-col justify-center text-center md:text-left">
                <div className="space-y-4 text-neutral-300 font-body text-xs md:text-sm leading-relaxed font-normal">
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
                    className="btn-premium-primary text-xs sm:text-sm md:text-base tracking-wide uppercase whitespace-nowrap py-2.5 px-6"
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
            <h2 className="font-headline font-black text-2.5xl md:text-4xl text-background uppercase tracking-tighter leading-none mb-6">Resultados reais de alunos reais</h2>
            <p className="font-body text-background/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">Veja o feedback de quem já destravou suas manobras e encurtou anos de tentativas frustradas com a didática do Heiner.</p>
          </div>

          {/* Video Testimonials */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full rounded-2xl shadow-xl border border-background/5"
                src="https://www.youtube.com/embed/Mkh7eml60LA?si=9K0bdVFM1amaxRCu" 
                title="YouTube video player" 
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
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full rounded-2xl shadow-xl border border-background/5"
                src="https://www.youtube.com/embed/I6eUi072XCQ?si=t7T1ZlLTfFpJbLx2" 
                title="YouTube video player" 
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
              className="btn-premium-primary text-[10px] sm:text-base md:text-xl tracking-wide uppercase whitespace-nowrap"
            >
              Entrar na plataforma com garantia de 7 dias
            </a>
          </div>
        </div>
      </section>

      {/* Pricing and Bonus Section */}
      <section id="pricing" className="pt-12 md:pt-20 pb-8 md:pb-12 bg-surface relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Bonus Section (BEFORE Pricing) */}
        <div className="max-w-4xl mx-auto px-4 relative z-10 mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
            <h2 className="font-headline font-black text-2.5xl md:text-4xl text-white uppercase tracking-tighter leading-none mb-4">
              BÔNUS EXCLUSIVOS DA ASSINATURA
            </h2>
            <p className="font-body text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Aproveite conteúdos complementares projetados para acelerar os seus resultados sem pagar nenhum centavo a mais.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Bonus Card 1 - Horizontal & Minimalist */}
            <motion.div 
               whileHover={{ y: -2 }}
              className="glass p-5 md:p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-6 md:gap-8 group relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs md:text-sm px-4 py-2 rounded-bl-xl font-bold uppercase border-b border-l border-white/10 font-headline">
                Valor: R$ 47 | Grátis
              </div>
              
              <div className="flex-shrink-0 w-28 md:w-36 flex justify-center">
                <img 
                  src="https://i.ibb.co/j9LLGVKm/mapa-mental.png" 
                  alt="Mapa Mental" 
                  className="w-full h-auto object-contain max-h-36 group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                />
              </div>

              <div className="flex-grow text-center md:text-left">
                <h3 className="font-headline font-black text-xl md:text-2xl text-white uppercase mb-1 tracking-tight leading-tight">
                  Mapa Mental Técnico
                </h3>
                <p className="text-primary text-xs md:text-sm uppercase font-bold mb-2 tracking-widest leading-none">
                  Sua bússola visual para todas as manobras
                </p>
                <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed mb-4 max-w-xl">
                  A síntese visual completa das manobras fundamentais e do KiteLoop para revisar em segundos antes de cada sessão.
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs md:text-sm text-primary/95 font-bold uppercase tracking-widest justify-center md:justify-start">
                  <span>Backroll</span>
                  <span className="text-white/20">•</span>
                  <span>Front Roll</span>
                  <span className="text-white/20">•</span>
                  <span>Darkslide</span>
                  <span className="text-white/20">•</span>
                  <span>KiteLoop</span>
                  <span className="text-white/20">•</span>
                  <span>Heliloop</span>
                  <span className="text-white/20">•</span>
                  <span>MegaLoop</span>
                </div>
              </div>
            </motion.div>

            {/* Bonus Card 2 - Horizontal & Minimalist */}
            <motion.div 
               whileHover={{ y: -2 }}
              className="glass p-5 md:p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-6 md:gap-8 group relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs md:text-sm px-4 py-2 rounded-bl-xl font-bold uppercase border-b border-l border-white/10 font-headline">
                Valor: R$ 50 | Grátis
              </div>
              
              <div className="flex-shrink-0 w-28 md:w-36 flex justify-center">
                <img 
                  src="https://i.ibb.co/0yc2qQ4r/gloss-rio.png" 
                  alt="Glossário" 
                  className="w-full h-auto object-contain max-h-36 group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                />
              </div>

              <div className="flex-grow text-center md:text-left">
                <h3 className="font-headline font-black text-xl md:text-2xl text-white uppercase mb-1 tracking-tight leading-tight">
                  Glossário Premium
                </h3>
                <p className="text-primary text-xs md:text-sm uppercase font-bold mb-2 tracking-widest leading-none">
                  O vocabulário da performance
                </p>
                <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed mb-4 max-w-xl">
                  Domine cada termo e variação técnica que define o velejo de alto nível. Entenda exatamente o que os prós estão falando.
                </p>
                <div className="bg-white/5 py-1.5 px-4 rounded text-xs md:text-sm text-white/60 uppercase font-bold tracking-widest w-fit mx-auto md:mx-0 border border-white/10">
                  Incluído no pacote especial
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pricing Card Section */}
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <div className="glass relative p-5 md:p-8 overflow-hidden shadow-[0_0_50px_rgba(247,89,0,0.1)] border-primary/20 rounded-2xl">
            <div className="absolute top-0 right-0 bg-kinetic px-4 md:px-6 py-1 font-headline font-black text-[8px] md:text-[10px] text-on-primary uppercase tracking-widest">LANÇAMENTO</div>
            
            <div className="grid grid-cols-1 gap-6 items-center">
              <div className="flex flex-col items-center w-full">
                <div className="max-w-md mx-auto text-center mb-6 px-2">
                  <p className="text-primary font-headline text-xs md:text-sm uppercase tracking-[0.15em] font-bold mb-2">Assinatura Mensal &bull; Sem Fidelidade</p>
                  <h2 className="font-headline font-black text-3xl md:text-4xl text-white uppercase tracking-tighter leading-none mb-3">ACESSO IMEDIATO À KITEACADEMY</h2>
                  <p className="font-body text-white/90 text-sm md:text-base leading-relaxed">Garanta sua assinatura mensal hoje mesmo e tenha acesso instantâneo a todos os recursos da plataforma.</p>
                </div>

                {/* Lista Completa - Simplificada sem subtextos */}
                <div className="w-full max-w-lg mx-auto mb-6 text-left px-2">
                  <h3 className="font-headline font-black text-sm text-primary uppercase mb-3 tracking-widest text-center md:text-left">
                    O que está incluso:
                  </h3>
                  <div className="space-y-3 font-body divide-y divide-white/5">
                    <div className="flex justify-between items-center py-2 text-sm md:text-base">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-semibold">Curso Freestyle Base</span>
                      </div>
                      <span className="font-mono text-white/50 line-through">R$ 297,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-sm md:text-base">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-semibold">KiteLoop Masterclass</span>
                      </div>
                      <span className="font-mono text-white/50 line-through">R$ 397,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-sm md:text-base">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-semibold">Mapa Mental Técnico</span>
                      </div>
                      <span className="font-mono text-white/50 line-through">R$ 47,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-sm md:text-base">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-semibold">Glossário Premium</span>
                      </div>
                      <span className="font-mono text-white/50 line-through">R$ 50,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-sm md:text-base">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-semibold">Novos Conteúdos mensais</span>
                      </div>
                      <span className="text-primary font-bold uppercase tracking-widest text-xs bg-primary/10 px-2.5 py-0.5 rounded">INCLUSO</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 pb-2 text-sm md:text-base">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-white font-semibold">Garantia Incondicional</span>
                      </div>
                      <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs bg-emerald-500/10 px-2.5 py-0.5 rounded">SEM RISCO</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                     <span className="text-white/60 font-medium text-sm">Soma dos Valores Avulsos:</span>
                    <span className="font-headline font-black text-white/50 line-through text-sm md:text-base">R$ 791,00</span>
                  </div>
                </div>

                {/* Offer Section */}
                <div className="flex flex-col items-center mb-5 text-center">
                  <p className="text-neutral-300 text-sm md:text-base font-medium mb-2">
                    Mas você não pagará esse valor total. Assine hoje por apenas:
                  </p>
                  
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-headline font-black text-3xl md:text-5xl text-white tracking-tighter leading-none drop-shadow-md">R$ 67,00</span>
                    <span className="text-primary text-xs md:text-base font-black tracking-wider">/ MÊS</span>
                  </div>

                  <div className="flex items-center justify-center bg-white/5 py-2 px-5 rounded-full border border-white/10 mt-3.5">
                    <span className="text-white font-semibold text-xs md:text-sm uppercase tracking-tight">
                      Cancele quando quiser • Sem fidelidade
                    </span>
                  </div>

                  <p className="text-kinetic text-xs md:text-sm uppercase font-black mt-4 animate-pulse tracking-widest">
                    Preço especial de lançamento: novos conteúdos todo mês
                  </p>
                </div>

                <div className="w-full flex flex-col items-center px-2">
                  <a 
                    href="https://pay.kiwify.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-lg btn-premium-primary text-xs sm:text-base md:text-lg tracking-wide animate-glow uppercase py-4 md:py-4.5 whitespace-nowrap flex items-center justify-center px-6"
                  >
                    ASSINAR AGORA | JUNTE-SE A 3.600 ALUNOS
                  </a>
                </div>

                <p className="mt-6 text-center text-[10px] md:text-xs text-on-surface-variant font-bold uppercase tracking-widest">Pagamento 100% Seguro via Kiwify</p>

                <div className="w-[calc(100%+40px)] -mx-5 md:w-[calc(100%+64px)] md:-mx-8 mt-4 overflow-hidden">
                  <img 
                    src="https://i.ibb.co/BHvDQ1rG/Design-sem-nome.png" 
                    alt="Design sem nome" 
                    className="w-full h-auto object-contain block"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section (Directly on Page with Seal) */}
          <div className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 text-center sm:text-left relative z-10">
            <img 
              src="https://i.ibb.co/Jws3zPL0/Garantia.png" 
              alt="Garantia" 
              className="w-16 sm:w-18 h-auto shrink-0 filter drop-shadow-[0_0_15px_rgba(255,102,0,0.15)]" 
              referrerPolicy="no-referrer" 
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="font-headline font-black text-lg sm:text-xl text-white uppercase tracking-tight mb-0.5">GARANTIA DE 7 DIAS</p>
              <p className="text-neutral-300 text-sm sm:text-base font-normal">Sua satisfação garantida ou 100% do seu dinheiro de volta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Glass Accordion) */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10 px-4">
          <h2 className="font-headline font-black text-2.5xl md:text-4xl text-white uppercase tracking-tighter leading-none mb-6">PERGUNTAS FREQUENTES</h2>
          <p className="font-body text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">Tem alguma dúvida sobre o funcionamento da plataforma ou do método? Confira as respostas abaixo.</p>
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
                <h4 className="font-headline font-bold text-sm md:text-lg text-white">
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
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-28 flex items-center justify-center overflow-hidden border-t border-white/5">
        {/* Background Image of the Section */}
        <div 
          className="absolute inset-0 bg-[url('https://i.ibb.co/XfhfwXGr/foto-de-fundo.jpg')] bg-cover bg-center"
          aria-hidden="true"
        ></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="font-headline font-black text-[1.7rem] md:text-[2.7rem] text-white uppercase tracking-tighter leading-none mb-6">
            A Sua Evolução <span className="text-gradient">Começa Aqui</span>
          </h2>
          <p className="font-body text-white/80 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Não perca mais tempo tentando adivinhar manobras sozinho. Junte-se à maior plataforma de evolução guiada no kitesurf.
          </p>
          <a 
            href="#pricing"
            className="btn-premium-primary text-[9px] sm:text-[14.5px] md:text-base tracking-wide uppercase flex items-center justify-center mx-auto w-fit py-2.5 px-7"
          >
            Assinar a KiteAcademy. Garantia de 7 dias, sem risco
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
        <p className="font-body text-xs tracking-normal text-[#adaaaa] opacity-60">© 2025 KITEACADEMY | HEINER HOFMANN. TODOS OS DIREITOS RESERVADOS.</p>
      </footer>
    </div>
  );
}
