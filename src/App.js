import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';
import Navbar from './components/Navbar/Navbar';
import { commerce } from './libarary/commerce';
import Hero from './components/Hero';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    //  console.log(data);
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    console.log(item);
    setCart(item);
  };

  const onEmptyCart = async () => {
    const cart = await commerce.cart.empty();
    setCart(cart);
  };
  
  const handleUpdateChartQTY = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, quantity );
    setCart(cart); 
  }
  // const handleRemoveChartQTY = async (productId, quantity) => {
  //   const { cart } = await commerce.cart.remove(productId, { quantity });
  //   setCart(cart);
  // }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} handleUpdateChartQTY={handleUpdateChartQTY}  onEmptyCart={onEmptyCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
