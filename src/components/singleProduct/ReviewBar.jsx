import StarRating from "./StarRating";
import SingleReviewBar from "./SingleReviewBar";

function ReviewBar({ reviews }) {
  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Calculate rating counts for 1 to 5 stars (rounded down or up depending on your criteria)
  const ratingCounts = [1, 2, 3, 4, 5].map(
    (star) => reviews.filter((r) => Math.round(r.rating) === star).length
  );

  // Total reviews count (should equal reviews.length)
  const totalReviews = reviews.length;

  return (
    <div className="flex items-center justify-center gap-8">
      <div className="px-10 space-y-6 font-semibold border-r font-gambetta border-r-gray-300">
        <p className="text-2xl">{averageRating.toFixed(1)}</p>
        <StarRating value={averageRating} />
        <p className="text-xl">{totalReviews} Reviews</p>
      </div>
      <div className="w-[50%] space-y-1">
        {[5, 4, 3, 2, 1].map((star, index) => {
          const count = ratingCounts[star - 1];
          const percent = totalReviews === 0 ? 0 : (count / totalReviews) * 100;
          return (
            <SingleReviewBar
              key={star}
              percent={percent.toFixed(0)}
              totalReviews={count}
              rating={star.toFixed(1)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReviewBar;
