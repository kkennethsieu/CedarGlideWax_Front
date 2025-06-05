import FaqItem from "./FaqItem";

const faqItems = [
  {
    question: "What’s the difference between each wax formula?",
    answer:
      "Mint Frost is for cold temps and icy days, Citrus Chill is great for warm, slushy conditions, and Pine Breeze is our all-mountain, all-season formula built for versatility.",
  },
  {
    question: "How do I apply CedarGlide Wax?",
    answer:
      "We recommend hot waxing for the best performance. Just clean your board, melt the wax evenly with an iron, let it cool, then scrape and brush. Quick rub-on methods work too for a fast refresh.",
  },
  {
    question: "How often should I wax my snowboard?",
    answer:
      "It depends on how often you ride, but a good rule is every 3–5 full days on the mountain. If your base looks dry or feels slow, it's time for a fresh coat.",
  },
  {
    question: "Is CedarGlide Wax eco-friendly?",
    answer:
      "Yes! All of our waxes are made with a biodegradable, non-toxic blend that’s safe for the mountain and your gear.",
  },
];

function Faq() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 my-16 sm:my-20 space-y-12">
      {/* Header (always on top) */}
      <header className="max-w-xl mx-auto space-y-4 text-center lg:text-left lg:mx-0">
        <p className="text-lg tracking-wide text-gray-700 font-chivo">
          Frequently Asked Questions
        </p>
        <h2 className="inline-block text-3xl font-bold tracking-wide text-gray-900 border-b-4 sm:text-4xl font-gambetta border-main drop-shadow-lg">
          Have Any Questions?
        </h2>
        <p className="max-w-xl mx-auto leading-relaxed tracking-wide text-gray-600 lg:mx-0 font-chivo">
          Got questions about wax types or snow conditions? Not sure which
          formula fits your riding style or the mountain you're hitting? Our
          rider support team is here to help you choose the perfect wax for your
          board and your next session.
        </p>
      </header>

      {/* Content layout: img next to header on small, next to faq on large */}
      <div className="flex flex-col-reverse items-center gap-12 sm:flex-col-reverse lg:flex-row lg:items-start lg:gap-16">
        {/* FAQ items */}
        <div className="flex-1 space-y-6">
          {faqItems.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>

        {/* Image */}
        <img
          className="w-full max-w-[450px] h-auto rounded-lg object-cover shadow-lg mx-auto sm:mx-0 lg:max-w-[500px]"
          src="../images/faqImg.jpg"
          alt="Snowboard waxing"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Faq;
