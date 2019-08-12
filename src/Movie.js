import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = ({ id, title, year, genres, summary, poster }) => {
    return (
        <div id={id} className="movie">
            <div className="movie__poster">
                <img src={poster} alt={title} />
            </div>
            <div className="movie__info">
                <h3 className="movie__title">{title}</h3>
                <h4 className="movie__year">{year}</h4>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(1, 140)}...</p>
            </div>
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.array,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
};

export default Movie;
