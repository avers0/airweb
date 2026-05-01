
"use client";

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [navOn, setNavOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  const toggleNav = () => setMenuOpen(!menuOpen);
  const closeNav = () => setMenuOpen(false);
  
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
    }, 800);
  };

  useEffect(() => {
    // Extract script.js logic and adapt for React

    // active nav & scroll
    const bar = document.getElementById('scroll-bar');
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = document.querySelectorAll('.nav__links a');
    
    const handleScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (bar) bar.style.transform = 'scaleX(' + Math.min(pct, 1) + ')';
      
      setNavOn(window.scrollY > 40);

      const mid = window.scrollY + window.innerHeight / 3;
      const current = sections.reduce((found, s) => {
        return (s as HTMLElement).offsetTop <= mid ? s : found;
      }, sections[0]);
      
      navLinks.forEach(a => {
        a.classList.toggle('nav-active', !!(current && a.getAttribute('href') === '#' + current.id));
      });
      
      // Float CTA — show only after scrolling past the hero
      const fc = document.querySelector('.float-cta');
      const hero = document.querySelector('.hero') as HTMLElement;
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      if (fc) fc.classList.toggle('show', window.scrollY > heroBottom - 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();

    // Scroll reveal
    const srAllSelector = '.sr, .sr-left, .sr-right, .sr-scale';
    const srGroups = [
      { sel: '.about .section-label',    cls: 'sr'       },
      { sel: '.about__title',            cls: 'sr'       },
      { sel: '.about__prose',            cls: 'sr-left'  },
      { sel: '.about__sidebar',          cls: 'sr-right' },
      { sel: '.values .section-label',   cls: 'sr'       },
      { sel: '.values__title',           cls: 'sr'       },
      { sel: '.value-row',               cls: 'sr',       stagger: 70  },
      { sel: '.diff .section-label',     cls: 'sr'       },
      { sel: '.diff__top h2',            cls: 'sr'       },
      { sel: '.diff__card',              cls: 'sr-scale', stagger: 100 },
      { sel: '.methodology .section-label', cls: 'sr'    },
      { sel: '.methodology__title',      cls: 'sr'       },
      { sel: '.methodology__domain',     cls: 'sr',       stagger: 60  },
      { sel: '.methodology__footnote',   cls: 'sr'       },
      { sel: '.phases__top h2',          cls: 'sr-left'  },
      { sel: '.phases__top p',           cls: 'sr-right' },
      { sel: '.phase-card',              cls: 'sr',       stagger: 80  },
      { sel: '.offerings .section-label', cls: 'sr'      },
      { sel: '.offerings__title',        cls: 'sr'       },
      { sel: '.offering-block',          cls: 'sr',       stagger: 100 },
      { sel: '.team .section-label',     cls: 'sr'       },
      { sel: '.team__head h2',           cls: 'sr'       },
      { sel: '.founder-card',            cls: 'sr-scale' },
      { sel: '.team__intro-text',        cls: 'sr'       },
      { sel: '.team__person',            cls: 'sr-scale', stagger: 80  },
      { sel: '.career .section-label',   cls: 'sr'       },
      { sel: '.career__layout h2',       cls: 'sr'       },
      { sel: '.career__intro',           cls: 'sr'       },
      { sel: '.career__belong li',       cls: 'sr',       stagger: 50  },
      { sel: '.career__right',           cls: 'sr-right' },
      { sel: '.contact .section-label',  cls: 'sr'       },
      { sel: '.contact__headline',       cls: 'sr'       },
      { sel: '.contact__left',           cls: 'sr-left'  },
      { sel: '.contact__right',          cls: 'sr-right' },
      { sel: '.footer__brand-row',       cls: 'sr'       },
      { sel: '.footer__tagline',         cls: 'sr'       },
      { sel: '.footer__col',             cls: 'sr',       stagger: 70  },
    ];

    srGroups.forEach(g => {
      document.querySelectorAll(g.sel).forEach((el, i) => {
        if (el.className.match(/\bsr\b|\bsr-left\b|\bsr-right\b|\bsr-scale\b/)) return;
        el.classList.add(g.cls);
        if (g.stagger) (el as HTMLElement).style.transitionDelay = (i * g.stagger) + 'ms';
      });
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll(srAllSelector).forEach(el => {
      io.observe(el);
    });

    // Form field stagger
    const form = document.querySelector('form');
    if (form) {
      const fields = form.querySelectorAll('.field');
      fields.forEach((f: any, i) => {
        f.style.opacity = '0';
        f.style.transform = 'translateY(14px)';
        f.style.transition = 'opacity .55s cubic-bezier(.16,1,.3,1), transform .55s cubic-bezier(.16,1,.3,1)';
        f.style.transitionDelay = (50 + i * 65) + 'ms';
      });
      const fIo = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.field').forEach((f: any) => {
              f.style.opacity = '1';
              f.style.transform = 'none';
            });
            fIo.unobserve(e.target);
          }
        });
      }, { threshold: 0.08 });
      fIo.observe(form);
    }

    // Hero Word Rise
    const h1 = document.querySelector('.hero__headline');
    if (h1 && !h1.classList.contains('wrapped')) {
      h1.classList.add('wrapped');
      h1.innerHTML = h1.innerHTML.replace(/(<[^>]+>)|([^\s<]+)/g, (m, tag, word) => {
        if (tag) return tag;
        return '<span class="word">' + word + '</span> ';
      });
      h1.querySelectorAll('.word').forEach((w: any, i) => {
        w.style.animationDelay = (0.22 + i * 0.09) + 's';
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div
        className="cursor-glow"
        style={{ left: cursorPos.x + 'px', top: cursorPos.y + 'px', opacity: cursorPos.x > -1000 ? 1 : 0 }}
        aria-hidden="true"
      ></div>
      <div id="scroll-bar"></div>
      
<nav className={`nav ${navOn ? 'on' : ''} ${menuOpen ? 'mobile-open' : ''}`} id="nav">
  <div className="wrap">
    <div className="nav__row">
      <a href="#home" className="nav__brand" aria-label="AiR home" onClick={closeNav}>
        <img src="logo-vertical.svg" alt="AiR" className="nav__logo nav__logo--vertical" />
        <span className="nav__name"><span>Audit</span><span>It</span><span>Right</span></span>
      </a>
      <ul className="nav__links">
        <li><a href="#about" onClick={closeNav}>About Us</a></li>
        <li><a href="#values" onClick={closeNav}>Values</a></li>
        <li><a href="#methodology" onClick={closeNav}>Methodology</a></li>
        <li><a href="#services" onClick={closeNav}>Services</a></li>
        <li><a href="#team" onClick={closeNav}>Team</a></li>
        <li><a href="#career" onClick={closeNav}>Career</a></li>
        <li><a href="#contact" onClick={closeNav}>Contact</a></li>
      </ul>
<a href="#contact" className="nav__cta" onClick={closeNav}>Start a conversation</a>
      <button className={`nav__burger ${menuOpen ? 'open' : ''}`} onClick={toggleNav} aria-expanded={menuOpen} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<main id="main" role="main">

{/*  ════════════ HERO ════════════  */}
<section className="hero" id="home">
  {/* Force HMR */}
  <div className="hero-bg-wrap">
    <div className="hero-bg"></div>
    <div className="hero-overlay"></div>
  </div>
  <div className="hero__top-line"></div>
  <div className="hero__fx" aria-hidden={true}></div>
  {/*  Background watermark logos  */}
  <div className="hero__watermark hero__watermark--1" aria-hidden={true}>
    <img src="logo.svg" alt="" />
  </div>
  <div className="hero__watermark hero__watermark--2" aria-hidden={true}>
    <img src="logo.svg" alt="" />
  </div>
  <div className="hero__watermark hero__watermark--3" aria-hidden={true}>
    <img src="logo.svg" alt="" />
  </div>
  <div className="hero__aside" aria-hidden={true}>
    <div className="hero__year">AiR</div>
  </div>
  <div className="hero__body">
    <div className="wrap">
      <div className="hero__label">Internal Audit · Risk Advisory · Good Governance</div>
      <h1 className="hero__headline">
        <em>Protecting <span className="hero__amp">&amp;</span> Enhancing</em><br/><strong>Shareholder value.</strong>
      </h1>
      <hr className="hero__rule" />
      <p className="hero__desc">
        Every organisation needs an independent check on its strategy, operations, and financial health. That is exactly what we do — nothing more, nothing less.
      </p>
      <div className="hero__actions">
        <a href="#contact" className="btn-hero-primary">
          Start a conversation
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
        <a href="#about" className="btn-hero-ghost">
          Learn more about AiR
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v10M4 9l4 4 4-4"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

{/*  ════════════ MARQUEE ════════════  */}
<div className="marquee-strip sr" aria-hidden="true">
  <div className="marquee-inner">
    {Array.from({ length: 4 }).map((_, i) => (
      <span key={i}>
        <span className="marquee-item"><em>Protecting <span className="hero__amp">&amp;</span> Enhancing</em> <strong>Shareholder value</strong> <span className="dot">•</span></span>
        <span className="marquee-item">Thinking Like Owners <span className="dot">•</span></span>
        <span className="marquee-item">Operational Independence <span className="dot">•</span></span>
        <span className="marquee-item">Absolute Clarity <span className="dot">•</span></span>
      </span>
    ))}
  </div>
</div>

{/*  ════════════ ABOUT ════════════  */}
<section className="about" id="about">
  <div className="wrap">
    <div className="section-label">About Us</div>
    <h2 className="about__title">Accustomed eyes miss things.<br/>We uncover them.</h2>
    <div className="about__grid">
      <div className="about__prose">
        <p>We question what has been taken for granted. We identify the blind spots that would quietly erode long-term shareholder value.</p>
        <p>We are an independent global internal audit firm. Our single purpose is to help organisations protect and enhance long-term shareholder value.</p>
        <p>We do this by performing audits that are relevant to the business — at the right moment.</p>
        <p className="about__catalyst">We act as a catalyst. One who not only identifies the gaps and risks but also pushes for positive change.</p>
      </div>
      <div className="about__sidebar">
        <div className="about__sidebar-block">
          <div className="about__sidebar-label">Our Purpose</div>
          <div className="about__sidebar-value">Protect & enhance long-term shareholder value</div>
        </div>
        <div className="about__sidebar-block">
          <div className="about__sidebar-label">Our Focus</div>
          <div className="about__sidebar-value">Internal Audit, Risk Advisory, Good Governance</div>
        </div>
        <div className="about__sidebar-block">
          <div className="about__sidebar-label">Presence</div>
          <div className="about__sidebar-value">India · Europe · Global</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ════════════ VALUES ════════════  */}
<section className="values" id="values">
  <div className="wrap">
    <div className="section-label">Our Values</div>
    <h2 className="values__title">Five principles.<br/>Non-negotiable.</h2>
    <div className="values__list">

      <div className="value-row">
        <div className="value-row__num">01</div>
        <div className="value-row__head">Think Like Owners</div>
        <div className="value-row__body">We develop deep understanding of the client's business — why it exists, how it makes money, its unit economics, capital structure, brand, customer voice, and competitive dynamics.</div>
      </div>

      <div className="value-row">
        <div className="value-row__num">02</div>
        <div className="value-row__head">Human First</div>
        <div className="value-row__body">Every person — junior or senior — deserves to be heard, respected, and treated with dignity.</div>
      </div>

      <div className="value-row">
        <div className="value-row__num">03</div>
        <div className="value-row__head">Eagle Eye</div>
        <div className="value-row__body">Intellectually curious and sharp observational skills. We ask why. Why is it done this way? What can be improved — made faster, better, more efficient? We believe learning never ends.</div>
      </div>

      <div className="value-row">
        <div className="value-row__num">04</div>
        <div className="value-row__head">Speak Your Mind Clearly</div>
        <div className="value-row__body">We form our views and hold them. Our advice is honest — even when uncomfortable — and never shaped by pressure, relationships, or hidden agenda. If a board member cannot understand our recommendation in sixty seconds — we have failed.</div>
      </div>

      <div className="value-row">
        <div className="value-row__num">05</div>
        <div className="value-row__head">Enjoy the Journey</div>
        <div className="value-row__body">We believe work doesn't have to be serious to be exceptional — rigour and enjoyment are not mutually exclusive.</div>
      </div>

    </div>
  </div>
</section>

{/*  ════════════ DIFFERENTIATORS ════════════  */}
<section className="diff" id="differentiators">
  <div className="wrap">
    <div className="diff__top">
      <div>
        <div className="section-label">What Sets Us Apart</div>
        <h2>Four things differentiate us<br/>from others.</h2>
      </div>
    </div>
    <div className="diff__grid">

      <div className="diff__card">
        <div className="diff__card-num">01</div>
        <h3 className="diff__card-title">Our Approach</h3>
        <p>We are obsessed with protecting and enhancing Shareholder Value.<br/><br/>Everything we do — every audit, every finding, every recommendation — is anchored to this single purpose. That obsession shapes how we think, what we look for, and what we tell you. We do not audit to comply. We audit to improve.</p>
      </div>

      <div className="diff__card">
        <div className="diff__card-num">02</div>
        <h3 className="diff__card-title">Operational Experience</h3>
        <p>We bring operational experience to our work. Our team has seen the business first hand — from the shop floor to the boardroom. We have lived inside the industries we audit — FMCG, automotive, telecommunications, pharmaceuticals, oil and gas, manufacturing, financial services, and more. We do not arrive to learn your business. We arrive already knowing it.</p>
      </div>

      <div className="diff__card">
        <div className="diff__card-num">03</div>
        <h3 className="diff__card-title">Core Focus</h3>
        <p>Internal audit is not one of the things we do. It is the only thing we do. No tax. No statutory audit. No distractions. Only focused people make a real difference — and our focus is singular and unambiguous. Every engagement is led and delivered by a senior partner — not handed to a junior team after the proposal is signed. The experience you are promised is the experience you receive.</p>
      </div>

      <div className="diff__card">
        <div className="diff__card-num">04</div>
        <h3 className="diff__card-title">The Truth. Always.</h3>
        <p>We tell you what you need to hear. Not what is comfortable. Not what is easy. The most valuable thing we give any board or business owner is clarity — honest, independent, and actionable. And the confidence to act on it.</p>
      </div>

    </div>
  </div>
</section>

{/*  ════════════ METHODOLOGY ════════════  */}
<section className="methodology" id="methodology">
  {/*  Background watermark logo  */}
  <div className="methodology__watermark" aria-hidden={true}>
    <img src="logo.svg" alt="" />
  </div>
  <div className="wrap">
    <span className="methodology__quote" aria-hidden="true">&ldquo;</span>
    <div className="section-label">Our Methodology</div>
    <h2 className="methodology__title">We begin every audit at the top — <br/>where shareholder value is created or destroyed — <br/>and then we work our way down.</h2>
    <div className="methodology__domains">
      <div className="methodology__domain">
        <span className="methodology__domain-num">01</span>
        <span>Strategy, Growth &amp; Market</span>
      </div>
      <div className="methodology__domain">
        <span className="methodology__domain-num">02</span>
        <span>Customer, Brand &amp; Competition</span>
      </div>
      <div className="methodology__domain">
        <span className="methodology__domain-num">03</span>
        <span>Technology &amp; Data</span>
      </div>
      <div className="methodology__domain">
        <span className="methodology__domain-num">04</span>
        <span>Operations &amp; Execution</span>
      </div>
      <div className="methodology__domain">
        <span className="methodology__domain-num">05</span>
        <span>Financial Performance</span>
      </div>
      <div className="methodology__domain">
        <span className="methodology__domain-num">06</span>
        <span>People &amp; Organisation</span>
      </div>
      <div className="methodology__domain">
        <span className="methodology__domain-num">07</span>
        <span>ESG &amp; Sustainability</span>
      </div>
      <div className="methodology__domain">
        <span className="methodology__domain-num">08</span>
        <span>Risk, Compliance &amp; Governance</span>
      </div>
    </div>
    <p className="methodology__footnote">The wrong strategy, inefficiency, weak processes and bad culture destroy shareholder value. Compliance alone won't save it. We audit the difference.</p>
  </div>
</section>

{/*  ════════════ FOUR PHASES ════════════  */}
<section className="phases" id="phases">
  <div className="wrap">
    <div className="section-label">Our Process</div>
    <div className="phases__top">
      <h2>Four phases of our work.</h2>
      <p>Before we audit, we learn. We spend more time in planning than most firms spend in execution — because the right question is worth more than the right checklist.</p>
    </div>
    <div className="phases__items">

      <div className="phase-card">
        <div className="phase-card__header">
          <div className="phase-card__num">Phase 1</div>
          <h3 className="phase-card__title">Understand</h3>
        </div>
        <p>We deeply study your business, the problems you solve, your products, customer segments, five years of financial statements — revenue trends, EBITDA margins, return on capital, PAT margins — benchmarked against industry. We review MIS reports, organisation structure, and decision-making patterns. We look for what is strong, what is weak, and what the numbers are quietly saying that nobody has said out loud yet.</p>
        <div className="phase-card__closing">By the end of Phase 1 we know the business. Not as auditors. As owners.</div>
      </div>

      <div className="phase-card">
        <div className="phase-card__header">
          <div className="phase-card__num">Phase 2</div>
          <h3 className="phase-card__title">Plan</h3>
        </div>
        <p>We plan around what matters — not what is easy. We build a three-year, risk-based audit plan tailored specifically to your business. High priority areas audited annually. Medium priority every ten months. Lower priority every three years.</p>
        <div className="phase-card__closing">Our audit plan is not a template. It is built entirely around your business, your risks, and your ambitions.</div>
      </div>

      <div className="phase-card">
        <div className="phase-card__header">
          <div className="phase-card__num">Phase 3</div>
          <h3 className="phase-card__title">Execute</h3>
        </div>
        <p>We audit with rigour. We communicate with clarity. We execute with complete independence and keep you informed throughout — no surprises. Findings are presented in two formats — a detailed report for management and a crisp summary for the board.</p>
        <div className="phase-card__closing">Every recommendation connects back to one question: does this protect or improve long-term shareholder value?</div>
      </div>

      <div className="phase-card">
        <div className="phase-card__header">
          <div className="phase-card__num">Phase 4</div>
          <h3 className="phase-card__title">Follow Through</h3>
        </div>
        <p>A finding without action is just an observation. We offer a dedicated follow-up audit to verify that recommendations have been implemented and are working.</p>
        <div className="phase-card__closing">Because the real value of internal audit is not in the finding. It is in the fixing.</div>
      </div>

    </div>
  </div>
</section>

{/*  ════════════ SERVICES ════════════  */}
<section className="offerings" id="services">
  <div className="wrap">
    <div className="section-label">Our Services</div>
    <h2 className="offerings__title">Three ways to work with us.<br/>Each designed around one outcome.</h2>

    <div className="offering-block">
      <div className="offering-block__header">
        <div className="offering-block__num">01</div>
        <h3>Full Scope Internal Audit</h3>
        <span className="offering-block__tag">For organisations that need a complete internal audit function</span>
      </div>
      <p>We become your internal audit team — entirely. We design, build, and run your IA function from scratch. Strategy to execution. Planning to board reporting. Everything an internal audit function should do, done right.</p>
    </div>

    <div className="offering-block">
      <div className="offering-block__header">
        <div className="offering-block__num">02</div>
        <h3>Co-sourcing &amp; Staff Augmentation</h3>
        <span className="offering-block__tag">For organisations that have internal audit but need more</span>
      </div>
      <p>We embed experienced AiR professionals alongside your existing team — bringing specialist expertise, additional capacity, or an independent perspective exactly where it is needed.</p>
    </div>

    <div className="offering-block">
      <div className="offering-block__header">
        <div className="offering-block__num">03</div>
        <h3>Specialist Assignments</h3>
        <span className="offering-block__tag">For high-stakes situations that require deep expertise</span>
      </div>
      <p>Some situations demand more than a standard audit. We bring focused, experienced teams to the most sensitive and complex assignments:</p>
      <div className="offering-block__specialisms">
        <div className="specialism">
          <strong>Pre-Acquisition Due Diligence</strong>
          <span>Independent assessment of a target company's risks, controls, and financial integrity before a transaction</span>
        </div>
        <div className="specialism">
          <strong>Forensic Review</strong>
          <span>When something does not add up — we find out why. Our forensic reviews investigate suspected fraud, financial irregularities, unexplained losses, and control failures. Fact-based, confidential, and designed to give boards and owners the clarity they need to act decisively.</span>
        </div>
        <div className="specialism">
          <strong>Specific Business or Plant Review</strong>
          <span>Targeted, deep-dive assessment of a specific business unit, plant, or operational area</span>
        </div>
        <div className="specialism">
          <strong>IA Effectiveness Review</strong>
          <span>An independent assessment of whether your existing internal audit function is truly delivering value</span>
        </div>
        <div className="specialism">
          <strong>ESG Audit &amp; Assurance</strong>
          <span>Independent review of ESG data, disclosures, and underlying controls</span>
        </div>
        <div className="specialism">
          <strong>AI &amp; Technology Risk Audit</strong>
          <span>Assessment of risks arising from AI systems, automation, and digital infrastructure</span>
        </div>
      </div>
    </div>

  </div>
</section>

{/*  ════════════ TEAM ════════════  */}
<section className="team" id="team">
  <div className="wrap">
    <div className="section-label">Our Team</div>
    <div className="team__head">
      <h2>AiR is built on one founding principle — <br/>that the people who do the work must be <br/>the best in the room. Every time.</h2>
    </div>

    {/*  Founder  */}
    <div className="founder-card">
      <div className="founder-card__photo-wrap">
        <img src="team-sumit.jpg" alt="Sumit Chuttar" className="founder-card__photo" />
      </div>
      <div className="founder-card__content">
        <div className="founder-card__label">Founder</div>
        <h3 className="founder-card__name">Sumit Chuttar</h3>
        <div className="founder-card__role">Founder &amp; Partner — AiR, Audit It Right</div>
        <p>Twenty-five years. Every kind of business imaginable — from local family enterprises to global multinationals. From India to Europe, South America to Russia. Across telecommunications, FMCG, automotive, pharmaceuticals, oil and gas, shipbuilding, and capital-intensive industries.</p>
        <p>What that journey builds is something no classroom can teach — the ability to walk into any business, in any market, and understand it quickly and deeply. Not just the numbers. The strategy, the capital allocation decisions, the competitive pressures, and the risks that haven't shown up yet but will.</p>
        <p>Sumit is known for three things. His understanding of how businesses actually work. His ability to identify the roadblocks ahead before they become the crises that define you. And his honesty — the kind that is uncomfortable in the moment and invaluable in hindsight.</p>
        <p className="founder-card__why">He built AiR because he spent twenty-five years watching internal audit miss the point — and decided there was a better way to do it.</p>
        <p className="founder-card__drive">Driven entirely by one thing — adding real value to the businesses he works with.</p>
      </div>
    </div>

    {/*  Team intro  */}
    <div className="team__intro-text">
      <p>AiR is led and delivered by a senior team of internal audit professionals with combined experience spanning decades across industries, geographies, and business types — from fast-growing startups to listed multinationals.</p>
      <p><strong>Every engagement is partner-led. The experience you are promised is the experience you receive.</strong></p>
    </div>

    {/*  Team roster  */}
    <div className="team__roster">
      <div className="team__person">
        <img src="team-aman.jpg" alt="Aman Kabra" className="team__photo" />
        <div className="team__pname">Aman Kabra</div>
        <div className="team__prole">Partner</div>
        <p className="team__pbio">Fifteen years of experience across internal audit and risk advisory. Deep expertise in enterprise risk, operational audits, and regulatory compliance frameworks.</p>
      </div>

      <div className="team__person">
        <img src="team-monika.jpg" alt="Monika Gupta" className="team__photo" />
        <div className="team__pname">Monika Gupta</div>
        <div className="team__prole">Partner</div>
        <p className="team__pbio">Seventeen years across financial assurance, SOX compliance, and internal controls. Has led ICFR reviews for listed companies and advised Audit Committees directly.</p>
      </div>

      <div className="team__person">
        <img src="team-kanish.jpg" alt="Kanish Kabra" className="team__photo" />
        <div className="team__pname">Kanish Kabra</div>
        <div className="team__prole">Senior Manager</div>
        <p className="team__pbio">Specialist in technology audits, cyber risk, and AI governance. Brings deep domain knowledge across IT general controls and digital risk posture reviews.</p>
      </div>

      <div className="team__person">
        <img src="team-ramji.jpg" alt="Ramji Subramanian" className="team__photo" />
        <div className="team__pname">Ramji Subramanian</div>
        <div className="team__prole">Partner</div>
        <p className="team__pbio">Extensive experience across enterprise risk, internal controls, and governance frameworks. Brings cross-industry insight and senior-level advisory expertise to every engagement.</p>
      </div>
    </div>

  </div>
</section>

{/*  ════════════ CAREER ════════════  */}
<section className="career" id="career">
  <div className="wrap">
    <div className="career__layout">
      <div className="career__left">
        <div className="section-label">Career at AiR</div>
        <h2>We are building something different.<br/>We want people who are too.</h2>
        <p className="career__intro">AiR is not for everyone. We are not looking for auditors who are comfortable with checklists, compliance templates, and safe observations. We are looking for professionals who are genuinely curious, deeply commercial, and honest enough to say what needs to be said — every time.</p>

        <h3 className="career__sub">You belong at AiR if you:</h3>
        <ul className="career__belong">
          <li>Think like a business owner, not just an auditor</li>
          <li>Have the courage to challenge the most powerful person in the room — respectfully and constructively</li>
          <li>Believe internal audit should drive shareholder value — not just tick regulatory boxes</li>
          <li>Are hungry to learn — about businesses, industries, markets, and people</li>
          <li>Take pride in clarity — in how you think, write, and communicate</li>
          <li>Want to work on engagements that actually matter</li>
        </ul>
      </div>
      <div className="career__right">
        <h3 className="career__sub">What we offer:</h3>
        <div className="career__offers">
          <div className="career__offer">
            <div className="career__offer-icon">→</div>
            <span>Work that is intellectually challenging and commercially meaningful</span>
          </div>
          <div className="career__offer">
            <div className="career__offer-icon">→</div>
            <span>Exposure to diverse industries, geographies, and business types</span>
          </div>
          <div className="career__offer">
            <div className="career__offer-icon">→</div>
            <span>A culture built on integrity, independence, and genuine partnership</span>
          </div>
          <div className="career__offer">
            <div className="career__offer-icon">→</div>
            <span>The opportunity to build something exceptional from the ground up</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ════════════ CONTACT ════════════  */}
<section className="contact" id="contact">
  <div className="wrap">
    <div className="section-label">Let's Talk</div>
    <h2 className="contact__headline">If you are looking for internal audit that gives you real insight — we would like to hear from you.</h2>
    <div className="contact__inner">
      <div className="contact__left">
        <div>
          <h3>Start a Conversation</h3>
          <p>Whether you have a specific requirement in mind or simply want to explore how AiR can add value to your business — reach out. No obligation. No sales pitch. Just an honest conversation.</p>
        </div>
        <div className="contact__details">
          <div className="contact__detail">
            <div className="contact__dl">Email</div>
            <div className="contact__dv">hello@auditright.com<small>We reply within 24 hours</small></div>
          </div>
          <div className="contact__detail">
            <div className="contact__dl">Website</div>
            <div className="contact__dv">www.auditright.com</div>
          </div>
          <div className="contact__detail">
            <div className="contact__dl">Presence</div>
            <div className="contact__dv">India | Europe | Global</div>
          </div>
        </div>
      </div>

      <div className="contact__right">
        <h3>Get in touch.</h3>
        <p>Tell us what's on your mind. A partner responds within one business day.</p>
        <form noValidate aria-label="Contact form" onSubmit={submitForm}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="fn">First name</label>
              <input type="text" id="fn" autoComplete="given-name" placeholder="Your first name" required />
            </div>
            <div className="field">
              <label htmlFor="ln">Last name</label>
              <input type="text" id="ln" autoComplete="family-name" placeholder="Your last name" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="em">Email</label>
              <input type="email" id="em" autoComplete="email" placeholder="you@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="ph">Phone</label>
              <input type="tel" id="ph" autoComplete="tel" placeholder="+91 98765 43210" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="co">Company</label>
            <input type="text" id="co" autoComplete="organization" placeholder="Your company name" />
          </div>
          <div className="field">
            <label htmlFor="svc">What do you need?</label>
            <select id="svc" defaultValue="">
              <option value="" disabled>Pick the closest match</option>
              <option>Full Scope Internal Audit</option>
              <option>Co-sourcing &amp; Staff Augmentation</option>
              <option>Pre-Acquisition Due Diligence</option>
              <option>Forensic Review</option>
              <option>IA Effectiveness Review</option>
              <option>ESG Audit &amp; Assurance</option>
              <option>AI &amp; Technology Risk Audit</option>
              <option>Not sure — want to talk</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="msg">Tell us more</label>
            <textarea id="msg" placeholder="Size of your organisation, what challenges you're facing, what you're looking to achieve…" required></textarea>
          </div>
          <div className="form-foot">
            <button 
              type="submit" 
              className="submit-btn" 
              id="submit-btn" 
              disabled={formStatus !== 'idle'}
              style={formStatus === 'sent' ? { background: '#1B2A4A', color: '#FFFFFF', borderColor: '#1B2A4A' } : undefined}
            >
              {formStatus === 'idle' && (
                <>
                  Send message
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </>
              )}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'sent' && 'Message sent ✓'}
            </button>
            <span className="form-note">Never shared. Never sold.</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

