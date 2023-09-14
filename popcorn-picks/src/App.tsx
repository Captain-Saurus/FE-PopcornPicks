import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";
import TheaterPage from "./pages/TheaterPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/theater" element={<TheaterPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
