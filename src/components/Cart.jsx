import PropTypes from 'prop-types';

import ItemType from '../types/item';

import styles from './Cart.module.css';
import CartRow from './CartRow';

// import './Cart.css';

function Cart({ cart, items }) {
  return (
    <div className={styles['cart-component']}>
      <h2>Your Cart</h2>
      {
        cart.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((cartItem) => (
                  <CartRow
                    key={cartItem.itemId}
                    cartItem={cartItem}
                    items={items}
                  />
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
};

export default Cart;
