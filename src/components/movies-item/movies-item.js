import React from "react";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      willWatch: false,
    };
  }

  render() {
    const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;

    return (
      <div className="card col-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
          alt={movie.title}
          className="movie-img"
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
          <p>Average: {movie.vote_average}</p>
          <div className="btn-group justify-content-around col-12">
            {this.state.willWatch === true ? (
              <button
                className="btn btn-success col-4"
                type="button"
                onClick={() => {
                  this.setState({
                    willWatch: false,
                  });
                  removeMovieFromWillWatch(movie);
                }}
              >
                Remove Will Watch
              </button>
            ) : (
              <button
                className="btn btn-secondary col-4"
                onClick={() => {
                  this.setState({
                    willWatch: true,
                  });
                  addMovieToWillWatch(movie);
                }}
                type="button"
              >
                Add Will Watch
              </button>
            )}

            <button
              className="btn btn-danger col-4"
              onClick={() => removeMovie(movie)}
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
