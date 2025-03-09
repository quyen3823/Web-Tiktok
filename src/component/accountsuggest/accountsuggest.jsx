import { useEffect, useState } from "react";
import Users from "../User/user";
import "./accountsuggest.scss";
export default function AccSuggest() {
  const [accSugg, setAccSugg] = useState([]);
  const [accSuggShow, setAccSuggShow] = useState([]);
  useEffect(() => {
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/suggested?page=2&per_page=18`
    )
      .then((res) => res.json())
      .then((result) => {
        setAccSugg(result);
        setAccSuggShow(result.data.slice(0, 5));
      });
  }, []);
  return (
    <div className="acc-suggest">
      <p className="title-acc-sgg">Tài khoản được đề xuất</p>
      <ul className="list-acc">
        {accSuggShow &&
          accSuggShow.map((item, index) => (
            <li className="acc-item" key={index}>
              <Users item ={item}/>
            </li>
          ))}
      </ul>

      <p className="see-all" onClick={() => setAccSuggShow(accSugg.data)}>
        Xem tất cả
      </p>
    </div>
  );
}
