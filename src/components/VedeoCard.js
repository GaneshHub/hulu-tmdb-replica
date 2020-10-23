import React, { forwardRef } from "react";
import { baseurls } from "../config";
import "../css/VedeoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const VedeoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="vedeoCard">
      <img
        src={`${baseurls.images}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <h2>{movie.title || movie.original_name}</h2>
      <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={movie.overview}
      />
      <p className="vedeoCard_stats">
        {movie.media_type && ` ${movie.media_type} •`}
        {movie.release_date || movie.first_air_date} • 
        <ThumbUpSharp /> {" "} {movie.vote_count}
      </p>
    </div>
  );
});

export default VedeoCard;
