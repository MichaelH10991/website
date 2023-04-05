import * as React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./skills.css";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const MyRating = ({ rating }) => {
  console.log(rating);
  return (
    <StyledRating
      name="customized-color"
      readOnly={true}
      defaultValue={rating}
      getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
      precision={0.5}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
    />
  );
};

export default MyRating;
