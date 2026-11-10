import LavaBackground from "./lava-background";
import Typewriter from "./typewriter";

export default function Home() {
return <>
<a className="skip-link" href="#contenido">Saltar al contenido</a>
<header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E2DEC9]"><div className="h-20 max-w-[1200px] mx-auto px-gutter flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><a className="font-headline-sm text-headline-sm text-on-surface tracking-tight hover:opacity-80 transition-opacity" href="#inicio">Joshua Cirilo <span className="font-body-md text-body-md text-on-surface-variant font-normal">· Clases de Inglés</span></a></div><nav className="hidden lg:flex items-center gap-space-lg"><a className="transition-colors py-space-xs text-primary font-bold border-b-2 border-primary" href="#inicio">Inicio</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" href="#niveles">Grupos y horarios</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" href="#conoce-a-tu-maestro">Conoce a tu maestro</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" href="#contacto">Contacto</a></nav><div className="flex items-center gap-space-md"><a className="hidden sm:inline-flex items-center gap-space-xs bg-secondary-fixed text-primary-container font-label-md text-label-md px-space-md py-space-sm rounded-full shadow-[0_4px_0px_0px_#172033] hover:translate-y-[2px] hover:shadow-[0_2px_0px_0px_#172033] transition-all" href="https://wa.me/50239084339" rel="noopener noreferrer" target="_blank"><span aria-hidden="true" className="material-symbols-outlined text-[20px]">chat</span><span>WhatsApp: +502 3908 4339</span></a><img alt="Joshua Cirilo" className="w-8 h-8 rounded-full object-cover ring-1 ring-[#E2DEC9]" src="/joshua-cirilo.png"/></div></div></header><main id="contenido" className="w-full pt-20 bg-background flex-1"><div className="flex flex-col w-full">

<section id="inicio" className="lava-hero relative w-full bg-[#FAF9F5] overflow-hidden py-space-2xl md:py-space-2xl border-b border-[#E2DEC9]/60">
<LavaBackground />
<div className="max-w-[1200px] mx-auto px-gutter relative z-10">

<div className="inline-flex items-center gap-space-xs bg-[#EAF1F7] text-primary-container px-space-md py-1 rounded-full mb-space-md shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-sm text-label-sm tracking-wide uppercase">Clases Online Personalizadas · Ciclo 2026</span>
</div>

<h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary-container max-w-4xl tracking-tight leading-none mb-space-md">
        Aprende a <Typewriter /> en inglés a tu nivel.
      </h1>

<p className="font-body-lg text-body-lg text-[#475569] max-w-2xl mb-space-lg leading-relaxed">
        Empieza desde cero o practica cómo contar tus experiencias, hacer preguntas y expresar tus ideas con más confianza.
      </p>

<div className="inline-flex flex-wrap items-center gap-space-xs bg-[#FFE43B] text-[#172033] px-space-md py-space-sm rounded-xl mb-space-xl shadow-[0_3px_0px_0px_#172033]">
<span aria-hidden="true" className="material-symbols-outlined text-[22px]">schedule</span>
<span className="font-label-md text-label-md">
          <span className="font-bold">Lunes y miércoles</span> · 5, 6, 7 y 8 p. m., según tu nivel · Hora de Guatemala
        </span>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md mb-space-2xl">
