import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer — AiR: Audit It Right',
  description: 'Legal disclaimer for the AiR website.',
};

export default function Disclaimer() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1B2A4A', background: '#FFFFFF', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid rgba(27,42,74,.1)', padding: '20px 0', background: '#fff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: '18px', color: '#1B2A4A', textDecoration: 'none' }}>
            AiR — Audit It Right
          </Link>
          <Link href="/" style={{ fontSize: '13px', color: '#5A6577', textDecoration: 'none' }}>← Back to site</Link>
        </div>
      </header>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 24px 80px' }}>
        <div style={{ borderLeft: '3px solid #C0272D', paddingLeft: '20px', marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#C0272D', marginBottom: '8px' }}>Legal</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '32px', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>Disclaimer</h1>
          <p style={{ fontSize: '13px', color: '#5A6577', marginTop: '10px' }}>Effective date: 1 January 2026</p>
        </div>

        <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#374151' }}>

          <Section title="Not a Solicitation">
            <p>This website and all content published hereon is for informational purposes only. Nothing on this Site constitutes a solicitation, advertisement, or inducement to engage the professional services of AiR — Audit It Right (&ldquo;AiR&rdquo;).</p>
          </Section>

          <Section title="No Professional Relationship">
            <p>Access to this Site, review of its contents, or submission of an enquiry does not establish a professional, client-auditor, or advisory relationship between the visitor and AiR or any of its partners. Any such relationship is established only through a formal, written engagement agreement.</p>
          </Section>

          <Section title="No Professional Advice">
            <p>The content on this Site is provided for general informational purposes only. It does not constitute — and should not be relied upon as — legal, financial, accounting, tax, or audit advice specific to your circumstances. Visitors should obtain independent professional advice before making any business decision.</p>
          </Section>

          <Section title="No Guarantee of Outcomes">
            <p>Descriptions of prior experience or the nature of services on this Site are illustrative only. Past engagement experience does not guarantee similar outcomes in future engagements. Each engagement is unique and outcomes depend on specific facts and circumstances.</p>
          </Section>

          <Section title="Geographic Scope">
            <p>This Site is not directed at any jurisdiction where its use would be contrary to local laws or regulations. It is the responsibility of the visitor to ensure that access to and use of this Site complies with applicable laws in their jurisdiction.</p>
          </Section>

          <Section title="Limitation of Liability">
            <p>AiR and its partners, employees, or agents shall not be liable for any loss, damage, or expense arising out of your use of, or reliance on, any information on this Site. This limitation applies to direct, indirect, incidental, consequential, and any other form of loss.</p>
          </Section>

          <Section title="Contact">
            <p>
              <strong>AiR — Audit It Right</strong><br />
              [REGISTERED OFFICE ADDRESS], India<br />
              Email: <a href="mailto:hello@audititright.com" style={{ color: '#1B2A4A' }}>hello@audititright.com</a>
            </p>
          </Section>

        </div>

        <div style={{ borderTop: '1px solid rgba(27,42,74,.1)', paddingTop: '32px', marginTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{ fontSize: '13px', color: '#5A6577', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize: '13px', color: '#5A6577', textDecoration: 'none' }}>Terms of Use</Link>
          <Link href="/" style={{ fontSize: '13px', color: '#5A6577', textDecoration: 'none' }}>← Back to site</Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 700, color: '#1B2A4A', marginBottom: '12px', marginTop: 0 }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>{children}</div>
    </div>
  );
}
