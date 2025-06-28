import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Details from './components/Details';
import DetailItem from './components/DetailItem';
import { cartReducer, CartTypes, initialCartState } from './reducers/cartReducer';
import Cart from './components/Cart';

const BASE_PATH = '/code-cafe-frontend';

const API_ROOT = 'https://hamster-finer-notably.ngrok-free.app';

function App() {
  const [items, setItems] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (itemId) => dispatch({ type: CartTypes.ADD, itemId });

  useEffect(() => {
    async function fetchItems() {
      try {
        const result = await axios.get(`${API_ROOT}/api/items`, {
          headers: {
            'ngrok-skip-browser-warning': '1',
          },
        });
        setItems(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchItems();
  }, []);

  return (
    <Router basename={BASE_PATH}>
      <Header cart={cart} />
      {items.length === 0 ? <div>Loading...</div> : (
        <Routes>
          <Route path="/details" element={<Details items={items} />}>
            <Route path=":id" element={<DetailItem items={items} addToCart={addToCart} />} />
            <Route index element={<div>No Item Selected</div>} />
          </Route>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/cart" element={<Cart cart={cart} items={items} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}

    </Router>
  );
}

export default App;
