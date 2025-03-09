import "./setting.scss";
import { AiOutlineUser, AiOutlineLineChart } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsFillCameraVideoFill, BsQuestionCircle } from "react-icons/bs";
import { RiSettings5Fill } from "react-icons/ri";
import { MdLogout, MdLanguage, MdKeyboardAlt } from "react-icons/md";
import { TbMoon } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function Setting() {
  return (
    <ul className="setting-list">
      <Link to="/bio/my_account">
        <li className="setting-item">
          <AiOutlineUser className="icon-setting" />
          Xem hồ sơ
        </li>
      </Link>
      <li className="setting-item">
        <FaTiktok className="icon-setting" />
        Nhận Xu
      </li>
      <li className="setting-item">
        <AiOutlineLineChart className="icon-setting" />
        Xem phân tích
      </li>
      <li className="setting-item">
        <BsFillCameraVideoFill className="icon-setting" />
        LIVE Studio
      </li>
      <li className="setting-item">
        <RiSettings5Fill className="icon-setting" />
        Cài đăt
      </li>
      <li className="setting-item">
        <MdLanguage className="icon-setting" />
        Tiếng Việt
      </li>
      <li className="setting-item">
        <BsQuestionCircle className="icon-setting" />
        Phản hồi và trợ giúp
      </li>
      <li className="setting-item">
        <MdKeyboardAlt className="icon-setting" />
        Phím tắt trên bàn phím
      </li>
      <li className="setting-item">
        <TbMoon className="icon-setting" />
        Chế độ tối{" "}
        <div className="mt-ios">
          <input id="1" type="checkbox" />
          <label htmlFor="1"></label>
        </div>
      </li>
      <li
        className="setting-item"
        style={{ borderTop: "1px solid rgb(255,255,255,20%" }}
      >
        <MdLogout className="icon-setting" />
        Đăng xuất
      </li>
    </ul>
  );
}
