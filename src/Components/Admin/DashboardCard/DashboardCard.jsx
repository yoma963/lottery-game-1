import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DashboardCard = ({ title, data, bg }) => {
  return (
    <Card
      variant="outlined"
      className="dashboard-card my-2"
      sx={{backgroundColor: bg }}
    >
      <CardContent>
        <Typography variant="body1" component="div" sx={{ color: 'white', my: 1 }}>
          {title}
        </Typography>
        <Typography variant="h3" color="white">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
