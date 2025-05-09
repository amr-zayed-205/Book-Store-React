import { Link, useNavigate } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // استخدام useNavigate

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (username.trim() === "") {
      return toast.error("Username is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    // إضافة عملية التسجيل هنا، مثل إرسال البيانات إلى الخادم

    toast.success("Registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 1000);

    setEmail("");
    setPassword("");
    setUsername("");
  };

  //Show Password Handler
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <div className="login-card">
        <h1 className="form-title">Create new account</h1>
        <form onSubmit={formSubmitHandler} className="form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
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
            Register
          </button>
        </form>
        <div className="form-footer">
          Already have an account?{" "}
          <Link to="/Login" className="forms-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
