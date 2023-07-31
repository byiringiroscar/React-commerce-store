const Signup = () => (
  <div className="form-container">
    <h3>Sign Up</h3>
    <form>
      <input type="text" placeholder="Fullname" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button className="form-btn" type="submit">Sign Up</button>
    </form>
  </div>
);

export default Signup;
