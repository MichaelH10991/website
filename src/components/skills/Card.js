import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { paragraph, skills } from "../data";
import { Link } from "@mui/material";

const style = {
  backgroundColor: "#b393d3",
  color: "#fff",
};

export default function BasicCard(props) {
  const { skillName, level, additionalInfo, links } = props;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flip" : ""}`}>
      <Card sx={style} className="front" onClick={() => setFlipped(!flipped)}>
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
        {/* <CardActions>foo</CardActions> */}
      </Card>
      <Card sx={style} className="back" onClick={() => setFlipped(!flipped)}>
        <CardContent>
          <Typography variant="subtitle1">Code</Typography>
          <Typography variant="body2">
            <ul style={{ textAlign: "left" }}>
              {links.map((link) => (
                <li>
                  <Link>{link}</Link>
                </li>
              ))}
            </ul>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