</main>
<footer className="footer">
  {/*  Footer watermark logo  */}
  <div className="footer__watermark" aria-hidden={true}>
    <img src="logo.svg" alt="" />
  </div>
  <div className="wrap">
    <div className="footer__top">
      <div>
        <div className="footer__brand-row">
          <img src="logo.svg" alt="" className="footer__brand-logo" />
          <div className="footer__brand-name">
            AiR — Audit It Right
            <small>Protecting Shareholder Value</small>
          </div>
        </div>
        <p className="footer__tagline">Independent internal audit built around one purpose — protecting and enhancing long-term shareholder value.</p>
        <p className="footer__services-line">Internal Audit · Risk Advisory · Good Governance</p>
      </div>
      <div className="footer__col">
        <h4>Services</h4>
        <ul>
          <li><a href="#services">Full Scope Internal Audit</a></li>
          <li><a href="#services">Co-sourcing &amp; Staff Aug.</a></li>
          <li><a href="#services">Specialist Assignments</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#methodology">Methodology</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Get In Touch</h4>
        <ul>
          <li><a href="mailto:hello@auditright.com">hello@auditright.com</a></li>
          <li><a href="https://www.auditright.com" target="_blank">www.auditright.com</a></li>
          <li><a href="#contact">India | Europe | Global</a></li>
        </ul>
      </div>
    </div>
    <div className="footer__bottom">
      <p className="footer__copy">© 2026 AiR — Audit It Right. Internal Audit. All rights reserved.</p>
      <nav className="footer__legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Disclaimer</a>
      </nav>
    </div>
  </div>
</footer>
<div className="float-cta" id="float-cta">
  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    <span className="float-cta__label">Chat on WhatsApp</span>
  </a>
</div>

    </>
  );
}
