import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import loginImage from "../../assets/login.png";
import { API_URL } from "../../config/api";

import "./CSS/Login.css";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const { refreshUser } =
    useAuth();

  const [otp, setOtp] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    const storedEmail =
      sessionStorage.getItem(
        "otp_email"
      );

    if (!storedEmail) {
      navigate("/admin/login");
      return;
    }

    setEmail(storedEmail);
  }, [navigate]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/auth/verify-otp`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Invalid OTP"
        );
      }

      await refreshUser();

      sessionStorage.removeItem(
        "otp_email"
      );

      navigate(
        "/admin/dashboard",
        {
          replace: true,
        }
      );
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Verification failed"
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
            OTP VERIFICATION
          </span>

          <h1>
            Verify Login
          </h1>

          <p>
            Enter the 6-digit code
            sent to:
          </p>

          <div className="otp-email">
            {email}
          </div>

          <form
            onSubmit={
              handleSubmit
            }
          >
            <label>
              One-Time Password
            </label>

            <input
              type="text"
              required
              maxLength={6}
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                )
              }
              placeholder="Enter OTP"
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </button>
          </form>

          <button
            type="button"
            className="back-link"
            onClick={() =>
              navigate(
                "/admin/login"
              )
            }
          >
            ← Change Email
          </button>
        </div>
      </section>
    </main>
  );
};

export default VerifyOtp;