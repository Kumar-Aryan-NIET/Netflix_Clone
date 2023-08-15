import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../component/BackgroundImage";
import Header from "../component/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firbase-config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    console.log(formValue);
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      console.log(currentUser);
      navigate("/");
    }
  });

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1> Unlimited movies, TV shows and more </h1>
            <h4>Watch anywhere .Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart memebership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValue.email}
              onChange={(e) => {
                setformValue({ ...formValue, [e.target.name]: e.target.value });
              }}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValue.password}
                onChange={(e) => {
                  setformValue({
                    ...formValue,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            )}
            {!showPassword && (
              <button onClick={() => setshowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    // position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0; 
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body{
      gap: 1rem;
      .text{
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1{
          padding: 0 25rem;
        }
      }
      .form{
        display: grid;
        grid-template-columns: ${(showPassword) =>
          showPassword ? "1fr 1fr" : "2fr:1fr"};
      width: 60%;
      input{
        color: black;
        border: none;
        padding: 1.5rem;
        cursor: pointer;
        border-radius:bolder;
        font-size: 1.05rem;
      }
      button{
        padding: 0.5rem 1rem;
    color: white;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    font-weight: bolder;
    font-size: 1.05 rem;
      }
      }
      button{
        padding: 0.5rem 1rem;
    color: white;
    background-color: #e50914;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: bolder;
    font-size: 1.05 rem;
      }
  }
`;

export default SignUp;
