//import "./navbar.scss";
import React from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../authContext/AuthContext";
// import { logout } from "../../authContext/AuthActions";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    //<div className={isScrolled ? "navbar scrolled" : "navbar"}>
    <Cnavbar>

      <Container>
        <Left>
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link"> 
              <Span>Homepage</Span>
          </Link>
          <Link to="/series" className="link">
            <Span>Series</Span>
          </Link>
          <Link to="/movies" className="link">
            <Span>Movies</Span>
          </Link>
          <Span>New and Popular</Span>
          <Span>My List</Span>
        </Left>
        <Right>
          <Icon>
              <Search />
          </Icon>
          <Span>KID</Span>
          {/*<Icon>
              <Notifications />
          </Icon>
           <<Notifications className="icon" />*/}
          <Img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
             {/* <div>
              <Icon>
                  <ArrowDropDown  />
              </Icon>
              <Options>
                <span>Settings</span>
                <span>Logout</span>
              </Options>
          </div> */}
        </Right>
      </Container>
    </Cnavbar>
  );
};

const Cnavbar = styled.div`
  width: 100%;
  color: white;
  font-size: 14px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);

  /* &.scrolled {
    background-color: var(--main-color);
  } */
`;
const Container = styled.div`
  padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`;

const Left = styled.div`
  /* width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between; */
  display: flex;
  align-items: center;
`;

const Img  = styled.img`
  width: auto;
  height: 30px;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
`;

const Span  = styled.span`
    margin: 20px;
  cursor: pointer;
`;


const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(Search)`
margin: 0px 15px;
  cursor: pointer;
`;

const Options = styled.div`
   display: none;
    background-color: var(--main-color);
    border-radius: 5px;
  
    &:hover {  
      display: flex;
      flex-direction: column;
      position: absolute;
    }
`;



export default Navbar;