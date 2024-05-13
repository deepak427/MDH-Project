import { useState } from "react";
import "./SignUp.css";
import { signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = ({ isLogin, setIsLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [gender, setGender] = useState("Male");
  const [category, setCategory] = useState("General");
  const [DOB, setDOB] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setPermanentAddress(permanentAddress + "\n");
    }
  };

  const handleEnterAddress = (e) => {
    if (e.key === "Enter") {
      setAddress(address + "\n");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password && !confirmPassword) {
      alert("Enter email and password");
      return;
    }

    dispatch(
      signup(
        {
          name,
          email,
          fatherName,
          motherName,
          address,
          gender,
          category,
          DOB,
        },password,
        navigate
      )
    );
  };

  return (
    <>
      <h1>Sign up</h1>
      <p>
        {" "}
        Find a job made for youFind a job madeFind a job made for youFind a job
        madeFind a job made for youFind a job madee
      </p>
      <form onSubmit={handleSubmit}>
        <div className="info-div">
          <label htmlFor="name">
            <h4>Name</h4>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="info-div">
          <label htmlFor="password">
            <h4>Password</h4>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <label htmlFor="confirm-password">
            <h4>Confirm Password</h4>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="info-div">
          <label htmlFor="father-name">
            <h4>Father's name</h4>
            <input
              type="name"
              id="father-name"
              value={fatherName}
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
            />
          </label>
          <label htmlFor="mother-name">
            <h4>Mother's name</h4>
            <input
              type="name"
              id="mother-name"
              value={motherName}
              onChange={(e) => {
                setMotherName(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="info-div">
          <label htmlFor="Address-for-Correspondence">
            <h4>Address for Correspondence</h4>
            <textarea
              id="Address-for-Correspondence"
              cols="20"
              rows="5"
              value={address}
              onKeyPress={handleEnterAddress}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
          </label>
          <label htmlFor="permanent-address">
            <h4>Permanent address</h4>
            <textarea
              id="permanent-address"
              cols="20"
              rows="5"
              value={permanentAddress}
              onKeyPress={handleEnter}
              onChange={(e) => {
                setPermanentAddress(e.target.value);
              }}
            ></textarea>
          </label>
        </div>
        <div className="info-div">
          <label htmlFor="gender">
            <h4>Gender</h4>
            <select
              name="gender"
              id="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>
          <label htmlFor="category">
            <h4>Category</h4>
            <select
              name="category"
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>General</option>
              <option>SC</option>
              <option>ST</option>
            </select>
          </label>
          <label htmlFor="date">
            <h4>Date of birth</h4>
            <input
              type="date"
              id="date"
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
          </label>
        </div>
        <button type="submit" className="login-btn">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <button
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          type="button"
          className="switch-btn"
        >
          Login
        </button>
      </p>
    </>
  );
};

export default SignUp;
