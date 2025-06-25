import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';

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
    <div>
      <Header />
      <Home items={items} />
    </div>
  );
}

export default App;
