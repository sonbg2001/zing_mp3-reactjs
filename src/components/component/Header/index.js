import "./Header.scss";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { RiVipDiamondLine } from "react-icons/ri";
import { FaTshirt } from "react-icons/fa";
import HeaderSearch from "./HeaderSearch";
function Header() {
  return (
    <header className="header">
      <div className="level">
        <div className="level-left">
          <button className="level-left__icon disabled">
            <BsArrowLeft />
          </button>
          <button className="level-left__icon">
            <BsArrowRight />
          </button> 
          <HeaderSearch/>
        </div>
        <div className="level-right">
          <div className="level-right__icon">
            <i className="header-icon">
              <FaTshirt />
            </i>
          </div>
          <div className="level-right__icon">
            <i className="header-icon">
              <RiVipDiamondLine />
            </i>
          </div>
          <div className="level-right__icon">
            <i className="header-icon">
              <FiSettings />
            </i>
          </div>
          <i className="header-user">
            <img
              className="header-user-img"
              src="https://avatar.talk.zdn.vn/default.jpg"
              alt="User"
            />
          </i>
        </div>
      </div>
    </header>
  );
}

export default Header;
