import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/user/userSlice';
import '../css/form.css';

const Sign = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
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
