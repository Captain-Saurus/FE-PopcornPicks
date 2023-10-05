import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";
import DetailPage from "./pages/DetailPage";
import TheaterPage from "./pages/TheaterPage";
import ReservationPage from "./pages/ReservationPage";
import LoginPage from "./pages/LoginPage";
import PersonalReservationPage from "./pages/PersonalReservationPage";
import Footer from "./components/Footer";
import MyPage from "./pages/MyPage";
import SignupPage from "./pages/SignupPage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:title" element={<DetailPage />} />
        <Route path="/theater" element={<TheaterPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route
          path="/personalReservation"
          element={<PersonalReservationPage />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
