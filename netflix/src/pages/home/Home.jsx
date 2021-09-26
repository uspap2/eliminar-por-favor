import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
//import "./home.scss"; 
import List from "../../components/list/List";
import styled from "styled-components";
import axios from "axios";


const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${
                      genre ? "&genre=" + genre : ""
                    }`,
                    {
                      headers: {
                        Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDUwN2RjZTBmNDY3MTg3NDM5ZmRlMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzI1Nzk4MDYsImV4cCI6MTYzMzAxMTgwNn0.8-uP2Dfo_NZrujKdY5ygQS9KnskY9MjlwUWJJejba2M",
                        // "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                      },
                    }
                ); // Fin de res

                setLists(res.data);
                console.log("El res en home es: ",res)
                console.log(`res es ${res} genre= ${genre} type= ${type}    `)
                console.log( `la busqueda es -->lists${type ? "?type=" + type : ""}${
                  genre ? "&genre=" + genre : ""
                }`)
              } catch (err) {
                console.log(err);
              }
        }; // FIN de getRandomLists

        getRandomLists();

    }, [type, genre]); // FIN del useEffect

    return (
        <Container>
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list) => (
                <List list={list} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    background-color: var(--main-color);
    overflow: hidden; 
`;

export default Home