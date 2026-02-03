export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-gray-600">
            <strong>Effective Date:</strong> February 2026
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-8 text-gray-700 leading-relaxed">
          Welcome to <strong>JSAT Solutions</strong> ("Service"). By accessing
          or using this website, you agree to be bound by these Terms of
          Service.
        </p>

        {/* Content Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using this Service, you confirm that you have read, understood,
              and agree to these Terms. If you do not agree, you must not use
              the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              2. Use of the Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use the Service only for lawful purposes and not to
              misuse, disrupt, or attempt to gain unauthorized access to the
              Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content, code, design, and materials on this website are owned
              by or licensed to us and are protected by intellectual property
              laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              4. Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Service is provided "as is" and "as available" without
              warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for any damages resulting from your use of or
              inability to use the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              6. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may suspend or terminate access to the Service at any time
              without notice if these Terms are violated.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              7. Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms at any time. Continued use of the
              Service constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              8. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of Nigeria.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              9. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms, contact us at:{" "}
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
