
import PageLayout from '@/components/layout/PageLayout';
import { SectionHeading } from '@/components/ui/section-heading';

const Terms = () => {
  return (
    <PageLayout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Terms of Service"
            subtitle="Last updated: May 6, 2025"
            center
          />
          <div className="max-w-3xl mx-auto mt-12">
            <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-white prose-strong:text-white/90 max-w-none">
              <p>
                Welcome to Shyena Security. By accessing our website or using our services, you agree to be bound by these Terms of Service.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to these Terms and our Privacy Policy. If you are using our services on behalf of an organization, you are agreeing to these Terms on behalf of that organization.
              </p>

              <h2>2. Description of Services</h2>
              <p>
                Shyena Security provides cybersecurity services, including but not limited to:
              </p>
              <ul>
                <li>The FlagForge CTF platform</li>
                <li>Cybersecurity training</li>
                <li>Red and Blue Team labs</li>
                <li>SOC setup consultation</li>
                <li>Security audits and penetration testing</li>
              </ul>

              <h2>3. User Accounts</h2>
              <p>
                To access certain features of our services, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h2>4. User Content</h2>
              <p>
                Our services may allow you to create, upload, or share content. You retain ownership of any intellectual property rights you hold in that content, but you grant us a worldwide, royalty-free license to use, store, and distribute that content in connection with providing our services.
              </p>

              <h2>5. Acceptable Use</h2>
              <p>
                When using our services, you agree not to:
              </p>
              <ul>
                <li>Use our services for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to any part of our services</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Share your account credentials with others</li>
                <li>Use the knowledge gained from our services to attack or compromise systems without explicit authorization</li>
              </ul>

              <h2>6. FlagForge Platform Specific Terms</h2>
              <p>
                When using the FlagForge platform:
              </p>
              <ul>
                <li>You may only attempt to exploit vulnerabilities within the designated challenge environments</li>
                <li>You may not attempt to attack or disrupt the FlagForge platform infrastructure</li>
                <li>You may not share solutions or flags with others unless explicitly permitted in team-based challenges</li>
                <li>You may not automate solving challenges unless explicitly permitted</li>
              </ul>

              <h2>7. Payment Terms</h2>
              <p>
                Some of our services require payment. By subscribing to a paid service:
              </p>
              <ul>
                <li>You agree to pay all fees associated with the selected plan</li>
                <li>Subscription fees are charged at the beginning of each billing period</li>
                <li>Refunds are provided in accordance with our Refund Policy</li>
              </ul>

              <h2>8. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and code, are owned by Shyena Security or our licensors and are protected by intellectual property laws.
              </p>

              <h2>9. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we determine violates these Terms or is harmful to other users or us.
              </p>

              <h2>10. Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.
              </p>

              <h2>11. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Shyena Security shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>

              <h2>12. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. If we make material changes, we will notify you before the changes become effective.
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of New York, without regard to its conflict of law provisions.
              </p>

              <h2>14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at legal@shyenasecurity.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
