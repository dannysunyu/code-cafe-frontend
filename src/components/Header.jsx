import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CoffeeLogo from '../assets/images/logo.svg';
import CartIcon from '../assets/images/cart.svg';
import './Header.css';

function Header({ cart }) {
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="coffee logo" />
        <h1>Code Cafe</h1>
      </Link>
      <div className="menu">
        <Link to="#todo">
          <img src={CartIcon} alt="Cart" />
          <div className="badge">{cartQuantity}</div>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default Header;
