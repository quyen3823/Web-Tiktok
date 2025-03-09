import "./discover.scss";
import data from "./ap-disovery.json";
import { BsHash } from "react-icons/bs";
import { HiMusicalNote } from "react-icons/hi2";
export default function Discover() {
  return (
    <div className="discover">
      <div className="title-discover">Khám phá</div>
      <ul className="list-discover">
        {data.data.map((item, index) => (
          <li className="discover-item" key={index}>
            {item.type === "music" ? <HiMusicalNote /> : <BsHash />}
            {item.hashtag.length > 33
              ? item.hashtag.slice(0, 33) + "..."
              : item.hashtag}
          </li>
        ))}
      </ul>
    </div>
  );
}
