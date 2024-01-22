import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "./LoginPage.css"; 

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email) {
      toast.error("Please enter Email");
      return;
    }

    if (!loginData.password) {
      toast.error("Please enter Password");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmailCheck = emailRegex.test(loginData.email);
    setIsValidEmail(isValidEmailCheck);
    if (!isValidEmailCheck) {
      toast.error("Invalid Email");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
    const isValidPasswordCheck = passwordRegex.test(loginData.password);
    setIsValidPassword(isValidPasswordCheck);

    if (!isValidPasswordCheck) {
      toast.error("Invalid password");
      return;
    }

    let hashedPassword = CryptoJS.SHA256(loginData.password).toString(
      CryptoJS.enc.Hex
    );

    const formData = new FormData();
    formData.append("username", loginData.email);
    formData.append("password", hashedPassword);
    formData.append("grant_type", "password");

    const headers = {
      Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
    };

    try {
      const loginApiUrl = "https://apiv2stg.promilo.com/user/oauth/token";

      const response = await fetch(loginApiUrl, {
        method: "POST",
        body: formData,
        headers,
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.response.access_token);
        sessionStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        console.error("Login failed:", response.status, response.statusText);
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      toast.error("Login failed");
    }
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="LoginPage container min-vh-100 d-flex align-items-center justify-content-center flex-column ">
      <img
        src={logo}
        alt="logo"
        width={150}
        className="position-absolute top-0 start-1 mt-1"
      />
      <h3>Login</h3>
      <form
        className="border rounded p-4 w-60 h-50 bg-light"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${isValidEmail ? "" : "border-danger"}`}
            name="email"
            onChange={handleInputChange}
            value={loginData.email}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          name="password"
          onChange={handleInputChange}
          value={loginData.password}
          className={`form-control ${isValidPassword ? "" : "border-danger"}`}
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8 characters long, contain letters, capital
          letter, small letter, special char and numbers, and must not contain
          spaces, or emoji.
        </div>
        <div className="btnLogin mt-3 d-flex justify-content-center">
          <button className="btn btn-primary w-50">Login</button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default LoginPage;


