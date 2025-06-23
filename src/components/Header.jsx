import CoffeeLogo from '../assets/images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={CoffeeLogo} alt="coffee logo" />
      <h1>Code Cafe</h1>
    </header>
  );
}

export default Header;
