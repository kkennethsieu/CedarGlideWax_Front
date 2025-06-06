import ReviewBar from "./ReviewBar";
import SingleReview from "./SingleReview";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FilledButton from "../buttons/FilledButton";
import { useState } from "react";
import Loader from "../Loader";
import useReviews from "../../hooks/useReviews";

function ReviewSection() {
  const [showMore, setShowMore] = useState(false);

  const { isLoading, reviews } = useReviews();
  if (isLoading) return <Loader />;

  const reviewsToShow = showMore ? reviews : reviews.slice(0, 3);

  return (
    <div className="px-4 py-10 space-y-6 text-center sm:px-8 lg:px-16">
      <h3 className="text-3xl font-bold sm:text-4xl font-gambetta">Reviews</h3>

      {/* Review stats */}
      <div className="max-w-[800px] mx-auto">
        <ReviewBar reviews={reviews} />
      </div>

      {/* Review list */}
      <div className="space-y-6 max-w-[1200px] mx-auto">
        {reviewsToShow.map((review) => (
          <SingleReview key={review.title} review={review} />
        ))}

        <div className="flex justify-center">
          <FilledButton
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm w-fit sm:text-base"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less Reviews" : "See More Reviews"}
          </FilledButton>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
