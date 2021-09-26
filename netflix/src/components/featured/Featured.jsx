//Lo manda a llamar  home

import React, { useEffect, useState } from "react" ;
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
//import "./featured.scss";
import styled from "styled-components";
import axios from "axios";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDUwN2RjZTBmNDY3MTg3NDM5ZmRlMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzI1Nzk4MDYsImV4cCI6MTYzMzAxMTgwNn0.8-uP2Dfo_NZrujKdY5ygQS9KnskY9MjlwUWJJejba2M",
            //  "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);

  return (
    <ConFeatured>
      {type && (
        <Category> 
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
           
          </select>
        </Category>
      )}
      <Img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <Info>
        <ImgInfo
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <DescInfo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </DescInfo>
        <Buttons>
          <ButtonPlay>
            <PlayArrow />
            <Span>Play</Span>
          </ButtonPlay>
          <ButtonMore>
            <InfoOutlined />
            <Span>Info</Span>
          </ButtonMore>
        </Buttons>
      </Info>
    </ConFeatured>
  );
}

const ConFeatured = styled.div`
  height: 90vh;
  position: relative;
`;

const Category = styled.div`
  position: absolute;
  top: 80px;
  left: 50px;
  font-size: 30px;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center; 

      select {
        cursor: pointer;
        background-color: var(--main-color);
        border: 1px solid white;
        color: gray;
        margin-left: 20px;
        padding: 5px;
      }
`;


const Img = styled.img`
     width: 100%;
     height: 100%;
     object-fit: cover;
`;

const Info = styled.div`
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;
`;
const ImgInfo = styled.img`
      width: 400px;
`;

const DescInfo = styled.span`
      margin: 20px 0px;
`;

const Buttons = styled.div`
      display: flex;
`;

const ButtonPlay = styled.button`
       padding: 10px 20px;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 500;
        margin-right: 10px;
        cursor: pointer;

  
          background-color: white;
          color: gray;
          `;
const ButtonMore = styled.button`
         padding: 10px 20px;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 500;
        margin-right: 10px;
        cursor: pointer;      
          background-color: gray;
          color: white;
        
`;

const Span = styled.span`
         margin-left: 5px;
      
`;





















// .featured {
//   
//   

//   .category {


//     select {
//       cursor: pointer;
//       background-color: var(--main-color);
//       border: 1px solid white;
//       color: white;
//       margin-left: 20px;
//       padding: 5px;
//     }
//   }

//   img {
//.......
//   }

//   .info {
//...........

//     img {
//      .........
//     }

//     .desc {
   //....
//     }

//     .buttons {
//       display: flex;

      // button {
       

//         span {
//  
//         }
//       }
//     }
//   }
// }