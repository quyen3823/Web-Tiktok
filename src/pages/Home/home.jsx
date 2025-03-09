import "./home.scss";
import NavBar from "../../component/navbar/navbar";
import SideLeft from "../../component/sideLeft/sideleft";
import VideoList from "../../component/VideoList/videolist";
export default function Home(props) {
  return (
    <>
      <div className="navbar-home">
        <NavBar />
      </div>
      <div id="content">
        <SideLeft className="home-side-left" />
        <VideoList api={props.api} className="home-video-content" />
      </div>
    </>
  );
}
