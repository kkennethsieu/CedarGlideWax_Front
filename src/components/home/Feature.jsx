function Feature({ img, title, description }) {
  return (
    <div className="flex flex-col items-center max-w-sm px-6 py-5 mx-auto text-center transition-shadow duration-300 border border-gray-300 rounded-lg shadow-sm hover:shadow-md sm:px-8 sm:py-6">
      <img
        src={img}
        alt={title}
        className="object-contain w-12 h-12 mb-4 sm:w-16 sm:h-16"
      />
      <h3 className="mb-2 text-lg font-semibold text-gray-900 font-gambetta sm:text-xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-700 font-chivo sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default Feature;
