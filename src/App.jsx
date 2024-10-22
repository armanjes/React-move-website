import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import SingleMovie from "./components/SingleMovie";
import ErrorPage from "./components/ErrorPage";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie" element={<Movies />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
export default App;
