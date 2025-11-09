import GetStarted from "./GetStarted";
import HeaderLinks from "./HeaderLinks";
import { HeaderLinkItems } from "../utils/HeaderLinkItems";
import { nanoid } from "nanoid";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav className="nav-header">
          <ul className="list-bar">
            {HeaderLinkItems.map((item) => {
              return <HeaderLinks key={nanoid()} HLink={item}></HeaderLinks>;
            })}
          </ul>
          <GetStarted classNames="header-btn"></GetStarted>
        </nav>
      </div>
    </header>
  );
};

export default Header;
