import { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Best Cleaners Savannah",
  description: "Best Cleaners & Laundry privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        breadcrumb={[{ label: "Privacy Policy", href: "/privacy-policy/" }]}
      />

      <Section bg="white">
        <Container size="narrow">
          <div className="prose max-w-none">
            <p className="text-muted mb-8">Last updated: January 2026</p>

            <h2>Information We Collect</h2>
            <p>
              Best Cleaners & Laundry (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information you provide 
              directly to us when you:
            </p>
            <ul>
              <li>Use our services or place orders</li>
              <li>Create an account or customer profile</li>
              <li>Contact us via phone, email, or contact forms</li>
              <li>Sign up for our communications</li>
              <li>Apply for employment</li>
            </ul>

            <p>This information may include:</p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Service preferences and order history</li>
              <li>Communications you send to us</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Communicate with you about services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With your consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from 
              loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. 
              However, no method of transmission over the Internet or electronic storage is 
              completely secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar technologies to improve your experience, 
              analyze site traffic, and understand where our visitors come from. You can control 
              cookies through your browser settings.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13, and we do not knowingly 
              collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our practices, please contact us:
            </p>
            <ul>
              <li>By phone: (912) 232-1171</li>
              <li>By email: privacy@bestcleanerssavannah.com</li>
              <li>In person at either of our locations</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
