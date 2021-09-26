import React from "react"
import { useRef } from "react";
import { useState } from "react";
// import "./register.scss";
import styled from "styled-components";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <ConRegister>
      <Top>
        <Wrapper>
        <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <LoginButton>Sign In</LoginButton>
        </Wrapper>
      </Top>

      <Container>
        <H1>Unlimited movies, TV shows, and more.</H1>
        <H2>Watch anywhere. Cancel anytime.</H2>
        <P>
          Ready to watch? Enter your email to create or restart your membership.
        </P>
        {!email ? (
          <Form1>
            <Input type="email" placeholder="email address" ref={emailRef} />
            <RegisterButton onClick={handleStart}>
            Empezar
            </RegisterButton>
          </Form1>
        ) : (
          <Form2>
            <Input type="password" placeholder="password" ref={passwordRef} />
            <RegisterButton onClick={handleFinish}>
              Enviar
            </RegisterButton>
          </Form2>
        )}
      </Container>
    </ConRegister>
  );
}


const ConRegister = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      ),
      url("http://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg");
    background-size: cover;
    position: relative;
`;

const Top = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 40px;
`;

const LoginButton = styled.button`
    background-color: red;
        border: none;
        color: white;
        border-radius: 5px;
        padding: 5px 15px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`;

const H1= styled.h1`
    font-size: 50px;
`;

const H2= styled.h2`
    margin: 20px;
`;

const P = styled.p`
    font-size: 20px;
`;

const Form1 = styled.div`
      width: 50%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      height: 50px;
      border-radius: 5px;
`;

const Form2 = styled.form`
      width: 50%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      height: 50px;
      border-radius: 5px;
`;

const Input = styled.input`
      flex: 9;
          height: 100%;
          border: none;
          padding: 0 10px;
`;



const RegisterButton = styled.button`
    flex: 3;
          height: 100%;
          background-color: red;
          border: none;
          color: white;
          font-size: 22px;
          cursor: pointer;
`;

