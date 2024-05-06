import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<HomePage />} path="/"></Route>
            <Route element={<MoviePage />} path="movie"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
