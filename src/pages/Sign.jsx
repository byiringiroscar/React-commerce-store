import '../css/form.css';

const Sign = () => (
  <div className="form-container">
    <h3>Sign In</h3>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="form-btn" type="submit">Sign In</button>
    </form>
  </div>
);

export default Sign;
