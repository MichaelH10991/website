import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
  const {skillName, level, additionalInfo} = props;
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#a9a7a7", color: "#fff" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div">
          {skillName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {level}
        </Typography>
        <Typography variant="body2">
          {additionalInfo}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        {/* Hover */}
      </CardActions>
    </Card>
  );
}