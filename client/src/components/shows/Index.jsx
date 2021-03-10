import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Index = function ({ user }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      await getMovies();
    })();
  }, []);

  const getMovies = async () => {
    const moviesResp = await Axios.get("/api/movies");
    if (moviesResp.status === 200) setMovies(moviesResp.data);
  };

  const deleteMovies = async (movie) => {
    try {
      const resp = await Axios.post("/api/movies/delete", {
        id: movie._id,
      });

      if (resp.status === 200)
        toast("The movie was deleted successfully", {
          type: toast.TYPE.SUCCESS,
        });

      await getMovies();
    } catch (error) {
      toast("There was an error deleting the movie", { type: toast.TYPE.ERROR });
    }
  };

  return (
    <Container className="my-5">
      <header>
        <h1>Archive</h1>
      </header>

      <hr />

      <div className="content">
        {movies &&
          movies.map((movie, i) => (
            <div key={i} className="card my-3">
              <div className="card-header clearfix">
                <div className="float-left">
                  <h5 className="card-title">{movie.movieTitle}</h5>

                  {movie.user ? <small>{movie.user.fullname}</small> : null}
                </div>

                <div className="float-right">
                  <small>{movie.updatedAt}</small>
                </div>
              </div>

              <div className="card-body">
                <p className="card-text">Description: {movie.description}</p>
                <p className="card-text">Genre: {movie.genre}</p>
                <p className="card-text">Rating: {movie.rating}</p>
                <p className="card-text">Language: {movie.language}</p>
                <p className="card-text">Release Year: {movie.year}</p>
                <p className="card-text">Video Type: {movie.video}</p>
                <p className="card-text">Episodes: {movie.episodes}</p>
              </div>

              {user ? (
                <div className="card-footer">
                <p className="card-text">Favorite: {movie.favorite}</p>
                  <Link
                    to={{
                      pathname: "/movies/edit",
                      state: {
                        id: movie._id,
                      },
                    }}
                  >
                    <i className="fa fa-edit"></i>
                  </Link>

                  <Link
                    to={{
                      pathname: "/movies/",
                      state: {
                        id: movie._id,
                      },
                    }}
                    onClick={() => deleteMovies(movie)}
                  >
                    <i className="fa fa-trash"></i>
                  </Link>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Index;