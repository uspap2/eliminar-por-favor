// lo manda a llamar list
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PlayArrow,
  Add, 
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  
console.log(`en lisitem el index = ${index} item= ${item}   `)
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDUwN2RjZTBmNDY3MTg3NDM5ZmRlMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzI1Nzk4MDYsImV4cCI6MTYzMzAxMTgwNn0.8-uP2Dfo_NZrujKdY5ygQS9KnskY9MjlwUWJJejba2M",
            // "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }); 
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    }; // Fin de getMovie

    getMovie();
  }, [item]); // FIN de useEffect


  return (
      <Link to={{ pathname: "/watch", movie: movie }}>
        <ContListItem
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Img
            src={movie.img}
                    alt=""
          />
          {isHovered && (
            <div>
            <Video src={movie.trailer} autoPlay={true} loop />
              <ItemInfo>
                <Icons>
                  <Icon>
                  <PlayArrow />
                  </Icon>
                  
                  <Icon>
                      <Add  />
                  </Icon>
                  
                  <Icon>
                  <ThumbUpAltOutlined  />
                  </Icon>
                
                  <Icon>
                  <ThumbDownOutlined />
                  </Icon>
                  
                </Icons> 
                <ItemInfoTop>
                  <span>{movie.duration}</span>
                  <Limit>{movie.limit}</Limit>
                  <span>{movie.year}</span>
                </ItemInfoTop>
                <Desc>
                {movie.desc}
                </Desc>
                <Genre>{movie.genre}</Genre>
              </ItemInfo> 
            </div>
          )}
        </ContListItem>
      </Link>  
  );
}

const ContListItem = styled.div`
  width: 225px;
  height: 120px;
  background-color: var(--main-color); 
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  &:hover {
    width: 325px;
    height: 300px;
    position: absolute;
    top: -150px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    border-radius: 5px;
  }  
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; //redimensionarse para ajustarse a su contenedor
`;

const Video = styled.video`
   width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`;


const Icons = styled.div`
        display: flex;
        margin-bottom: 10px; 
`;

const Icon = styled.div`
     border: 2px solid white;
          padding: 5px;
          border-radius: 50%;
          margin-right: 10px;
          font-size: 16px;
`;

const ItemInfoTop = styled.div`
   display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: gray;
`;

const Limit = styled.span`
  border: 1px solid gray;
           padding: 1px 3px;
           margin: 0 10px;
`;

const Desc = styled.div`
  font-size: 13px;
        margin-bottom: 10px;
`;

const Genre = styled.div`
  font-size: 14px;
        color: lightgray; 
`;
