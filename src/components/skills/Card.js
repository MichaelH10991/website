import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { paragraph } from "../data";

export default function BasicCard(props) {
  const { skillName, level, additionalInfo } = props;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flip" : ""}`}>
      <Card
        sx={{
          backgroundColor: "#a9a7a7",
          color: "#fff",
        }}
        className="front"
        onClick={() => setFlipped(!flipped)}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div">
            {skillName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {level}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card
        sx={{
          backgroundColor: "#a9a7a7",
          color: "#fff",
        }}
        className="back"
        onClick={() => setFlipped(!flipped)}
      >
        <CardContent>
          <Typography variant="body2">{paragraph.big}</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
