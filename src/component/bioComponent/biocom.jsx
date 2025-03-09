import "./biocom.scss";
import HR from "../HR/HR";
import VideoBio from "../videoBio/videobio";
import Users from "../User/user";
import DownloadApp from "../downloadApp/download";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
export default function BioComponent(props) {
  const { nickname_user } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://tiktok.fullstack.edu.vn/api/users/@${
      nickname_user || props.MyBio
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result.data));
  }, [nickname_user, props.MyBio]);
  return (
    <>
      {data && (
        <div className="app-container">
          <DownloadApp />
          <div className="grid-right">
            <div className="grid-right-container">
              <div className="profile">
                <Users is_Show_info={false} item={data} />
                {data.is_followed ? (
                  <button className="show-action-follow active">
                    Đang Follow
                  </button>
                ) : (
                  <button className="show-action-follow">Follow</button>
                )}
                <h2 className="pro2">
                  <div className="pro2-1">
                    <span className="analyst-wrapper">
                      <strong className="strong-quan">
                        {data.followings_count}
                      </strong>
                      <p className="title-analyst">&nbsp;Đang Follow</p>
                    </span>
                    <span className="analyst-wrapper">
                      <strong className="strong-quan">
                        {data.followers_count}
                      </strong>
                      <p className="title-analyst">&nbsp;Follower</p>
                    </span>
                    <span className="analyst-wrapper">
                      <strong className="strong-quan">
                        {data.likes_count}
                      </strong>
                      <p className="title-analyst">&nbsp;Thích</p>
                    </span>
                  </div>
                </h2>
                <h2 className="user-bio">{data.bio}</h2>
                <div className="tiktok-1rxc7na-DivShareActions ee7zj8d8">
                  <svg
                    className="tiktok-3anilq-StyledShareIcon ee7zj8d16"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5546 8.35111L13.3171 8.16468V7.37972V3.50006L21.4998 12.0001L13.3171 20.5001V16.3738V15.3664L12.3098 15.3738C8.838 15.3994 5.4275 17.0466 2.49983 19.5882C2.54612 19.2536 2.67769 18.641 2.94391 17.8329C3.3786 16.5132 4.01326 15.1988 4.88691 13.971C6.71045 11.4083 9.24414 9.16046 12.5546 8.35111Z"
                      stroke="#161823"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="container-link">
                    <div className="container-link1">
                      <span className="container-link1-des">Nhúng</span>
                      <span className="container-link1-des">
                        Chia sẻ với Facebook
                      </span>
                      <span className="container-link1-des">
                        Chia sẻ với Whatsapp
                      </span>
                      <span className="container-link1-des">
                        Chia sẻ với Twister
                      </span>
                      <span className="container-link1-des">
                        Sao chép liên kết
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-video">
                <div className="style-video">
                  <p data-e2e="videos-tab" className="list-cate active">
                    Video
                  </p>
                  <p data-e2e="liked-tab" className="list-cate">
                    <svg
                      className="key-liked-video"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 3C17.9249 3 13 7.92487 13 14V21H8C6.89543 21 6 21.8954 6 23V41C6 42.1046 6.89543 43 8 43H40C41.1046 43 42 42.1046 42 41V23C42 21.8954 41.1046 21 40 21H35V14C35 7.92487 30.0751 3 24 3ZM31 21V14C31 10.134 27.866 7 24 7C20.134 7 17 10.134 17 14V21H31Z"
                      ></path>
                    </svg>
                    <span className="title-like-cate">Đã thích</span>
                  </p>
                  <div className="outline-cate--bio"></div>
                </div>
                <div className="grid-row">
                  <HR />
                  {data.videos && data.videos.length !== 0 ? (
                    <div className="grid-100-6 row">
                      {data.videos.map((item, index) => (
                        <VideoBio item={item} />
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "50px",
                      }}
                    >
                      <FaUserAlt style={{ fontSize: "59px" }} />
                      <p className="title-note">
                        Người dùng này chưa đăng bất kì video nào
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
