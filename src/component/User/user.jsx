import "./user.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Users(props) {
  const item = props.item;
  const navigate = useNavigate();
  const handleNavigate = (nickname_user) => {
    navigate(`/bio/${nickname_user}`);
  };
  return (
    <div className="user-wrapper" onClick={() => handleNavigate(item.nickname)}>
      <div className="img-wrapper">
        <img
          onError={(event) => {
            event.target.src =
              "https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg";
            event.onerror = null;
          }}
          src={item.avatar}
          alt="avt-acc"
          className="avt-acc"
        />
      </div>

      <div className="name">
        <p className="nameIG">
          {item.nickname ? item.nickname : ""}
          {item.tick ? <AiFillCheckCircle className="tick-blue" /> : ""}
        </p>
        <p className="name-user">
          {item.first_name ? item.first_name : ""}{" "}
          {" " + item.last_name ? item.last_name : ""}
          {props.search_component
            ? " • " + props.follower_count + " Follower"
            : ""}
        </p>
        {props.bio ? <p className="bio-user">{props.bio}</p> : ""}
      </div>

      <div className="show-info-acc">
        <span className="header-show">
          <div className="img-contain">
            <img
              onError={(event) => {
                event.target.src =
                  "https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg";
                event.onerror = null;
              }}
              src={item.avatar}
              alt=""
              className="avt-acc--show"
            />
          </div>
          <span className="follow-btn">
            {item.is_followed ? (
              <button className="show-action-follow active">Đang Follow</button>
            ) : (
              <button className="show-action-follow">Follow</button>
            )}
          </span>
        </span>

        <div className="info-container">
          <div className="name-show">
            <p className="nick_name">
              <b>
                {item.nickname || "user_tiktok"}{" "}
                {item.tick ? (
                  <AiFillCheckCircle style={{ color: "rgb(32, 213, 236)" }} />
                ) : (
                  ""
                )}
              </b>
            </p>
            <p className="full_name">
              <b>
                {item.first_name || "Người dùng Tiktok"}
                {" " + item.last_name}
              </b>
            </p>
          </div>
          <span className="info-follow">
            <span className="follower">
              <b>{item.followers_count || "0"}</b>&nbsp; Follower
            </span>
            <span className="like_count">
              <b>{item.likes_count || "0"}</b>&nbsp; Thích
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
