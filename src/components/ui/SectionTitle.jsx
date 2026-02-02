export const SectionTitle = ({
  title,
  subtitle,
  backgroundImage,
  sideImage,
  sideAlt = "",
}) => {
  // If a `sideImage` is provided, render a two-column layout with the image
  if (sideImage) {
    return (
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
            <div
              className="hidden md:block md:w-1/3 rounded-lg bg-center bg-cover"
              style={{ backgroundImage: `url(${sideImage})`, minHeight: 160 }}
              role="img"
              aria-label={sideAlt}
            />
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full ${backgroundImage ? "py-32 bg-cover bg-center bg-no-repeat relative" : ""}`}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      {backgroundImage && <div className="absolute inset-0 bg-white/60"></div>}
      <div
        className={
          backgroundImage
            ? "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            : "max-w-2xl"
        }
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
