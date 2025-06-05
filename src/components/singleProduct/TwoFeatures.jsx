function TwoFeatures() {
  return (
    <section className="mx-auto my-24 w-full max-w-[1200px] px-4 sm:px-6 space-y-32">
      {/* Feature 1 */}
      <div className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row">
        <img
          src="/images/whyWax.png"
          alt="Why wax your snowboard"
          className="w-full md:max-w-[350px] max-w-[300px] lg:max-w-[400px] rounded-xl drop-shadow-lg"
        />
        <div className="max-w-2xl space-y-5 text-center lg:max-w-lg lg:text-left">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl font-gambetta">
            Why You Need to Wax Your Snowboard
          </h2>
          <p className="text-base leading-relaxed text-gray-700 sm:text-base font-chivo">
            Waxing your snowboard reduces friction between your base and the
            snow, giving you smoother glides, faster runs, and better control.
            It also protects your board from drying out and extends its
            lifespan.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="max-w-2xl space-y-5 text-center lg:max-w-lg lg:text-left">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl font-gambetta">
            Why Choose CedarGlide?
          </h2>
          <p className="text-base leading-relaxed text-gray-700 sm:text-base font-chivo">
            CedarGlide Wax is crafted for real mountain conditions, with
            temperature-specific formulas that maximize performance.
            Eco-friendly, rider-tested, and easy to apply—it’s wax that works as
            hard as you ride.
          </p>
        </div>
        <img
          src="/images/whyChoose.png"
          alt="Why choose CedarGlide"
          className="w-full md:max-w-[400px] max-w-[300px] rounded-xl drop-shadow-lg"
        />
      </div>
    </section>
  );
}

export default TwoFeatures;
