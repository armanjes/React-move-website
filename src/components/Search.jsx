import { useGlobalState } from "./context";

const Search = () => {
  const { query, setQuery } = useGlobalState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getValue = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="container pt-3 pb-5 text-center">
      <div className="row">
        <div className="col-md-7 mx-auto">
          <h2>Search your favorite movie</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mt-3"
              type="text"
              value={query}
              onChange={getValue}
              placeholder="Enter movie title..."
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
