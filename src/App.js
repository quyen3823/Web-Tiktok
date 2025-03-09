import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home";
import Search from "./pages/search/search";
import Bio from "./pages/Bio/Bio";
import MyBio from "./component/myBio/myBio";
import Following from "./pages/Following/following";
import InViewVideo from "./component/InViewVideo/InviewVideo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/following" element={<Following />} />
          <Route path="/videos/:idVideo" element={<InViewVideo />} />
          <Route path="/bio/:nickname_user/videos/:idVideo" element={<InViewVideo />} />
          <Route path="/bio/:nickname_user" element={<Bio />} />
          <Route path="/bio/my_account" element={<MyBio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
