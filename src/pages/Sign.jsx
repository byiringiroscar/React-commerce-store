import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/user/userSlice';
import '../css/form.css';

const Sign = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .then((data) => {
        // Check if the API response has an 'error' property
        if (data.payload.status.code === 404) {
          toast.error(data.payload.status.message); // Display the error message from the API
        } else {
          navigate('/');
          toast.success(data.payload.status.message);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="form-container">
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-btn" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Sign;
