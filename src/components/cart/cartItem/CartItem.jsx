import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@mui/material';

const cartItem = ({ lineItem, handleUpdateChartQTY,  }) => {
  return (
    <Card className='classes_root'>
      <CardMedia>
        <img className='img__' src={lineItem.image.url} alt={lineItem.name} />
      </CardMedia>
      <CardContent>
        <div className=''>
          <Typography gutterBottom variant="h5" component="h2">
            {lineItem.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {lineItem.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className=''>
        <div aria-label="Add to Cart" >
          <Button onClick={() => handleUpdateChartQTY(lineItem.id, lineItem.quantity - 1)}>-</Button>
          <Button>{lineItem.quantity}</Button>
          <Button onClick={() => handleUpdateChartQTY(lineItem.id, lineItem.quantity + 1)}>+</Button>
        </div>
      </CardActions>
    </Card>
  )
}

export default cartItem