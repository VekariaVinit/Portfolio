import { ArrowDown, ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const experience = [
  { dates: "May 2025 — Present", role: "Software Developer", company: "Next Dimension", detail: "Mastronardi Produce client assignment", summary: "Building warehouse software across web, mobile, and cloud services: React and TypeScript interfaces, React Native floor workflows, C#/.NET Azure Functions, and delivery through Azure DevOps." },
  { dates: "2026 — Present", role: "Founder", company: "HomHunt", detail: "Rental discovery and roommate matching", summary: "Leading product direction, design, and development for a Canadian rental platform that brings place search and lifestyle fit into one experience." },
  { dates: "2026 — Present", role: "Co-founder", company: "ASAP Booth Canada", detail: "With Parth Parakhiya", summary: "Building the Canadian event experience business and its digital presence, from service presentation to the path from discovery to inquiry." },
];

const skills = [
  { label: "Frontend & mobile", items: "React · Next.js · TypeScript · React Native · Tailwind CSS" },
  { label: "Backend & data", items: "C# · .NET · Azure Functions · REST APIs · SQL · Python" },
  { label: "Cloud & delivery", items: "Microsoft Azure · Azure DevOps · CI/CD · Git · Docker" },
  { label: "AI & automation", items: "OpenAI APIs · LangChain · FastAPI · n8n · PyTest" },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="shell nav-row">
      <a className="wordmark" href="#top" aria-label="Vinit Vekaria, back to top"><span className="wordmark-mark">V.</span><span>Vinit Vekaria</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a></nav>
    </div></header>

    <main id="main">
      <section className="hero shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Software developer & founder · Ontario, Canada</p>
          <h1 id="hero-title">I build software that makes <em>complex things feel simple.</em></h1>
          <p className="hero-description">I&apos;m Vinit. I build web, mobile, and cloud products with React, .NET, Azure, and practical AI automation. I&apos;m also building HomHunt and ASAP Booth Canada.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowRight size={17} /></a><a className="button button-secondary" href="/VinitVekaria.pdf" download="Vinit_Vekaria_Resume.pdf">Download résumé <Download size={17} /></a></div>
          <div className="hero-note"><span className="hero-note-line" /> From enterprise workflows to products built from the ground up.</div>
        </div>
        <div className="hero-visual" aria-label="Visual preview of Vinit's product work">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="visual-label visual-label-top"><span className="label-icon lavender">01</span><span>Product thinking<br /><strong>HomHunt</strong></span></div>
          <div className="hero-phone"><div className="phone-notch" /><img src="/work/homhunt-discover.png" alt="Illustrative HomHunt app discovery screen" /></div>
          <div className="visual-label visual-label-bottom"><span className="label-icon peach">02</span><span>Built to ship<br /><strong>Web · mobile · cloud</strong></span></div>
          <div className="visual-spark spark-a">✦</div><div className="visual-spark spark-b">✳</div>
        </div>
        <a className="scroll-cue" href="#work">Scroll to explore <ArrowDown size={15} /></a>
      </section>

      <section className="work-section" id="work"><div className="shell">
        <SectionHeading eyebrow="Selected work" title="Products and systems, built with purpose." intro="A mix of ventures I lead, software I build professionally, and technical projects I can share publicly." />
        <div className="feature-grid">
          <article className="work-card work-card-featured homhunt-card"><div className="card-art homhunt-art">
            <div className="art-topline"><span className="mini-brand"><img src="/work/homhunt-icon.jpg" alt="" /> HomHunt</span><span className="art-caption">Rental discovery</span></div>
            <div className="app-screen screen-back"><img src="/work/homhunt-profile.png" alt="Illustrative HomHunt lifestyle profile screen" loading="lazy" /></div>
            <div className="app-screen screen-front"><img src="/work/homhunt-discover.png" alt="Illustrative HomHunt rental discovery screen" loading="lazy" /></div>
          </div><div className="work-card-copy"><p className="card-kicker">Founder · Product & engineering</p><h3>HomHunt</h3><p>A Canadian platform for finding rooms, rentals, and compatible roommates. I lead the product and build experiences around location and budget search, lifestyle profiles, and in-app messaging.</p><div className="tag-row"><span>Mobile product</span><span>Web</span><span>Matching</span></div><div className="card-links"><a href="https://www.homhunt.com/" {...external}>Visit HomHunt <ArrowUpRight size={16} /></a><a href="https://apps.apple.com/us/app/homhunt/id6790176224" {...external}>App Store <ArrowUpRight size={16} /></a><a href="https://play.google.com/store/apps/details?id=com.homhunt.app" {...external}>Google Play <ArrowUpRight size={16} /></a></div></div></article>

          <article className="work-card work-card-featured asap-card"><div className="card-art asap-art"><div className="asap-halo" /><img className="asap-logo" src="/work/asap-shutter.png" alt="ASAP Booths gold aperture logo" loading="lazy" /><p>Make every<br /><em>moment iconic.</em></p><span className="asap-region">CANADA</span></div><div className="work-card-copy"><p className="card-kicker">Co-founder · Canada</p><h3>ASAP Booth Canada</h3><p>With Parth Parakhiya, I&apos;m building the Canadian side of ASAP Booths. The digital experience presents photo booths, guestbooks, and 360 experiences, with a direct path to event inquiries.</p><div className="tag-row"><span>Business</span><span>Web experience</span><span>Event tech</span></div><div className="card-links"><a href="https://www.asapbooths.com/canada" {...external}>Explore Canada site <ArrowUpRight size={16} /></a></div></div></article>

          <article className="work-card system-card"><div className="card-art system-art" aria-hidden="true"><div className="system-window"><div className="window-bar"><span /><span /><span /><b>OPERATIONS / OVERVIEW</b></div><div className="window-body"><div className="system-side"><i /><i /><i /><i /></div><div className="system-main"><div className="system-line wide" /><div className="system-line short" /><div className="system-metrics"><div><small>INVENTORY</small><strong>Live</strong></div><div><small>WORKFLOWS</small><strong>Connected</strong></div></div><div className="system-chart"><span /><span /><span /><span /><span /><span /><span /></div></div></div></div><span className="system-art-label">Illustrative interface</span></div><div className="work-card-copy"><p className="card-kicker">Software Developer · Next Dimension</p><h3>Warehouse operations software</h3><p>On assignment with Mastronardi Produce, I work across operational dashboards, mobile workflows, and Azure hosted APIs for warehouse teams.</p><div className="tag-row"><span>React</span><span>React Native</span><span>C# / .NET</span><span>Azure</span></div></div></article>

          <article className="work-card ai-card"><div className="card-art ai-art" aria-hidden="true"><div className="ai-grid" /><div className="ai-node node-left">Data</div><div className="ai-node node-center">Llama 3</div><div className="ai-node node-right">Insights</div><div className="ai-connector ai-connector-left" /><div className="ai-connector ai-connector-right" /><span className="ai-art-label">Explore · Analyze · Explain</span></div><div className="work-card-copy"><p className="card-kicker">Public technical project</p><h3>Cyber attack analysis dashboard</h3><p>An exploratory Python and Llama 3 project for examining cyber attack data through a dashboard and natural language analysis.</p><div className="tag-row"><span>Python</span><span>Llama 3</span><span>Data analysis</span></div><div className="card-links"><a href="https://github.com/VekariaVinit/Cyber-Attack-Analysis-Dashboard-with-Llama3-integration" {...external}>View repository <ArrowUpRight size={16} /></a></div></div></article>
        </div>
      </div></section>

      <section className="experience-section shell" id="experience"><div className="experience-intro"><SectionHeading eyebrow="Experience" title="Building at work. Building beyond it." intro="I care about the full path from a real problem to a useful product: shaping the interface, connecting the systems, and getting it into people's hands." /><a className="text-link" href="/VinitVekaria.pdf" download="Vinit_Vekaria_Resume.pdf">Get the full résumé <ArrowUpRight size={17} /></a></div><div className="timeline">{experience.map(item => <article className="timeline-item" key={item.company}><div className="timeline-dot" /><p className="timeline-date">{item.dates}</p><h3>{item.role} <span>· {item.company}</span></h3><p className="timeline-detail">{item.detail}</p><p className="timeline-summary">{item.summary}</p></article>)}</div></section>

      <section className="skills-section" id="skills"><div className="shell skills-layout"><div><SectionHeading eyebrow="Toolbox" title="The tools follow the problem." intro="I work across interfaces, services, cloud delivery, and applied AI. These are technologies I use in professional work and projects." /></div><div className="skills-list">{skills.map((group, i) => <div className="skill-row" key={group.label}><span className="skill-number">0{i + 1}</span><div><h3>{group.label}</h3><p>{group.items}</p></div></div>)}</div></div></section>

      <section className="contact-section shell" id="contact"><div className="contact-panel"><div><p className="eyebrow">Get in touch</p><h2>Have something<br /><em>worth building?</em></h2><p>I&apos;m based in the Greater Toronto Area and open to software engineering opportunities and thoughtful collaborations.</p></div><div className="contact-actions"><a className="button button-light" href="mailto:vinitvekaria810@gmail.com">Email me <Mail size={18} /></a><div className="social-links"><a href="https://www.linkedin.com/in/vinit-vekariaengineer/" {...external}>LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/VekariaVinit" {...external}>GitHub <ArrowUpRight size={14} /></a></div><span className="contact-location"><MapPin size={15} /> Greater Toronto Area, Canada</span></div></div></section>
    </main>
    <footer className="site-footer"><div className="shell"><span>© {new Date().getFullYear()} Vinit Vekaria</span><span>Designed and built with care.</span><a href="#top">Back to top ↑</a></div></footer>
  </>;
}
