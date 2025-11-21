import { Route, Routes } from "react-router-dom";
import "./App.css";

// import Candies from "./Candies.jsx";
import CandyList from "./components/CandyList.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import MovieList from "./components/MovieList.jsx";
import NowPlay from "./components/NowPlay.jsx";

function App() {
  const name = "Your Mom";

  return (
    <>
      <header>
        <h1>Candy Listing For {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo
          cumque sit dignissimos, consectetur nemo possimus accusamus maxime
          excepturi molestiae nesciunt, laborum corrupti quis asperiores!
        </p>
      </header>

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candy" element={<CandyList />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/playing" element={<NowPlay />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
