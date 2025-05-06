
import PageLayout from '@/components/layout/PageLayout';
import { SectionHeading } from '@/components/ui/section-heading';

const Privacy = () => {
  return (
    <PageLayout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Last updated: May 6, 2025"
            center
          />
          <div className="max-w-3xl mx-auto mt-12">
            <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-white prose-strong:text-white/90 max-w-none">
              <p>
                At Shyena Security, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our FlagForge platform.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect information about you in a variety of ways:</p>

              <h3>Personal Data</h3>
              <p>
                When you register for an account, we collect personal information such as your name, email address, and organization name. If you choose to participate in our training programs or use our paid services, we may also collect billing information.
              </p>

              <h3>Usage Data</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate our website or platform. This may include your IP address, browser type, device type, operating system, referring URLs, and information about how you interact with our website and services.
              </p>

              <h3>Challenge Data</h3>
              <p>
                When you use our FlagForge platform, we collect data related to your interactions with challenges, including submission attempts, completion rates, and performance metrics.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect about you for various purposes:</p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To improve our website and platform</li>
                <li>To communicate with you about updates, security alerts, and support</li>
                <li>To provide customer support</li>
                <li>To process transactions</li>
                <li>To administer promotional activities or events</li>
                <li>To create aggregated statistical data for research purposes</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>
                We may share your information in the following situations:
              </p>

              <h3>With Service Providers</h3>
              <p>
                We may share your information with third-party vendors, service providers, and contractors who perform services for us or on our behalf.
              </p>

              <h3>Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
              </p>

              <h3>Legal Requirements</h3>
              <p>
                We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>

              <h2>Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information. These might include:
              </p>
              <ul>
                <li>The right to access information we have about you</li>
                <li>The right to request correction of your personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of marketing communications</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@shyenasecurity.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
