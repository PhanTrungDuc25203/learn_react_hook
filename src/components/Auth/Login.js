import { useState } from "react";
import "./Login.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    //validate
    //submit APIs
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="hello132@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" onClick={() => handleLogin()}>
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
            <p>
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                Go back to Homepage
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
