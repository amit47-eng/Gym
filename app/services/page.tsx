'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import styles from './services.module.css';

const services = [
  {
    slug: 'commercial-setup',
    icon: '🏋️‍♂️',
    title: 'Commercial Setup',
    tagline: 'Build the gym your clients deserve.',
    description: `We handle every aspect of your commercial gym transformation — from spatial planning and equipment sourcing to installation and final inspection. Our team has outfitted over 300 facilities across the country with precision-engineered setups built to withstand the highest training volumes.`,
    details: [
      { label: 'Consultation', value: 'Free on-site assessment & 3D layout design' },
      { label: 'Equipment', value: 'Premium brands: Life Fitness, Rogue, Technogym' },
      { label: 'Installation', value: 'Full turnkey setup — delivered & installed' },
      { label: 'Timeline', value: '2–6 weeks depending on facility size' },
      { label: 'Warranty', value: '5-year structural + 2-year parts coverage' },
    ],
    highlight: '$2,500 setup credit on projects over $50,000',
  },
  {
    slug: 'custom-engineering',
    icon: '🛠️',
    title: 'Custom Engineering',
    tagline: 'If you can imagine it, we can build it.',
    description: `Off-the-shelf doesn't always cut it. Our in-house engineering team designs and fabricates custom rigs, functional training zones, and bespoke cable systems to exact specifications — matching your space, brand aesthetic, and training philosophy.`,
    details: [
      { label: 'Design', value: 'CAD drawings & 3D renders provided before build' },
      { label: 'Materials', value: '11-gauge US steel with powder-coat finish options' },
      { label: 'Lead Time', value: '4–8 weeks from design approval' },
      { label: 'Customization', value: 'Dimensions, colors, attachments, and branding' },
      { label: 'Minimum Order', value: 'Available for single units or full zones' },
    ],
    highlight: 'Free 3D design mockup with any enquiry',
  },
  {
    slug: 'maintenance-support',
    icon: '⚡',
    title: 'Maintenance & Support',
    tagline: 'Zero downtime. 100% uptime.',
    description: `Equipment failure costs you revenue and reputation. Our proactive maintenance program keeps every machine operating at peak performance all year round. With 24/7 support and dedicated regional technicians, we resolve issues before your members even notice.`,
    details: [
      { label: 'Response Time', value: 'Critical faults resolved within 4 hours' },
      { label: 'Visits', value: 'Quarterly preventive maintenance included' },
      { label: 'Coverage', value: 'All major brands and equipment types' },
      { label: 'Dashboard', value: 'Live equipment health monitoring via app' },
      { label: 'Pricing', value: 'From $199/month for up to 20 machines' },
    ],
    highlight: 'First month of maintenance FREE with any equipment purchase',
  },
  {
    slug: 'consultation',
    icon: '📐',
    title: 'Space Consultation',
    tagline: 'Maximize every square foot.',
    description: `Not sure how to configure your space? Our certified facility consultants will visit your site, analyze traffic flow, safety clearances, and member experience — then produce a detailed layout plan optimized for your specific clientele and goals.`,
    details: [
      { label: 'Duration', value: '2–4 hour on-site session' },
      { label: 'Deliverables', value: 'Written report + 2D/3D floor plan' },
      { label: 'Expertise', value: 'NSCA-certified facility design specialists' },
      { label: 'Follow-up', value: '30-day Q&A support included' },
      { label: 'Cost', value: '$399 (waived on equipment orders over $10,000)' },
    ],
    highlight: 'Book before April 30 — 50% off consultation fee',
  },
  {
    slug: 'financing',
    icon: '💳',
    title: 'Financing & Leasing',
    tagline: 'Equip now. Pay later.',
    description: `Don't let budget hold back your vision. IronCore partners with leading commercial finance providers to offer flexible leasing and financing plans for gyms of any size — from boutique studios to large-scale facilities.`,
    details: [
      { label: 'Terms', value: '12 to 60-month plans available' },
      { label: 'Rate', value: 'From 0% APR on approved credit' },
      { label: 'Down Payment', value: 'As low as 10%' },
      { label: 'Approval', value: 'Decision within 24–48 hours' },
      { label: 'Min Order', value: 'Financing available on orders $5,000+' },
    ],
    highlight: '0% interest for 12 months on orders over $20,000',
  },
];

const chatMessages = [
  { from: 'bot', text: 'Hey! 👋 Welcome to IronCore Support. How can I help you today?' },
];

const quickReplies = [
  'Get a quote',
  'Track my order',
  'Book a consultation',
  'Maintenance plan info',
];

