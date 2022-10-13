import React, { useEffect, useState } from "react";
import { NavbarProps, OptionsProps } from "../../../shared/types";
import { IoSearch, IoPersonCircleSharp } from "react-icons/io5";
import NavItem from "./Components/NavItem";

const options: OptionsProps[] = [
  { label: "HOME", link: "/", style: { fontWeight: "bold" } },
  { label: "GENRES", link: "/genres" },
  { label: "MYLIST", link: "/my-list", style: { color: "red" } },
];

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollbarOverflow, setIsScrollbarOverflow] = useState(false);

  const OpenMenu = () => setIsOpenMenu(!isOpenMenu);

  const controlNavbar = () => {
    const documentScroll = document.querySelector("#root")!.scrollTop;
    if (documentScroll > 100) {
      setIsScrollbarOverflow(true);
      if (documentScroll > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
        setIsOpenMenu(false);
      }
    } else {
      setIsScrollbarOverflow(false);
    }
    setLastScrollY(documentScroll);
  };

  useEffect(() => {
    document.querySelector("#root")!.addEventListener("scroll", controlNavbar);
    return () => {
      document
        .querySelector("#root")!
        .addEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`navbar-content ${show ? "hidden" : "sticky"} ${
        isScrollbarOverflow ? "blur" : ""
      }`}
    >
      <a className="navbar-logo">
        <IoPersonCircleSharp className="navbar-icon" />
      </a>
      <nav className="navbar-options">
        <div className="navbar-profile">
          <IoSearch className="navbar-icon" />
          <IoPersonCircleSharp className="navbar-icon" onClick={OpenMenu} />
        </div>
        <ul className={`nav-items-list${isOpenMenu ? " active" : ""}`}>
          {options.map((prop, i) => {
            return (
              <li key={i}>
                <NavItem
                  link={prop.link}
                  label={prop.label}
                  className="nav-item"
                  style={prop.style}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
