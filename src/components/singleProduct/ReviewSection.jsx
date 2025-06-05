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
    <div className="m-16 space-y-6 text-center">
      <h3 className="text-4xl font-bold font-gambetta">Reviews</h3>
      <ReviewBar reviews={reviews} />
      <div className="space-y-4 max-w-[1200px] mx-auto">
        {reviewsToShow.map((review) => (
          <SingleReview key={review.title} review={review} />
        ))}

        <div className="flex justify-center">
          <FilledButton
            className="flex items-center justify-center gap-3 px-6 py-3 w-fit"
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
