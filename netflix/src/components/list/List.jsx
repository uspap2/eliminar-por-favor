// Lo manda a llamar: Home
import React from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
//import "./list.scss";
import styled from "styled-components";

export default function List({list}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <ConList>
      <ListTitle>{list.title}</ListTitle>
      <Wrapper>
        <SliderArrowLeft>
            <ArrowBackIosOutlined
              onClick={() => handleClick("left")}
              style={{ display: !isMoved && "none" }}
            />
        </SliderArrowLeft>
        <Container ref={listRef}>
          {list.content.map((item, i) => (
              <ListItem index={i} item={item} />
            ))}
        </Container>
        <SliderArrowRight>
          <ArrowForwardIosOutlined
            onClick={() => handleClick("right")}
          />
        </SliderArrowRight>
      </Wrapper>
    </ConList> 
  );
}

const ConList = styled.div`
    width: 100%;
  margin-top: 10px;
`;

const ListTitle = styled.span`
      color: white;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
`;

const Wrapper = styled.div`
    position: relative;
`;

const Container = styled.div`
    margin-left: 50px;
    display: flex;
    margin-top: 10px;
    width: max-content;
    transform: translateX(0px);//Mover a la derecha
    transition: all 1s ease;  //efecto de transicion
`;

const SliderArrowLeft = styled.div`
     width: 50px;
      height: 100%;
      background-color: rgb(22, 22, 22, 0.5);
      color: white;
      position: absolute;
      z-index: 99;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
      left: 0;
      
`;

const SliderArrowRight = styled.div`
    width: 50px;
    height: 100%;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    right: 0;
`;

