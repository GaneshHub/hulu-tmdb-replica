import React, { useEffect, useState } from "react";
import "../css/Results.css";
import VedeoCard from "./VedeoCard";
import tmdbAxios from "../api/axios";
import { endpoints } from "../config";
import { useGlobalState } from "../context/StateProvider";
import  FlipMove from "react-flip-move";

const Results = () => {
  const [movies, setMovies] = useState([]);
  const [{ selectedOption }, dispatch] = useGlobalState();
  
  useEffect(() => {
        const fetchData = async() => {
            const request = await tmdbAxios.get(endpoints[selectedOption]);
            setMovies(request.data.results);
        }
       fetchData();
    }, [selectedOption]);


  return (
    <div className="results">
      <FlipMove>
      {movies.map((movie) => (
        <VedeoCard key={movie.id} movie={movie}/>
      ))}
      </FlipMove>
    </div>
  );
};

export default Results;
