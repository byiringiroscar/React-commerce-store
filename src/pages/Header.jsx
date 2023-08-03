import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import close from '../assets/close.png';

const Header = ({ isMenuActive, setIsMenuActive }) => {
  const navigate = useNavigate();
  const closeMenu = () => {
    setIsMenuActive(false);
  };
  const isLoggedIn = !!localStorage.getItem('Authorization');

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/logout', {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      });

      if (response.ok) {
        localStorage.removeItem('Authorization');
        toast.success('Logged out successfully');
        navigate('/sign');
      } else {
        toast.success('Failed to logout');
      }
    } catch (error) {
      toast.error('Logout error:', error);
    }
  };

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
            <button type="button" onClick={handleLogout}>Sign out</button>
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
