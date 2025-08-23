import "./Login.scss";
import { FaUser, FaLock } from "react-icons/fa";

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="hello132@gmail.com" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
