import * as React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const MyRating = () => {
  return (
    <StyledRating
      name="customized-color"
      readOnly={true}
      defaultValue={2}
      getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
      precision={0.5}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
    />
  );
};

export default MyRating;
