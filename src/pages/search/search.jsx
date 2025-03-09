import "./search.scss";
import NavBar from "../../component/navbar/navbar";
import SideLeft from "../../component/sideLeft/sideleft";
import Users from "../../component/User/user";
import HR from "../../component/HR/HR";
import { useCallback, useState } from "react";
export default function Search() {
  const [data, setData] = useState([]);
  const callbackFunction = useCallback((childData) => {
    setData(childData);
  }, []);
  return (
    <>
      <div className="navbar-home">
        <NavBar parentCallback={callbackFunction} />
      </div>
      <div id="content">
        <SideLeft className="home-side-left" />

        <div className="search-pages">
          <ul className="category-searh">
            <li className="category-item">Top</li>
            <li className="category-item active">Tài khoản</li>
            <li className="category-item">Video</li>
          </ul>
          <ul className="list-search">
            {data.length === 0 ? (
              <h1>Không có kết quả</h1>
            ) : (
              data.map((item, index) => (
                <>
                  <li className="search-item" key={index}>
                    <HR />
                    <Users
                      search_component={true}
                      bio={item.bio}
                      follower_count={item.followers_count}
                      item={item}
                    />
                  </li>
                </>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
