import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Movie = (props) => {
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    Response,
    Images,
  } = props.item;

  
  const navigate = useNavigate();
  const redirectToDetails = () => {
    navigate("/details", {
      state: { 
        title: Title,
        year: Year,
        rated: Rated,
        release: Released,
        runtime: Runtime,
        genre: Genre,
        director: Director,
        writer: Writer,
        actors: Actors,
        plot: Plot,
        language: Language,
        country: Country,
        awards: Awards,
        poster: Poster,
        score: Metascore,
        rate: imdbRating,
        votes: imdbVotes,
        ID: imdbID,
        type: Type,
        response: Response,
        image: Images[0],
      },
    });
  };
  return (
    <div className="movie">
      <img src={Images[0]} />
      <div className="description">
        <p>
          <b>{Title}</b>
        </p>
        <p> {Director}</p>
      </div>

      <button className="details" onClick={redirectToDetails}>
        Details
      </button>
      {/* <div className="links">
<Link to="/details" state={
  {title:{Title}}
}> Details </Link>

</div> */}
    </div>
  );
};
