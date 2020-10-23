import React from 'react';
import { useGlobalState } from '../context/StateProvider';
import "../css/NavigationBar.css";

const NavigationBar = () => {
    const [state, dispatch] = useGlobalState();
    
    const onTypeSelect = resultType => {
        dispatch({
            type: "SET_SELECTED_OPTION",
            payload: { selectedOption: resultType }
          });
    };
    return (
        <div className="navigationBar">
            <h2 onClick={() =>onTypeSelect("Trending")}>Trending</h2>
            <h2 onClick={() =>onTypeSelect("TopRated")}>Top Rated</h2>
            <h2 onClick={() =>onTypeSelect("Actionmovies")}>Action</h2>
            <h2 onClick={() =>onTypeSelect("ComedyMovies")}>Comedy</h2>
            <h2 onClick={() =>onTypeSelect("HorrorMovies")}>Horror</h2>
            <h2 onClick={() =>onTypeSelect("RomanceMovies")}>Romance</h2>
            <h2 onClick={() =>onTypeSelect("Mystery")}>Mystery</h2>
            <h2 onClick={() =>onTypeSelect("Scifi")}>Sci-fi</h2>
            <h2 onClick={() =>onTypeSelect("Westren")}>Westren</h2>
            <h2 onClick={() =>onTypeSelect("Animation")}>Animation</h2>
            <h2 onClick={() =>onTypeSelect("Tv")}>Tv Movie</h2>
        </div>
    )
}

export default NavigationBar;
