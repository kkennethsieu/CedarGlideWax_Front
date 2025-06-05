import { LinearProgress } from "@mui/material";

function SingleReviewBar({ percent, totalReviews, rating }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{
          height: 10,
          borderRadius: 5,
          flexGrow: 1,
          mr: 2,
          "& .MuiLinearProgress-bar": {
            borderRadius: 5,
          },
        }}
      />
      <div className="flex flex-col items-end text-sm text-gray-600">
        <span className="font-semibold">{rating}</span>
        <span>{totalReviews} Reviews</span>
      </div>
    </div>
  );
}

export default SingleReviewBar;
