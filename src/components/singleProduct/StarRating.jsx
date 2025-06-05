import { Rating } from "@mui/material";
function StarRating({ value }) {
  return (
    <Rating
      name="read-only"
      value={value}
      precision={0.5}
      readOnly
      sx={{
        color: "#006F7B",
        "& .MuiRating-iconEmpty": {
          color: "transparent",
        },
      }}
    />
  );
}

export default StarRating;
