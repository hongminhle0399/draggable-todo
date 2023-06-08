import { Link } from "react-router-dom";

const NAV_ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
];

const TheHeader = () => {
  return (
    <div className="header-wrapper">
      <nav className="navigation w-fit mx-auto py-4">
        <ul className="nav list-none flex">
          {NAV_ITEMS.map((navItem, index) => (
            <li
              key={index}
              className={`nav-item hover:underline hover:cursor-pointer text-xl ${
                index !== NAV_ITEMS.length - 1 ? "mr-4" : ""
              }`}
            >
              <Link to={navItem.path}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TheHeader;
