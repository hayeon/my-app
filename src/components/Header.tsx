import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>home으로 가기</Link>
        </li>
        <li>
          <Link to={"/about"}>상세페이지로 가기</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
