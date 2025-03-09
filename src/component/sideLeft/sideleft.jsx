import "./sideleft.scss";
import AccSuggest from "../accountsuggest/accountsuggest";
import AccFollow from "../acccountfollow/accountfollow";
import Discover from "../discover/discover";
import Footer from "../footer/footer";
import HR from "../HR/HR";
import { AiFillHome } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SideLeft() {
  return (
    <div className="side-left">
      <ul className="for-you">
        <li style={{ marginTop: "20px" }}>
          <Link to="/">
            <span className="for-you-list active">
              <AiFillHome />
              <p> Dành cho bạn</p>
            </span>
          </Link>
        </li>
        <Link to="/following">
          <li>
            <span className="for-you-list">
              <RiGroupLine />
              <p>Đang follow</p>
            </span>
          </li>
        </Link>
        <li>
          <span className="for-you-list">
            <BsFillCameraVideoFill />
            <p> LIVE</p>
          </span>
        </li>
      </ul>
      <HR />
      <AccSuggest />
      <HR />
      <AccFollow />
      <HR />
      <Discover />
      <HR />
      <Footer />
    </div>
  );
}
