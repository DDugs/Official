import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-orange transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-cyber)]">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-sm">Last updated: December 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Interpretation and Definitions</h2>

            <h3 className="text-xl font-semibold text-foreground mb-2">Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
              The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong className="text-foreground">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong className="text-foreground">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Fl4gz0nF1r3.</li>
              <li><strong className="text-foreground">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
              <li><strong className="text-foreground">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li><strong className="text-foreground">Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong className="text-foreground">Service</strong> refers to the Website.</li>
              <li><strong className="text-foreground">Website</strong> refers to Fl4gz0nF1r3, accessible from https://flagzonfire.xyz</li>
              <li><strong className="text-foreground">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-semibold text-foreground mb-2">Types of Data Collected: Personal Data</h3>
            <p>
              While participating in our CTF events, we may ask you to provide us with certain personally identifiable information
              that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Email address</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Tracking Technologies and Cookies</h3>
            <p>We do not use any tracking technologies.</p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Use of Your Personal Data</h3>
            <p>
              The Company may use personal data solely for performing email verification on the CTF platform.
              We do not share your personal data with any third-party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Delete Your Personal Data</h2>
            <p>
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
              You may request deletion of your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Disclosure of Your Personal Data</h2>

            <h3 className="text-xl font-semibold text-foreground mb-2">Business Transactions</h3>
            <p>
              If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.
              We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Law Enforcement</h3>
            <p>
              Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law
              or in response to valid requests by public authorities (e.g. a court or a government agency).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet,
              or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your
              Personal Data, We cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Children&apos;s Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information
              from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with
              Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13
              without verification of parental consent, We take steps to remove that information from Our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Links to Other Websites</h2>
            <p>
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link,
              You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>
            <p className="mt-2">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to this Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mt-2">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>By email: <a href="mailto:flags0nfirectf@gmail.com" className="text-neon-orange hover:underline">flags0nfirectf@gmail.com</a></li>
            </ul>
          </section>

          <div className="border-t border-border pt-8 mt-8">
            <p className="text-xs text-center">
              © {new Date().getFullYear()} Flagz0nFire. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
