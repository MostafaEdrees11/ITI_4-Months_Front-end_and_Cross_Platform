import Rating from "@mui/material/Rating";
import { useState } from "react";
import Typography from "@mui/material/Typography";

export function MUIRating() {
  const [rating, setRating] = useState(0.5);
  const handleChange = (e, value) => {
    if (value != -1) setRating(value);
  };
  return (
    <>
      <Rating
        name="half-rating"
        defaultValue={0.5}
        precision={0.5}
        onChangeActive={handleChange}
      />
      <Typography variant="h4" gutterBottom color="success">
        {rating}
      </Typography>
      <hr />
    </>
  );
}
