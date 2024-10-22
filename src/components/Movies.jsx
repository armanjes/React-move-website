import { useGlobalState } from "./context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movies } = useGlobalState();
  return (
    <section className="container py-2">
      <div className="row g-3">
        {movies.map((movie) => {
          const { imdbID, Title, Poster } = movie;
          const shortTitle =
            Title.length > 14 ? Title.substring(0, 12) + "..." : Title;
          return (
            <NavLink
              to={`movie/${imdbID}`}
              key={imdbID}
              className="col-sm-6 col-md-4 col-lg-3"
              title={Title}
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">{shortTitle}</h3>
                </div>
                <img className="img-fluid" src={Poster} alt={Title} />
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
