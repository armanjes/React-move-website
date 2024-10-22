import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { api } from "./context";

const SingleMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const getMovies = async (api) => {
    try {
      let res = await fetch(api);
      let data = await res.json();
      if (data.Response === "True") {
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let setTimer = setTimeout(() => {
      getMovies(`${api}&i=${id}`);
    }, 800);

    return () => clearTimeout(setTimer);
  }, [id]);

  const { Poster, Title, Year, Rated, Released, Runtime, imdbRating } = movie;
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={Poster}
                  className="img-fluid"
                  alt={Title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{Title}</h5>
                  <div className="card-text">
                    <p>Year: {Year}</p>
                    <p>Rating: {Rated}</p>
                    <p>Released: {Released}</p>
                    <p>Duration: {Runtime}</p>
                    <p>IMDB Rating: {imdbRating}</p>
                    <NavLink className='btn btn-primary' to='/'>Go Back</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleMovie;
