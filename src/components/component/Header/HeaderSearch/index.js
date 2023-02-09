import "./HeaderSearch.scss";
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { memo, useRef, useState } from "react";
function HeaderSearch() {
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  return (
    <form className="header-search">
      <div className="header-search-container">
        <button className="level-left__icon">
          <BsSearch />
        </button>
        <div className="input-wapper">
          <input
            ref={searchRef}
            type="text"
            spellCheck="false"
            placeholder="Tìm kiếm tên bài hát, nghệ sỹ, lời bài hát..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
        <button
          className="level-left__icon times-icon"
          onClick={(e) => {
            setSearch("");
            e.preventDefault();
            searchRef.current.focus();
          }}
        >
          {search && <FaTimes />}
        </button>
      </div>
    </form>
  );
}

export default memo(HeaderSearch);
