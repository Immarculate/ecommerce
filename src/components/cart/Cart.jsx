import React from 'react';
import Product from '../products/Product/Product';
import { Container, Typography, Button, Grid } from '@mui/material';
import CartItem from './cartItem/CartItem';
import { Link } from 'react-router-dom';

const cart = ({ cart, onEmptyCart, handleUpdateChartQTY,  }) => {
  const isEmpty = !cart.total_items;

  console.log(cart);
  const Item = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items?.map((lineItem) => (
            <Grid item xs={12} sm={4} key={lineItem.id}>
              <CartItem handleUpdateChartQTY={handleUpdateChartQTY}  lineItem={lineItem} />
            </Grid>
          ))}
        </Grid>
        <div>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
        </div>
        <div className="">
          <Button component={Link} to="/">
            Add to Cart
          </Button>
          <Button onClick={onEmptyCart}>Clear Cart</Button>
        </div>
        <div>
            <Button component={Link} to="/checkout">Buy</Button>
        </div>
      </>
    );
  };
  return (
    <Container className='mt-[90px] mb-[90px]'>
      <div />
      <Typography>Shopping List</Typography>
      {isEmpty ? (
        <Typography>
          <h1>Your cart is empty</h1>
          <div className="">
            <Button component={Link} to="/">
              Add to Cart
            </Button>
          </div>
        </Typography>
      ) : (
        <Item />
      )}
    </Container>
  );
};

export default cart;
