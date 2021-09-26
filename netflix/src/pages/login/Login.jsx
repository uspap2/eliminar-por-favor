//Lo manda a llamar Register.jsx
//import "./login.scss";
import React from "react"
import styled from "styled-components";

export default function Login() {
  return (
    <ConLogin>
      <Top>
        <Wrapper>
          <Logo
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </Wrapper>
      </Top>
      <Container>
        <Form>
          <h1>Sign In</h1>
          <Input type="email" placeholder="Email or phone number" />
          <Input type="password" placeholder="Password" />
          <Button className="loginButton">Sign In</Button>
          <Span>
            New to Netflix? <b>Sign up now.</b>
          </Span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </Form>
      </Container>
    </ConLogin>
  );
}

const ConLogin = styled.div`
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

const Form = styled.form`
    width: 300px;
      height: 300px;
      padding: 30px;
      border-radius: 5px;
      background-color: var(--main-color);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
`;

const Input = styled.input`
     height: 40px;
        border-radius: 5px;
        background-color: gray;
        color: white;
        padding-left: 10px;

        &::placeholder {
          color: lightgray;
        }
`;

const Button = styled.button`
    height: 40px;
    border-radius: 5px;
    background-color: red;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`;



const Span = styled.span`
 color: lightgray;
        b {
          color: white;
        }
`;
