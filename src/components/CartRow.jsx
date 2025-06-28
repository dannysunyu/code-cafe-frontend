import PropTypes from 'prop-types';

import ItemType from '../types/item';

function CartRow({ cartItem, items }) {
  const item = items.find((i) => i.itemId === cartItem.itemId);

  return (
    <tr>
      <td>{item.title}</td>
      <td>{cartItem.quantity}</td>
      <td>
        $
        {(cartItem.quantity * (item.salePrice || item.price)).toFixed(2)}
      </td>
    </tr>
  );
}

CartRow.propTypes = {
  cartItem: PropTypes.shape({
    itemId: PropTypes.number.isRequired, quantity: PropTypes.number.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
};

export default CartRow;
