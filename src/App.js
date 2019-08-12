import React, { Component, Fragment } from "react";
import Movie from "./Movie";
import axios from "axios";
import "./App.css";

export class App extends Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovie = async () => {
        try {
            const {
                data: {
                    data: { movies }
                }
            } = await axios.get(
                "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
            );
            // console.log(response.data.data.movies);
            this.setState(curstate => ({ movies, isLoading: false }));
        } catch (error) {
            console.error(error);
        }
    };

    displayLoader = () => {
        return (
            <div className="loader-container">
                <div className="loader" />
            </div>
        );
    };

    displayMovies = () => {
        const { movies } = this.state;
        return (
            <div className="movie-container">
                {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        genres={movie.genres}
                        poster={movie.medium_cover_image}
                        summary={movie.summary}
                    />
                ))}
            </div>
        );
    };

    componentDidMount() {
        this.getMovie();
    }

    render() {
        const { isLoading } = this.state;

        return (
            <Fragment>
                {isLoading ? this.displayLoader() : this.displayMovies()}
            </Fragment>
        );
    }
}

export default App;
