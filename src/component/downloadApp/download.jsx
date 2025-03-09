import { BiArrowToTop } from "react-icons/bi";
import "./downloadapp.scss";
export default function DownloadApp() {
  return (
    <div
      className="dl-app"
      onMouseOver={() =>
        (document.querySelector(".dl-app").style = "transform: translateY(0%)")
      }
      onMouseLeave={() =>
        (document.querySelector(".dl-app").style = "transform: translateY(60%%)")
      }
    >
      <button className="download-app">Tải ứng dụng</button>
      <BiArrowToTop className="download-icon" />
    </div>
  );
}
