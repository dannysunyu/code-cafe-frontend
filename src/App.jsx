import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Details from './components/Details';
import DetailItem from './components/DetailItem';

const BASE_PATH = '/code-cafe-frontend';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const result = await axios.get('/api/items', {
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
      <Header />
      <Routes>
        <Route path="/details" element={<Details items={items} />}>
          <Route path=":id" element={<DetailItem items={items} />} />
          <Route index element={<div>No Item Selected</div>} />
        </Route>
        <Route path="/" element={<Home items={items} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
