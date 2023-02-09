import { memo } from "react";
import { Link } from "react-router-dom";

function NavbarItem({title, path, children, ...props}) {
  return (
    <li className= {props.className}>
      <Link to={path} title={title}>
        {children}
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default memo(NavbarItem);
