import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const MultiDashboardCard = ({ bg, title, keys, values }) => {
  return (
    <Card
      variant="outlined"
      className="dashboard-card my-2"
      sx={{ backgroundColor: bg }}
    >
      <CardContent>
        <Typography variant="body1" component="div" sx={{ color: 'white', my: 1 }}>
          {title}
        </Typography>
        {keys.map((key, index) => (
          <Typography key={key} variant="h6" color="white">
            {`${key}: ${values[index]} akcse`}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default MultiDashboardCard;