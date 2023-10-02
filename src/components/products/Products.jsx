import React from 'react'
import { Grid } from '@mui/material';
import Product from './Product/Product';
import './Products.css';
import Hero from '../Hero';
import Contact from '../Contact';
import About from '../About';

function Products({ products, onAddToCart }) {

            return (
                <main className="main_">
                 <Hero className=''/>
                <div className='mb-10'>
                    <h1 className='ml-10 text-4xl font-bold xs:ml-2' >New Arrivals</h1>
                </div>
                  <Grid container justify="center" spacing={4} className='mb-10'>
                    {products.map((product) => (
                      <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} >
                        <Product className='prd_bx' product={product} onAddToCart={onAddToCart} />
                      </Grid>
                    ))}
                  </Grid>
                  <About />
                  <Contact/>
                </main>
              );
            };

export default Products

