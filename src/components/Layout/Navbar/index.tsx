import React from "react";
import { NavbarProps } from "../../../shared/types";
import { IoSearch, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = ({ currentScreen }: any) => {
  //SCREENS
  const { HOME, GENRES, MYLIST } = currentScreen;

  return (
    <header>
      <nav>
        <Link id="current-link" to={HOME}>
          Home
        </Link>
        <Link to={GENRES}>Genres</Link>
        <Link to={MYLIST}>My List</Link>
      </nav>
      <div className="navbar-icons">
        <IoSearch />
        <IoPerson className="icon-background" />
      </div>
    </header>
  );
};
