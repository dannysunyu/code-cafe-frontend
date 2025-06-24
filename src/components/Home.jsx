import './Home.css';
import PropTypes from 'prop-types';

import { itemImages } from '../assets/items/index';
import ItemType from '../types/item';

import Thumbnail from './Thumbnail';

function Home({ items }) {
  return (
    <div className="home-component">
      {
        items.map((item) => (
          <Thumbnail
            key={item.itemId}
            image={itemImages[item.imageId]}
            title={item.title}
          />
        ))
      }
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Home;
