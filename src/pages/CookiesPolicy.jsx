export default function CookiesPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Cookies Policy
          </h1>
          <p className="mt-4 text-gray-600">
            <strong>Last Updated:</strong> February 2026
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-8 text-gray-700 leading-relaxed">
          This Cookies Policy explains how <strong>JSAT Solutions</strong> uses
          cookies.
        </p>

        {/* Content Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files stored on your device to help
              websites function properly and improve user experience.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              2. How We Use Cookies
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We use cookies to:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Ensure the website functions correctly</li>
              <li>Analyze site usage and performance</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              3. Managing Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can control or disable cookies through your browser settings.
              Disabling cookies may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              4. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Cookies Policy may be updated periodically. Any changes will
              be posted on this page.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              5. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Cookies Policy, contact us at:{" "}
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
