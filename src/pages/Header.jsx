import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import close from '../assets/close.png';

const Header = ({ isMenuActive, setIsMenuActive }) => {
  const closeMenu = () => {
    setIsMenuActive(false);
  };
  const isLoggedIn = !!localStorage.getItem('Authorization');

  return (
    <header className={isMenuActive ? 'active' : ''}>
      <Link to="/" className="logo">Laptops</Link>
      <nav>
        <ul>
          <Link to="/" className="single-nav"><li>Home</li></Link>
          <Link to="/my-reservation" className="single-nav"><li>Reservation</li></Link>
          {!isLoggedIn ? (
            <>
              <Link to="/sign" className="single-nav"><li>Signin</li></Link>
              <Link to="/signup" className="single-nav"><li>Signup</li></Link>
            </>
          ) : (
            <li>Sign out</li>
          )}
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
