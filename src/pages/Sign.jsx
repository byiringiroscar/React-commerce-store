import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../redux/user/userSlice';
import '../css/form.css';

const Sign = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .then((result) => {
        if (result.payload.status.code === 200) {
          // Handle successful login
          toast.success(result.payload.status.message);
        } else {
          // Handle other status codes or error cases, if needed
          console.log(result);
          toast.error('Login failed. Please try again.');
        }
      })
      .catch((error) => {
        // If the promise rejects, it means the login failed
        console.log(error);
        toast.error('Login failed---. Please try again.');
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
