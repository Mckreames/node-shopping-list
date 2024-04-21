import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GraceNoteNav from "./Components/GraceNoteNav/GraceNoteNav";
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account";
import SongAddForm from "./Components/SongAddForm/SongAddForm";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import SignUp from "./Components/SignUp/SignUp";
import TermsOfService from "./Components/TermsOfService/TermsOfService";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL ?? "/"}>
      <div className="App">
        <GraceNoteNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/song-add" element={<SongAddForm />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
