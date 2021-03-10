import React, { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = function (props) {
  const id = props.location.state.id; // found in docs for react router

  const [inputs, setInputs] = useState({
    movieTitle: "",
    genre: "Unknown",
    rating: "Unknown",
    video: "Unknown",
    description: "",
    language: "",
    year: "",
    duration: "",
    favorite: "?",
    episodes: "",
  });

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const movieResp = await Axios.get(`/api/movies/${id}`);
      if (movieResp.status === 200) setInputs(movieResp.data);
    })();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resp = await Axios.post("/api/movies/update", inputs);

      if (resp.status === 200) {
        toast("The movie was updated successfully", {
          type: toast.TYPE.SUCCESS,
        });
        setRedirect(true);
      } else {
        toast("There was an issue updating the movie", {
          type: toast.TYPE.ERROR,
        });
      }
    } catch (error) {
      toast("There was an issue updating the movie", {
        type: toast.TYPE.ERROR,
      });
    }
  };

  const handleInputChange = async (event) => {
    event.persist();

    const { name, value } = event.target;

    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  if (redirect) return <Redirect to="/movies" />;

  return (
    <Container className="my-5">
      <header>
        <h1>Edit Movie</h1>
      </header>

      <hr />

      <div>
      <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Movie Title:</Form.Label>
            <Form.Control
              name="movieTitle"
              onChange={handleInputChange}
              value={inputs.movieTitle}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Genre:</Form.Label>
            <Form.Control
              as="select"
              name="genre"
              onChange={handleInputChange}
              defaultValue={inputs.genre || "Unknown"}
            >
             <option value="Action">Action</option>
             <option value="Comedy">Comedy</option>
             <option value="Horror">Horror</option>
             <option value="Romance">Romance</option>
             <option value="Thiller">Thriller</option>
             <option value="Drama">Drama</option>
             <option value="Mystery">Mystery</option>
             <option value="Crime">Crime</option>
             <option value="Animation">Animation</option>
             <option value="Adventure">Adventure</option>
             <option value="Fantasy">Fantasy</option>
             <option value="Family">Family</option>
             <option value="Sci-Fi">Sci-Fi</option>
             <option value="Western">Western</option>
             <option value="Unknown">Unknown</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              as="select"
              name="rating"
              onChange={handleInputChange}
              defaultValue={inputs.rating || "Unknown"}
            >
             <option value="G">G</option>
             <option value="PG">PG</option>
             <option value="PG-13">PG-13</option>
             <option value="R">R</option>
             <option value="NC-17">NC-17</option>
             <option value="A">A</option>
             <option value="Unknown">Unknown</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Select Video Type:</Form.Label>
            <Form.Control
              as="select"
              name="video"
              onChange={handleInputChange}
              defaultValue={inputs.video || "Unknown"}
            >
            <option value="Movie">Movie</option>
             <option value="TV Show">TV Show</option>
             <option value="Unknown">Unknown</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              name="description"
              onChange={handleInputChange}
              value={inputs.description}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Language Type:</Form.Label>
            <Form.Control
              name="language"
              onChange={handleInputChange}
              value={inputs.language}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Year Released:</Form.Label>
            <Form.Control
              type="number"
              name="year"
              step="1"
              min="1900"
              max="2050"
              onChange={handleInputChange}
              value={inputs.year}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Duration (mins):</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              step="1"
              min="1"
              max="1000"
              onChange={handleInputChange}
              value={inputs.duration}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Episodes:</Form.Label>
            <Form.Control
              type="number"
              name="episodes"
              step="1"
              min="1"
              max="100"
              onChange={handleInputChange}
              value={inputs.episodes}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Favorite:</Form.Label>
            <Form.Control
              as="select"
              name="favorite"
              onChange={handleInputChange}
              defaultValue={inputs.favorite || "?"}
            >
             <option value="Yes">Yes</option>
             <option value="No">No</option>
             <option value="?">?</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default Edit;