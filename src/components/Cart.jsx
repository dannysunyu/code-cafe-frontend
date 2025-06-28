import PropTypes from 'prop-types';

import ItemType from '../types/item';

import styles from './Cart.module.css';
import CartRow from './CartRow';

// import './Cart.css';

function Cart({ cart, items, dispatch }) {
  const subTotal = cart.reduce((total, cartItem) => {
    const item = items.find((i) => i.itemId === cartItem.itemId);

    return total + cartItem.quantity * (item.salePrice || item.price);
  }, 0);

  return (
    <div className={styles['cart-component']}>
      <h2>Your Cart</h2>
      {
        cart.length === 0
          ? <div>Your cart is empty.</div> : (
            <>
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
                        dispatch={dispatch}
                      />
                    ))
                  }
                </tbody>
              </table>
              <div>
                Subtotal: $
                {subTotal.toFixed(2)}
              </div>
            </>
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
  dispatch: PropTypes.func.isRequired,
};

export default Cart;