<a className="inline-flex items-center gap-space-sm bg-[#FFE43B] text-[#172033] text-label-lg px-space-lg py-space-md rounded-full shadow-[0_5px_0px_0px_#172033] hover:translate-y-[2px] hover:shadow-[0_2px_0px_0px_#172033] transition-all" href="#niveles">Ver grupos y horarios<span aria-hidden="true" className="material-symbols-outlined text-[22px]">arrow_downward</span></a>
<div className="flex items-center gap-space-xs text-[#475569] font-body-sm text-body-sm">
<span aria-hidden="true" className="material-symbols-outlined text-secondary text-[20px]">verified</span>
<span>Grupos reducidos · Atención 100% personalizada</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-md border-t border-[#E2DEC9]">
<div className="bg-surface-container-lowest/80 backdrop-blur-sm p-space-md rounded-xl shadow-sm border border-[#E2DEC9]/40 flex items-start gap-space-sm">
<div className="p-2 bg-[#EAF1F7] text-primary-container rounded-lg">
<span aria-hidden="true" className="material-symbols-outlined text-[24px]">videocam</span>
</div>
<div>
<div className="font-label-sm text-label-sm text-[#475569] uppercase">Modalidad</div>
<div className="font-headline-sm text-headline-sm text-primary-container">En línea</div>
<p className="font-body-sm text-body-sm text-[#475569]">Vía Google Meet / Zoom en vivo</p>
</div>
</div>
<div className="bg-surface-container-lowest/80 backdrop-blur-sm p-space-md rounded-xl shadow-sm border border-[#E2DEC9]/40 flex items-start gap-space-sm">
<div className="p-2 bg-[#EAF1F7] text-primary-container rounded-lg">
<span aria-hidden="true" className="material-symbols-outlined text-[24px]">event_repeat</span>
</div>
<div>
<div className="font-label-sm text-label-sm text-[#475569] uppercase">Inicio de clases</div>
<div className="font-headline-sm text-headline-sm text-primary-container">Próximo ciclo</div>
<p className="font-body-sm text-body-sm text-[#475569]">Inscripciones abiertas cada mes</p>
</div>
</div>
<div className="bg-surface-container-lowest/80 backdrop-blur-sm p-space-md rounded-xl shadow-sm border border-[#E2DEC9]/40 flex items-start gap-space-sm">
<div className="p-2 bg-[#EAF1F7] text-primary-container rounded-lg">
<span aria-hidden="true" className="material-symbols-outlined text-[24px]">payments</span>
</div>
<div>
<div className="font-label-sm text-label-sm text-[#475569] uppercase">Inversión</div>
<div className="font-headline-sm text-headline-sm text-primary-container">Consulta por WhatsApp</div>
<p className="font-body-sm text-body-sm text-[#475569]">Cuotas mensuales sin contratos forzosos</p>
</div>
</div>
<div className="bg-surface-container-lowest/80 backdrop-blur-sm p-space-md rounded-xl shadow-sm border border-[#E2DEC9]/40 flex items-start gap-space-sm">
<div className="p-2 bg-[#EAF1F7] text-primary-container rounded-lg">
<span aria-hidden="true" className="material-symbols-outlined text-[24px]">forum</span>
</div>
<div>
<div className="font-label-sm text-label-sm text-[#475569] uppercase">Frecuencia</div>
<div className="font-headline-sm text-headline-sm text-primary-container">2 Días / sem</div>
<p className="font-body-sm text-body-sm text-[#475569]">60 minutos por sesión activa</p>
</div>
</div>
</div>
</div>
</section>

<section id="niveles" aria-labelledby="grupos-titulo" className="w-full bg-[#DCE9F5] py-space-2xl border-t border-[#C4D5E6]">
  <div className="max-w-[1200px] mx-auto px-gutter">
    <div className="text-center max-w-2xl mx-auto mb-space-xl">
      <h2 id="grupos-titulo" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#172033] mb-space-sm">Encuentra tu grupo</h2>
      <p className="text-body-md text-[#475569]">¿Qué te gustaría poder hacer en inglés? Elige el grupo que más se parezca a lo que buscas.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg mb-space-xl">
      {[
        { name: "Inglés básico", time: "5:00 a 6:00 p. m.", description: "Empieza desde cero. Aprende a presentarte, hacer preguntas y hablar de tu vida diaria." },
        { name: "Inglés intermedio", time: "6:00 a 7:00 p. m.", description: "Si ya puedes conversar un poco, practica cómo contar experiencias, explicar tus planes y expresar tus opiniones." },
        { name: "Práctica conversacional", time: "7:00 a 8:00 p. m.", description: "Si ya sostienes una conversación, practica cómo responder con naturalidad, mejorar tu pronunciación y hablar con más soltura." },
      ].map((group) => (
        <article key={group.name} className="bg-white rounded-2xl p-space-lg border border-[#C4D5E6] shadow-sm">
          <h3 className="text-headline-sm text-[#172033] mb-space-md">{group.name}</h3>
          <p className="inline-flex items-center gap-space-xs bg-[#FFE43B] text-[#172033] rounded-full px-space-md py-space-xs text-label-md mb-space-lg">
            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">schedule</span>
            {group.time}
          </p>
          <h4 className="text-label-sm uppercase tracking-wide text-[#475569] mb-space-xs">Qué vas a practicar</h4>
          <p className="text-body-md text-[#475569]">{group.description}</p>
        </article>
      ))}
    </div>
    <p className="text-center text-body-lg text-[#172033] mb-space-xl"><strong>Lunes y miércoles · Hora de Guatemala</strong></p>
    <div className="bg-[#FAF9F5] border border-[#E2DEC9] rounded-2xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-lg">
      <p className="text-body-md text-[#172033]"><strong>¿Tienes dudas sobre tu grupo?</strong><br />Escríbeme y coordinamos una clase de prueba.</p>
      <a className="shrink-0 inline-flex items-center gap-space-xs bg-[#FFE43B] text-[#172033] text-label-md px-space-lg py-space-sm rounded-full shadow-[0_3px_0px_0px_#172033] hover:translate-y-[1px] transition-transform" href="https://wa.me/50239084339?text=Hola%2C%20Joshua.%20Me%20interesan%20las%20clases%20de%20ingl%C3%A9s%20y%20quisiera%20coordinar%20una%20clase%20de%20prueba." target="_blank" rel="noopener noreferrer">Consultar por WhatsApp<span aria-hidden="true" className="material-symbols-outlined text-[20px]">arrow_forward</span></a>
    </div>
  </div>
</section>

<section id="conoce-a-tu-maestro" className="w-full bg-[#EAF1F7] py-space-2xl border-y border-[#E2DEC9]/60">
<div className="max-w-[1200px] mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-5 flex justify-center">
<div className="relative w-full max-w-md">

<div className="p-3 bg-[#FAF9F5] rounded-3xl shadow-[0_16px_36px_-6px_rgba(23,32,51,0.12)] border border-[#E2DEC9]">
<img alt="Joshua Cirilo maestro de inglés" className="w-full h-auto aspect-square object-cover rounded-2xl" src="/joshua-cirilo.png"/>
</div>

<div className="absolute -bottom-4 -left-4 bg-[#FFE43B] text-[#172033] border border-[#172033] font-label-md text-label-md px-space-md py-space-xs rounded-full shadow-[0_3px_0px_0px_#172033] flex items-center gap-space-xs">
<span aria-hidden="true" className="material-symbols-outlined text-[18px]">school</span>
<span>Mentor conversacional</span>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-space-md">
<span className="font-label-sm text-label-sm text-[#475569] uppercase tracking-wider bg-white/70 px-3 py-1 rounded-full">
            Tu Mentor
          </span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#172033] tracking-tight">
            Conoce a tu maestro
          </h2>
<p className="font-body-lg text-body-lg text-[#172033] leading-relaxed">
            <strong>¡Hola! Soy Joshua Cirilo, tu maestro de inglés.</strong> Estudio en línea la carrera de <em>Software Development</em> en Brigham Young University–Idaho (BYU–Idaho), una universidad de Estados Unidos. En 2024 acredité mi dominio del inglés mediante el examen <strong>TOEFL iBT</strong>.
          </p>
<p className="font-body-lg text-body-lg text-[#172033] leading-relaxed">
            Uso el inglés a diario en la universidad y en mi trabajo como desarrollador de software. Si estás empezando, practicaremos cómo presentarte, hacer preguntas y hablar de tu día. Si ya tienes una base, trabajaremos en cómo contar tus experiencias y expresar tus ideas con más confianza.
          </p>

<div className="p-space-lg bg-white rounded-2xl border-l-4 border-[#FFE43B] shadow-sm">
<div className="flex items-start gap-space-sm">
<span aria-hidden="true" className="material-symbols-outlined text-[#172033] text-[28px]">format_quote</span>
<div>
<p className="font-headline-sm text-headline-sm text-[#172033] font-semibold">
                  Un enfoque práctico y cercano: aprender inglés a través de lo que a ti te importa comunicar.
                </p>
<span className="font-body-sm text-body-sm text-[#475569] mt-1 block">Metodología contextual y enfocada en la vida real</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div className="flex items-center gap-space-xs text-[#172033]">
<span aria-hidden="true" className="material-symbols-outlined text-secondary text-[22px]">record_voice_over</span>
<span className="font-label-md text-label-md">80% conversación guiada</span>
</div>
<div className="flex items-center gap-space-xs text-[#172033]">
<span aria-hidden="true" className="material-symbols-outlined text-secondary text-[22px]">sentiment_satisfied</span>
<span className="font-label-md text-label-md">Ambiente libre de juicios</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="contacto" className="w-full bg-[#172033] text-[#FAF9F5] py-space-2xl">
<div className="max-w-[1200px] mx-auto px-gutter">
<div className="max-w-3xl mx-auto text-center space-y-space-md">
<span className="inline-flex items-center gap-space-xs bg-[#FAF9F5]/10 text-[#FAF9F5] px-space-md py-1 rounded-full font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-[#FFE43B]"></span> Empieza tu proceso hoy
        </span>
<h2 className="font-headline-xl text-headline-xl tracking-tight text-[#FAF9F5]">
          Contáctame
        </h2>
<p className="font-body-lg text-body-lg text-[#EAF1F7]/80 max-w-xl mx-auto leading-relaxed">
          «¿Quieres empezar o tienes dudas? Escríbeme y conversemos sobre qué nivel te conviene».
        </p>

<div className="pt-space-sm pb-space-xs">
<a className="inline-flex items-center gap-space-sm text-[#FFE43B] hover:underline font-headline-md text-headline-md tracking-wide" href="https://wa.me/50239084339">
<span aria-hidden="true" className="material-symbols-outlined text-[32px]">call</span>
<span>+502 3908 4339</span>
</a>
</div>

<div className="pt-space-xs flex justify-center">
<a className="inline-flex items-center gap-space-sm bg-[#FFE43B] text-[#172033] font-label-lg text-label-lg px-space-xl py-space-md rounded-full shadow-[0_4px_0px_0px_#FAF9F5] hover:translate-y-[2px] hover:shadow-[0_2px_0px_0px_#FAF9F5] transition-all" href="https://wa.me/50239084339?text=Hola,%20Joshua.%20Quiero%20informaci%C3%B3n%20sobre%20las%20clases%20de%20ingl%C3%A9s." rel="noopener noreferrer" target="_blank">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"></path>
</svg>
<span>Escríbeme por WhatsApp</span>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xl border-t border-[#FAF9F5]/20 text-[#FAF9F5]/70 font-body-sm text-body-sm">
<div className="flex items-center justify-center gap-space-xs">
<span aria-hidden="true" className="material-symbols-outlined text-[18px] text-[#FFE43B]">bolt</span>
<span>Respuesta en menos de 24 horas</span>
</div>
<div className="flex items-center justify-center gap-space-xs">
<span aria-hidden="true" className="material-symbols-outlined text-[18px] text-[#FFE43B]">laptop_chromebook</span>
<span>Clases 100% online y flexibles</span>
</div>
<div className="flex items-center justify-center gap-space-xs">
<span aria-hidden="true" className="material-symbols-outlined text-[18px] text-[#FFE43B]">psychology</span>
<span>Evaluación conversacional directa</span>
</div>
</div>
</div>
</div>
</section>
</div></main><footer className="w-full bg-[#FAF9F5] border-t border-[#E2DEC9] mt-auto"><div className="max-w-[1200px] mx-auto px-gutter py-space-2xl"><div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl"><div className="md:col-span-5 space-y-space-sm"><div className="font-headline-sm text-headline-sm text-on-surface">Joshua Cirilo</div><p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Clases personalizadas y mentoría conversacional para adultos, jóvenes profesionales y estudiantes en búsqueda de fluidez genuina en inglés.</p><div className="pt-space-xs"><span className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high/40 px-space-sm py-space-xs rounded-full"><span aria-hidden="true" className="material-symbols-outlined text-[16px]">location_on</span> Guatemala · Clases Online &amp; Presencial</span></div></div><div className="md:col-span-3 space-y-space-sm"><div className="font-label-lg text-label-lg text-on-surface">Navegación</div><ul className="space-y-space-xs"><li role="none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#inicio">Inicio</a></li><li role="none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#niveles">Niveles y Metodología</a></li><li role="none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#conoce-a-tu-maestro">Conoce a tu Maestro</a></li><li role="none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#contacto">Preguntas y Contacto</a></li></ul></div><div className="md:col-span-4 space-y-space-md"><div className="font-label-lg text-label-lg text-on-surface">Atención Directa</div><p className="font-body-sm text-body-sm text-on-surface-variant">¿Listo para comenzar o evaluar tu nivel actual? Escríbeme directamente por WhatsApp para coordinar tu primera sesión diagnóstica.</p><a className="inline-flex items-center gap-space-xs bg-secondary-fixed text-primary-container font-label-md text-label-md px-space-md py-space-sm rounded-full shadow-[0_4px_0px_0px_#172033] hover:translate-y-[2px] transition-all" href="https://wa.me/50239084339" rel="noopener noreferrer" target="_blank"><span aria-hidden="true" className="material-symbols-outlined text-[20px]">chat</span><span>WhatsApp: +502 3908 4339</span></a></div></div><div className="border-t border-[#E2DEC9] mt-space-2xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant"><p>© 2025 Joshua Cirilo · Clases de Inglés. Todos los derechos reservados.</p><p className="flex items-center gap-space-xs">Aprende inglés con calidez humana y enfoque conversacional</p></div></div></footer>
</>;
}
