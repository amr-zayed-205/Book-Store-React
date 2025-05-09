import { Link, useNavigate } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    toast.success("Login successful!");

    setTimeout(() => {
      setIsLoggedIn(true);
      navigate("/");
    }, 1000);

    setEmail("");
    setPassword("");
  };

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    
    <div className="form-wrapper">
      <ToastContainer />
      <div className="login-card">
        <h1 className="form-title">Login </h1>
        <h2> Enter your cardinatials</h2>
        <form onSubmit={formSubmitHandler} className="form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <div className="password">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            {showPassword ? (
              <i
                onClick={showPasswordHandler}
                className="bi bi-eye-slash-fill show-password-icon"
              ></i>
            ) : (
              <i
                onClick={showPasswordHandler}
                className="bi bi-eye-fill show-password-icon"
              ></i>
            )}
          </div>

          <button className="form-btn" type="submit">
            Login
          </button>
        </form>
        <div className="form-footer">
          Don't have an account?{" "}
          <Link to="/register" className="forms-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
