import Header from './components/Header';
import Home from './components/Home';
import { items } from './assets/items/index';

function App() {
  return (
    <div>
      <Header />
      <Home items={items} />
    </div>
  );
}

export default App;
