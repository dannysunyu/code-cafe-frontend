import PropTypes from 'prop-types';

import ItemType from '../types/item';
import { CartTypes } from '../reducers/cartReducer';

function CartRow({ cartItem, items, dispatch }) {
  const item = items.find((i) => i.itemId === cartItem.itemId);

  const removeItemFromCart = () => {
    dispatch({ type: CartTypes.REMOVE, itemId: item.itemId });
  };

  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{item.title}</td>
      <td>
        $
        {(cartItem.quantity * (item.salePrice ?? item.price)).toFixed(2)}
      </td>
      <td>
        <button type="button" onClick={removeItemFromCart}>X</button>
      </td>
    </tr>
  );
}

CartRow.propTypes = {
  cartItem: PropTypes.shape({
    itemId: PropTypes.number.isRequired, quantity: PropTypes.number.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CartRow;
