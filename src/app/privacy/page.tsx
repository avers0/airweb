import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — AiR: Audit It Right',
  description: 'How AiR collects, uses, and protects your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1B2A4A', background: '#FFFFFF', minHeight: '100vh' }}>
      {/* Nav bar */}
      <header style={{ borderBottom: '1px solid rgba(27,42,74,.1)', padding: '20px 0', background: '#fff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: '18px', color: '#1B2A4A', textDecoration: 'none', letterSpacing: '-.01em' }}>
            AiR — Audit It Right
          </Link>
          <Link href="/" style={{ fontSize: '13px', color: '#5A6577', textDecoration: 'none' }}>← Back to site</Link>
        </div>
      </header>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 24px 80px' }}>
        <div style={{ borderLeft: '3px solid #C0272D', paddingLeft: '20px', marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#C0272D', marginBottom: '8px' }}>Legal</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '32px', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>Privacy Policy</h1>
          <p style={{ fontSize: '13px', color: '#5A6577', marginTop: '10px' }}>Effective date: 1 January 2026 &nbsp;·&nbsp; Last updated: 1 January 2026</p>
        </div>

        <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#374151' }}>

          <Section title="1. Who We Are">
            <p>AiR — Audit It Right (&ldquo;AiR&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an independent internal audit firm operating in India and internationally. Our registered office is located at [REGISTERED OFFICE ADDRESS], India.</p>
            <p>This Privacy Policy explains how we collect, use, and protect personal information submitted through our website <strong>www.audititright.com</strong> (&ldquo;Site&rdquo;), in compliance with the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;) and applicable data protection laws.</p>
          </Section>

          <Section title="2. Data We Collect">
            <p>We collect only the personal data you voluntarily provide via our contact form:</p>
            <ul>
              <li>First name and last name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Company / organisation name (optional)</li>
              <li>Nature of requirement (selected from a list)</li>
              <li>Message / enquiry text</li>
            </ul>
            <p>We do not collect any sensitive personal data as defined under the DPDP Act. We do not use tracking cookies or analytics tools that collect personal identifiers.</p>
          </Section>

          <Section title="3. Purpose of Processing">
            <p>We process your personal data solely to:</p>
            <ul>
              <li>Respond to your enquiry</li>
              <li>Contact you to discuss your requirements</li>
              <li>Fulfil any subsequent engagement you enter into with us</li>
            </ul>
            <p>We process your data on the basis of your explicit consent, given at the time of form submission. You may withdraw this consent at any time by contacting us at <a href="mailto:hello@audititright.com" style={{ color: '#1B2A4A' }}>hello@audititright.com</a>.</p>
          </Section>

          <Section title="4. Data Sharing">
            <p>We do not sell, rent, trade, or share your personal data with any third party except:</p>
            <ul>
              <li><strong>Service providers</strong> — We use Formspree (formspree.io) to route contact form submissions to our inbox. Formspree acts as a data processor on our behalf and is subject to its own privacy policy.</li>
              <li><strong>Legal obligation</strong> — We may disclose data if required by law, court order, or a competent regulatory authority.</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain your personal data for no longer than 3 years from the date of your last interaction with us, or for the duration of any engagement, whichever is longer. After this period, data is securely deleted or anonymised.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>Under the DPDP Act, 2023, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate personal data</li>
              <li>Erasure of your personal data (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Withdraw consent at any time</li>
              <li>Nominate another person to exercise these rights on your behalf</li>
            </ul>
            <p>To exercise any of these rights, email us at <a href="mailto:hello@audititright.com" style={{ color: '#1B2A4A' }}>hello@audititright.com</a>. We will respond within 30 days.</p>
          </Section>

          <Section title="7. Data Security">
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Our Site uses HTTPS encryption for all data in transit.</p>
          </Section>

          <Section title="8. Cookies">
            <p>Our Site does not currently use cookies that collect personal data. If we introduce analytics or tracking tools in the future, we will update this policy and display an appropriate consent notice.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. The effective date at the top of this page will reflect the most recent update. Continued use of the Site after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="10. Contact">
            <p>For any questions, concerns, or data rights requests:</p>
            <p>
              <strong>AiR — Audit It Right</strong><br />
              [REGISTERED OFFICE ADDRESS], India<br />
              Email: <a href="mailto:hello@audititright.com" style={{ color: '#1B2A4A' }}>hello@audititright.com</a><br />
              Website: <a href="https://www.audititright.com" style={{ color: '#1B2A4A' }}>www.audititright.com</a>
            </p>
          </Section>

        </div>

        <div style={{ borderTop: '1px solid rgba(27,42,74,.1)', paddingTop: '32px', marginTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/terms" style={{ fontSize: '13px', color: '#5A6577', textDecoration: 'none' }}>Terms of Use</Link>
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
