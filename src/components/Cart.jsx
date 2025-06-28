import PropTypes from 'prop-types';

import ItemType from '../types/item';

import styles from './Cart.module.css';

// import './Cart.css';

function Cart({ cart }) {
  return (
    <div className={styles['cart-component']}>
      <h2>Your Cart</h2>
    </div>
  );
}

Cart.defaultProps = {
  cart: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
};

export default Cart;
