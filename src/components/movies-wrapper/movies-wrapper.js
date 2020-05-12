import React from "react";
import MovieItem from "../movies-item/movies-item";
import { API_URL, API_KEY_3 } from "../../utils/api";
import MovieTabs from "../movie-tabs/movie.tabs";
import Pagination from "../pagination/pagination";

class MovieWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // movies: this.props.data,
      movies: [],
      moviesWillWatch: [],
      sort: "revenue.desc",
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort !== this.state.sort) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort}&page=2`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.results,
        }),
      );
  };

  removeMovie = (film) => {
    const updateMovie = this.state.movies.filter((item) => item.id !== film.id);
    this.setState({
      movies: updateMovie,
    });
  };

  addMovieToWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.splice(movie);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

  updateSort = (value) => {
    this.setState({
      sort: value,
    });
  };

  render() {
    return (
      <div>
        <MovieTabs sort={this.state.sort} updateSort={this.updateSort} />
        <div className="App d-flex flex-nowrap">
          <div className="col-10 d-flex justify-content-around flex-wrap">
            {this.state.movies.map((film, index) => (
              <MovieItem
                key={film.id}
                movie={film}
                removeMovie={this.removeMovie}
                addMovieToWillWatch={this.addMovieToWillWatch}
                removeMovieFromWillWatch={this.removeMovieFromWillWatch}
              />
            ))}
          </div>
          <div className="col-2 film-counter">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
            {this.state.moviesWillWatch.length > 0 ? (
              <p>
                {this.state.moviesWillWatch.map((el) => (
                  <div key={el.title}>{el.title}</div>
                ))}
              </p>
            ) : null}
          </div>
        </div>
        <div className="container">
          <Pagination />
        </div>
      </div>
    );
  }
}

export default MovieWrapper;
