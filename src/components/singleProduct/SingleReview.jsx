import { Avatar } from "@mui/material";
import StarRating from "./StarRating";
import { getDaysAgo } from "../../helper/getDaysAgo";

function SingleReview({ review }) {
  const { img, name, rating, title, description, created_at } = review;
  const daysAgo = getDaysAgo(created_at);
  return (
    <div className="p-6 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Top row: Avatar + Name/Date + Rating */}
      <div className="flex items-start justify-between">
        {/* Left side: Avatar and reviewer info */}
        <div className="flex items-center gap-4">
          <Avatar src={img} alt="Reviewer" sx={{ width: 56, height: 56 }} />
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{daysAgo}</p>
          </div>
        </div>

        {/* Right side: Rating */}
        <div className="text-right">
          <p className="text-lg font-bold text-yellow-500">
            {rating.toFixed(1)}
          </p>
          <StarRating value={rating} />
        </div>
      </div>

      {/* Title + Review text */}
      <div className="space-y-2">
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-sm leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default SingleReview;
