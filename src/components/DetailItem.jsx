import './DetailItem.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ItemType from '../types/item';
import { itemImages } from '../assets/items/index';

function DetailItem({ items, addToCart }) {
  const { id } = useParams();
  const detailItem = items.find((item) => item.itemId === id);

  const addItemToCart = () => {
    addToCart(detailItem.itemId);
  };

  return (
    <div className="detail-item-component">
      {
        detailItem ? (
          <>
            <img
              className="detail-image"
              src={itemImages[detailItem.imageId]}
              alt={detailItem.title}
            />
            <h2>{detailItem.title}</h2>
            <div>
              $
              {detailItem.price.toFixed(2)}
            </div>
            <button type="button" onClick={addItemToCart}>
              Add to Cart
            </button>
          </>
        ) : <h2>Unknown Item</h2>
      }

    </div>
  );
}

DetailItem.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default DetailItem;
