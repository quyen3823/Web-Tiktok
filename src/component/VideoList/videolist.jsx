import "./videolist.scss";
import VideoContent from "../videocontent/videocontent";
import HR from "../HR/HR";
import { useEffect, useState } from "react";
import DownloadApp from "../downloadApp/download";
export default function VideoList(props) {
  const [videotrending, setVideotrending] = useState([]);
  useEffect(() => {
    const numberpage = Math.floor(Math.random() * 17);
    fetch(
      props.api ||
        `https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=${numberpage}`
    )
      .then((res) => res.json())
      .then((result) => setVideotrending(result));
  }, [props.api]);

  useEffect(() => {
    const elements = document.querySelectorAll(".video-src");
    const observer = new IntersectionObserver(
      (entries, observe) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 1) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      {
        threshold: 1,
      }
    );
    elements.forEach((element) => observer.observe(element));
  });



  return (
    <div
      className="video-list"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <DownloadApp />
      <div>
        {videotrending.data &&
          videotrending.data.map((item, index) => (
            <span className="video-list-item" key={index}>
              <VideoContent id={index} data={item} />
              <HR />
            </span>
          ))}
      </div>
    </div>
  );
}
