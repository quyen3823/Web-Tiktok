import "./navbar.scss";
import { BsSearch } from "react-icons/bs";
import { BiMessageAltMinus } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import Setting from "../setting/setting";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
export default function NavBar(props) {
  const [valueInit, setValueInit] = useState("");
  const [valueSucc, setValueSucc] = useState("xinh");
  useEffect(() => {
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${valueSucc}&type=more`
    )
      .then((res) => res.json())
      .then((result) => sendData(result.data));
  }, [ valueSucc]);

  const handleValueInit = useCallback((e) => {
    setValueInit(e);
  }, []);
  const sendData = useCallback(
    (data) => {
      props.parentCallback(data);
    },
    [props]
  );
  const handleValueSucc = useCallback(
     (e) => {
      if (e === "Enter" && valueInit) {
        setValueSucc(valueInit);
        setValueInit("");
      }
    },
    [valueInit]
  );
  return (
    <div className="nav-main">
      <Link to="/">
        <img
          src="https://download.logo.wine/logo/TikTok/TikTok-Logomark%26Wordmark-White-Logo.wine.png"
          alt="Logo"
          className="logo-img"
        />
      </Link>
      <Link to="/search">
        <div className="search-main">
          <input
            value={valueInit}
            onChange={(e) => handleValueInit(e.target.value)}
            onKeyDown={(e) => handleValueSucc(e.key)}
            type="text"
            className="input-control"
            placeholder="Tìm kiếm tài khoản và video"
          />
          <span className="spliter"></span>
          <BsSearch className="icon-search" />
        </div>
      </Link>
      <ul className="func-nav">
        <li className="func-li">
          <div className="upload">
            <GrAdd className="icon-upload" />
            <p className="upload-text">Tải lên</p>
          </div>
        </li>
        <li className="func-li">
          <FiSend className="icon-func" />
        </li>
        <li className="func-li">
          <BiMessageAltMinus className="icon-func" />
        </li>
        <li className="func-li setting-func">
          <div className="img-avt">
            <img
              src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
              alt="avatar"
            />
          </div>
          <Setting />
        </li>
      </ul>
    </div>
  );
}
