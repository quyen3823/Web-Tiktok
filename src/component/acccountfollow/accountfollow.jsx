import { useEffect, useState } from "react";
import Users from "../User/user";
export default function AccFollow() {
  const [accSugg, setAccSugg] = useState([]);
  const [accSuggShow, setAccSuggShow] = useState([]);
  useEffect(() => {
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=18`
    )
      .then((res) => res.json())
      .then((result) => {
        setAccSugg(result);
        setAccSuggShow(result.data.slice(0, 8));
      });
  }, []);
  return (
    <div className="acc-suggest">
      <p className="title-acc-sgg">Các tài khoản đang follow</p>
      <ul className="list-acc">
        {accSuggShow &&
          accSuggShow.map((item, index) => (
            <li className="acc-item" key={index}>
              <Users item = {item}/>
            </li>
          ))}
      </ul>

      <p className="see-all" onClick={() => setAccSuggShow(accSugg.data)}>
        Xem tất cả
      </p>
    </div>
  );
}
