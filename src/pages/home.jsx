import React, { useState, useEffect } from "react";
import { Movie } from "./movie";
import axios from "axios";
import "./home.css";
// import TextField from "@mui/material/TextField";

export const Home = () => {
  // const [item, setItem] = useState([]);

  // useEffect(() => {
  //   const endPoint = "https://dummyjson.com/products";
  //   axios.get(endPoint).then((response) => {
  //     const apipData = response.data;
  //     setItem(apipData.products);
  //   });
  // }, [setItem]);

  const [data, setData] = useState([]);
  const getData = () => {
    fetch("movies.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="home">
      <div className="homepage">
        <div className="search">
          <p>Your Favourite Movies and Series</p>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <h1>Watch Now!</h1>
      </div>
      
      <div className="movies">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.Title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((movie) => (
            <Movie item={movie} />
          ))}
      </div>
    </div>
  );
};
