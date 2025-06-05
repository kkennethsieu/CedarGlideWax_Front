function HowToUseItem({ item }) {
  const { img, title, description } = item;
  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-4 text-center">
      <img
        className="w-full max-w-xs transition-transform duration-300 rounded-lg drop-shadow-lg hover:scale-105"
        src={img}
        alt={title}
      />
      <p className="text-2xl font-semibold text-gray-900 sm:text-3xl font-gambetta">
        {title}
      </p>
      <p className="w-full h-[200px] mx-auto text-base leading-relaxed text-gray-700 sm:w-4/5 md:w-3/5">
        {description}
      </p>
    </div>
  );
}

export default HowToUseItem;
