import "./videocontent.scss";
import Users from "../User/user";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { HiMusicalNote } from "react-icons/hi2";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function VideoContent(props) {
  const [Hearted, setHeart] = useState(false);
  const [countLikes, setCountLikes] = useState(props.data.likes_count);

  const handleHeart = useCallback(() => {
    setHeart(!Hearted);
    if (!Hearted) {
      setCountLikes(countLikes + 1);
    } else {
      setCountLikes(countLikes - 1);
    }
  }, [Hearted, countLikes]);

  const UrlInview = useNavigate();
  const handleDirectInView = () => {
    UrlInview(`videos/${props.data.id}`);
  };
  return (
    <div>
      {props.data && (
        <>
          <div className="video-content">
            <div className="video-header">
              <span className="video-header--span">
                <Users item={props.data.user} />
                <div className="hashtag-status">
                  <p className="status">{props.data.description}</p>
                  <p className="hashtag underline">
                    #tiktok_clone_by_quyen_quyen
                  </p>
                </div>
              </span>
              {props.data.user.is_followed ? (
                <button className="action-follow active">Đang Follow</button>
              ) : (
                <button className="action-follow">Follow</button>
              )}
            </div>
            <div className="music-link ">
              <HiMusicalNote />
              <p className="org-audio underline">
                {props.data.music || "nhạc - TikTok Make Your Day"}
              </p>
            </div>

            <div className="video-body">
              <video
                onClick={() => handleDirectInView()}
                className="video-src"
                src={props.data.file_url}
                // muted
                loop
              ></video>

              <div className="action-video">
                <ul className="action-list">
                  <li className="action-item" onClick={() => handleHeart()}>
                    {Hearted ? (
                      <AiFillHeart
                        className="icon-action"
                        style={{ color: "red" }}
                      />
                    ) : (
                      <AiFillHeart className="icon-action" />
                    )}
                  </li>
                  <p className="count">{countLikes}</p>
                  <li className="action-item">
                    <AiFillMessage className="icon-action" />
                  </li>
                  <p className="count">{props.data.comments_count}</p>
                  <li className="action-item">
                    <IoIosShareAlt className="icon-action" />
                  </li>
                  <p className="count">{props.data.shares_count}</p>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