export default function ServicesPage() {
  const [activeSlug, setActiveSlug] = useState('commercial-setup');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState(chatMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const activeService = services.find(s => s.slug === activeSlug)!;

  // Auto-scroll hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && services.find(s => s.slug === hash)) {
      setActiveSlug(hash);
    }
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg = { from: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const responses: { [key: string]: string } = {
        'get a quote': "I'd love to help with a quote! Please share your facility size, location, and which services you're interested in, and our team will get back to you within 24 hours.",
        'track my order': "To track your order, please provide your order ID (found in your confirmation email). Alternatively, call us at 1-800-IRONCORE.",
        'book a consultation': "Great choice! Our consultants are available Mon–Sat, 9am–6pm. I'll connect you with our scheduling team — what city are you based in?",
        'maintenance plan info': "Our maintenance plans start at $199/month covering up to 20 machines. They include quarterly visits, 24/7 tech support, and a live equipment dashboard!",
      };
      const key = text.toLowerCase();
      const reply = responses[key] || "Thanks for your message! A support specialist will respond shortly. For urgent queries, call us at **1-800-IRONCORE** (Mon–Sat, 9am–6pm).";
      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <div className={styles.page}>
      <Navbar />

      {/* ── Services Sub-Navbar ── */}
      <div className={styles.subNav}>
        <div className={styles.subNavInner}>
          {services.map(s => (
            <button
              key={s.slug}
              className={`${styles.subNavBtn} ${activeSlug === s.slug ? styles.subNavActive : ''}`}
              onClick={() => { setActiveSlug(s.slug); window.history.replaceState(null, '', `/services#${s.slug}`); }}
            >
              <span className={styles.subNavIcon}>{s.icon}</span>
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className={styles.main}>
        <div className={styles.container}>

          {/* Hero Banner */}
          <div className={styles.heroBanner}>
            <span className={styles.heroBannerIcon}>{activeService.icon}</span>
            <div>
              <h1 className={styles.heroTitle}>{activeService.title}</h1>
              <p className={styles.heroTagline}>{activeService.tagline}</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className={styles.contentGrid}>

            {/* Description */}
            <div className={styles.descBlock}>
              <p className={styles.description}>{activeService.description}</p>

              {/* Highlight Banner */}
              <div className={styles.highlightBanner}>
                <span className={styles.highlightIcon}>🎁</span>
                <span>{activeService.highlight}</span>
              </div>

              <button className={styles.ctaBtn} onClick={() => setChatOpen(true)}>
                💬 Talk to an Expert
              </button>
            </div>

            {/* Details Panel */}
            <div className={styles.detailsPanel}>
              <h3 className={styles.detailsTitle}>Service Details</h3>
              <ul className={styles.detailsList}>
                {activeService.details.map(d => (
                  <li key={d.label} className={styles.detailItem}>
                    <span className={styles.detailLabel}>{d.label}</span>
                    <span className={styles.detailValue}>{d.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Services Quick Nav */}
          <div className={styles.otherServices}>
            <h3 className={styles.otherTitle}>Other Services</h3>
            <div className={styles.otherGrid}>
              {services.filter(s => s.slug !== activeSlug).map(s => (
                <button
                  key={s.slug}
                  className={styles.otherCard}
                  onClick={() => { setActiveSlug(s.slug); window.history.replaceState(null, '', `/services#${s.slug}`); }}
                >
                  <span className={styles.otherIcon}>{s.icon}</span>
                  <span className={styles.otherName}>{s.title}</span>
                  <span className={styles.otherArrow}>→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ── Chat Widget ── */}
      <div className={`${styles.chatWidget} ${chatOpen ? styles.chatOpen : ''}`}>
        {/* Bubble */}
        {!chatOpen && (
          <button className={styles.chatBubble} onClick={() => setChatOpen(true)} aria-label="Open chat">
            <span className={styles.chatBubbleIcon}>💬</span>
            <span className={styles.chatBubblePulse}></span>
          </button>
        )}

        {/* Chat Window */}
        {chatOpen && (
          <div className={styles.chatWindow}>
            <div className={styles.chatHeader}>
              <div className={styles.chatAgentInfo}>
                <div className={styles.chatAvatar}>IC</div>
                <div>
                  <div className={styles.chatAgentName}>IronCore Support</div>
                  <div className={styles.chatStatus}><span className={styles.statusDot}></span> Online</div>
                </div>
              </div>
              <button className={styles.chatClose} onClick={() => setChatOpen(false)}>✕</button>
            </div>

            <div className={styles.chatMessages}>
              {messages.map((m, i) => (
                <div key={i} className={`${styles.chatMsg} ${m.from === 'user' ? styles.chatMsgUser : styles.chatMsgBot}`}>
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className={`${styles.chatMsg} ${styles.chatMsgBot}`}>
                  <span className={styles.typingDots}><span></span><span></span><span></span></span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && (
              <div className={styles.quickReplies}>
                {quickReplies.map(r => (
                  <button key={r} className={styles.quickReplyBtn} onClick={() => sendMessage(r)}>{r}</button>
                ))}
              </div>
            )}

            <div className={styles.chatInputRow}>
              <input
                className={styles.chatInput}
                placeholder="Type a message…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              />
              <button className={styles.chatSend} onClick={() => sendMessage(input)}>➤</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
