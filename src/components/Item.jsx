import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Item = ({ img }) => {
  return (
    <div>
      <Card>
        <CardMedia component="img" height="200" image={img} alt="Item-Image" />
        <CardContent>
          <Typography gutterBottom>
            <b>Location: </b>Nairobi,Kenya
          </Typography>
          <Typography gutterBottom>
            <b>Address: </b>0*73767265
          </Typography>
          <Typography gutterBottom>
            <b>Duration: </b> 10 days
          </Typography>
          <Typography gutterBottom>
            In need of an airbnb to host a party from Monday to Friday. The house should have a minimum of 2 rooms.
            Please inbox for further info.
          </Typography>
          <Button variant="contained">Lend</Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default Item;
