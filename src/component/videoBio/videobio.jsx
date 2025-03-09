import "./videobio.scss";
import { BsPlay } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function VideoBio(props) {
  const item = props.item;
  const UrlInview = useNavigate()
  const handleDirectInView = ()=>{
    UrlInview(`videos/${props.item.id}`)
  }
  return (
    <>
      {item && (
        <div className="content-video col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2">
          <video
            onMouseOver={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
            className="video-tiktok"
            loop
            muted
            poster={item.thumb_url}
            src={item.file_url}
            type="video/mp4"
            onClick={()=>handleDirectInView()}
          />
          <div className="des-video">
            <p className="title-video">{item.description}</p>
          </div>

          <span className="view_count">
            <BsPlay style={{ "font-size": "23px" }} />
            {item.views_count}
          </span>
        </div>
      )}
    </>
  );
}
