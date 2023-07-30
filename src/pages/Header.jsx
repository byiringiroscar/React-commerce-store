import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import close from '../assets/close.png';

const Header = ({ isMenuActive, setIsMenuActive }) => {
  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header className={isMenuActive ? 'active' : ''}>
      <Link to="/" className="logo">Laptops</Link>
      <nav>
        <ul>
          <Link to="/" className="single-nav"><li>Home</li></Link>
          <Link to="/my-reservation" className="single-nav"><li>Reservation</li></Link>
        </ul>
      </nav>
      <button
        type="button"
        className="close"
        onClick={closeMenu}
      >
        <img
          src={close}
          alt="close"
        />
      </button>

    </header>
  );
};

Header.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  setIsMenuActive: PropTypes.func.isRequired,
};

export default Header;