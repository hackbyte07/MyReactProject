import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationMenu: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const location = useLocation();

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl">Todo</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>
                      <Link
                        to="/"
                        onClick={() => handleSetActiveLink("home")}
                        className={location.pathname === "/" ? "active" : ""}
                      >
                        Home
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link
                        to="/about"
                        onClick={() => handleSetActiveLink("about")}
                        className={
                          location.pathname === "/about" ? "active" : ""
                        }
                      >
                        About
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link
                        to="/todo"
                        onClick={() => handleSetActiveLink("todo")}
                        className={
                          location.pathname === "/todo" ? "active" : ""
                        }
                      >
                        Todo
                      </Link>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
