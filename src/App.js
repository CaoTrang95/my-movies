import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import DetailMovie from "./pages/DetailMovie";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<HomePage />} path="/"></Route>
            <Route element={<MoviePage />} path="movie"></Route>
            <Route element={<DetailMovie />} path="movie/:movieId"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
