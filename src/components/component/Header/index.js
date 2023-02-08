import './Header.scss'
import { BsArrowLeft, BsArrowRight, BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { RiVipDiamondLine } from "react-icons/ri";
import { FaTshirt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
function Header() {
  return <header className='header'>
    <div className='level'>
    <div className='level-left'>
        <button> <BsArrowLeft/></button>
        <button> <BsArrowRight/></button>
        <button> <BsSearch/></button>
        <FiSettings/>
        <RiVipDiamondLine/>
        <FaTshirt/>
        <BiUserCircle/>
        <form>
            <input type="text"  placeholder='Tìm kiếm tên bài hát, nghệ sỹ, lời bài hát...'/>
        </form>
    </div>
    <div className='level-right'></div>
    </div>
  </header>;
}

export default Header;
