import IndivReviewBanner from "./IndivReviewBanner";

function ReviewBanner() {
  return (
    <div className="mx-auto my-16 max-w-full px-4 sm:max-w-[720px] md:max-w-[900px] lg:max-w-[1200px]">
      <h3 className="pb-6 mx-auto text-2xl font-bold text-center text-gray-900 border-b-4 sm:text-3xl font-gambetta w-fit border-main">
        What Our Boarders Say
      </h3>
      <div className="p-4 sm:p-10">
        <IndivReviewBanner />
      </div>
    </div>
  );
}

export default ReviewBanner;
