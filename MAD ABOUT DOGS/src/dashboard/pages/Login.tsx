import { useState } from "react";
import { useNavigate } from "react-router-dom";

import loginImage from "../../assets/login.png";

import "./CSS/Login.css";

import { API_URL } from "../../config/api";

console.log(API_URL);

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to send OTP"
        );
      }

      sessionStorage.setItem(
        "otp_email",
        email
      );

      navigate(
        "/admin/verify-otp"
      );
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-image">
        <img
          src={loginImage}
          alt="Mad About Dogs"
        />
      </section>

      <section className="login-panel">
        <div className="login-card">
          <span className="login-tag">
            ADMIN PORTAL
          </span>

          <h1>
            Welcome Back
          </h1>

          <p>
            Sign in to access the
            Mad About Dogs admin
            dashboard.
          </p>

          <form
            onSubmit={
              handleSubmit
            }
          >
            <label>
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="you@example.com"
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Sending OTP..."
                : "Send OTP"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;