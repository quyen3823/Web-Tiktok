import "./Bio.scss";
import NavBar from "../../component/navbar/navbar";
import SideLeft from "../../component/sideLeft/sideleft";
import BioComponent from "../../component/bioComponent/biocom";

export default function Bio(props) {
  return (
    <div className="BioPage">
      <div className="navbar-home">
        <NavBar />
      </div>
      <div id="content">
        <SideLeft className="home-side-left" />
        <BioComponent MyBio={props.MyNickName} />
      </div>
    </div>
  );
}
