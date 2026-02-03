export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600">
            <strong>Last Updated:</strong> February 2026
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-8 text-gray-700 leading-relaxed">
          This Privacy Policy explains how we collect, use, and protect your
          information when you visit <strong>JSAT Solutions</strong>.
        </p>

        {/* Content Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect limited personal information such as your name or
              email address if you voluntarily provide it. We may also collect
              non-personal usage data like browser type and pages visited.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              2. How We Use Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use collected information to operate, improve, and maintain the
              website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              3. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to improve user experience
              and analyze traffic. See our Cookies Policy for more details.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              4. Sharing of Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell or rent your personal information. Information may
              be shared only to comply with legal obligations or protect our
              rights.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              5. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect your information but cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              6. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to third-party sites. We are not
              responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not knowingly collect personal data from children under 16.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy at any time. Changes will be
              posted on this page.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              9. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, contact us at:{" "}
              <a
                href="mailto:hello@jsatsolutions.com"
                className="font-semibold text-orange-500 hover:text-orange-600 transition"
              >
                hello@jsatsolutions.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
