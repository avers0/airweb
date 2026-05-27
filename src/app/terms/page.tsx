import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use — AiR: Audit It Right',
  description: 'Terms governing use of the AiR website.',
};

export default function TermsOfUse() {
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
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '32px', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>Terms of Use</h1>
          <p style={{ fontSize: '13px', color: '#5A6577', marginTop: '10px' }}>Effective date: 1 January 2026</p>
        </div>

        <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#374151' }}>

          <Section title="1. Acceptance of Terms">
            <p>By accessing or using the website at <strong>www.audititright.com</strong> (&ldquo;Site&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.</p>
          </Section>

          <Section title="2. Informational Purpose Only">
            <p>This Site is published solely for informational purposes. The content on this Site describes the general nature of services offered by AiR — Audit It Right (&ldquo;AiR&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). It does not constitute an offer, solicitation, or advertisement of any kind.</p>
            <p>Nothing on this Site should be construed as professional advice — financial, legal, accounting, tax, or otherwise. You should obtain independent professional advice before acting on any information found on this Site.</p>
          </Section>

          <Section title="3. No Client Relationship">
            <p>Visiting this Site, submitting an enquiry, or communicating with us via the contact form does not establish a client-auditor relationship or any other professional relationship between you and AiR. Such a relationship is only formed by a written engagement letter duly signed by both parties.</p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>All content on this Site — including text, graphics, logos, and design — is the property of AiR — Audit It Right and is protected under applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
          </Section>

          <Section title="5. Accuracy of Information">
            <p>We make reasonable efforts to ensure the information on this Site is accurate and up to date. However, we do not warrant the completeness, accuracy, or timeliness of any information on the Site. We reserve the right to change or update information at any time without prior notice.</p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>To the fullest extent permitted by law, AiR shall not be liable for any loss or damage arising from your use of, or reliance on, any information on this Site. This includes direct, indirect, incidental, or consequential loss of any kind.</p>
          </Section>

          <Section title="7. Third-Party Links">
            <p>This Site may contain links to external websites. We do not endorse or take responsibility for the content or practices of any third-party sites.</p>
          </Section>

          <Section title="8. Governing Law">
            <p>These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising in connection with this Site shall be subject to the exclusive jurisdiction of the courts in India.</p>
          </Section>

          <Section title="9. Changes to These Terms">
            <p>We may revise these Terms of Use at any time. Continued use of the Site following any changes constitutes your acceptance of the revised terms.</p>
          </Section>

          <Section title="10. Contact">
            <p>
              <strong>AiR — Audit It Right</strong><br />
              [REGISTERED OFFICE ADDRESS], India<br />
              Email: <a href="mailto:hello@audititright.com" style={{ color: '#1B2A4A' }}>hello@audititright.com</a>
            </p>
          </Section>

        </div>

        <div style={{ borderTop: '1px solid rgba(27,42,74,.1)', paddingTop: '32px', marginTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{ fontSize: '13px', color: '#5A6577', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/disclaimer" style={{ fontSize: '13px', color: '#5A6577', textDecoration: 'none' }}>Disclaimer</Link>
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
