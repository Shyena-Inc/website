
import PageLayout from '@/components/layout/PageLayout';
import { SectionHeading } from '@/components/ui/section-heading';

const CookiePolicy = () => {
  return (
    <PageLayout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Cookie Policy"
            subtitle="Last updated: May 6, 2025"
            center
          />
          <div className="max-w-3xl mx-auto mt-12">
            <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-white prose-strong:text-white/90 max-w-none">
              <p>
                This Cookie Policy explains how Shyena Security uses cookies and similar technologies to recognize you when you visit our website and use our FlagForge platform. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2>What are cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work efficiently and to provide reporting information.
              </p>

              <p>
                Cookies set by the website owner (in this case, Shyena Security) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
              </p>

              <h2>Why do we use cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website and platform to operate, and we refer to these as "essential" or "necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website and platform. Third parties serve cookies through our website for analytics and other purposes.
              </p>

              <h2>Types of cookies we use</h2>
              <p>
                The specific types of cookies served through our website and platform and the purposes they perform are described below:
              </p>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website and platform to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not work properly.
              </p>

              <h3>Performance Cookies</h3>
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and anonymous.
              </p>

              <h3>Functionality Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
              </p>

              <h3>Targeting Cookies</h3>
              <p>
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
              </p>

              <h2>How can you control cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager tool we provide on our website.
              </p>

              <p>
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, but your access to some functionality and areas of our website may be restricted.
              </p>

              <h2>How often will we update this Cookie Policy?</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>

              <h2>Where can you get further information?</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please email us at privacy@shyenasecurity.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CookiePolicy;
