import React, { useState } from "react";
import { IoChevronBack, IoChevronForward, IoPlayCircle } from "react-icons/io5";
import { GenericButton } from "../../common";
import a from "./../../../assets/test1.png";

export const Jumbotron = () => {
    const [moviesList, setMoviesList] = useState([a]);

    return (
        <div className="jumbotron-container">
            <div>
                <div>
                    <GenericButton className="jumbotron-button left">
                        <IoChevronBack />
                    </GenericButton>
                </div>
                <div>
                    {moviesList.map((url) => {
                        return (
                            <figure className="jumbotron-image">
                                <img
                                    src={url}
                                    alt="Previous-vist"
                                    className="background-img"
                                />
                            </figure>
                        );
                    })}
                    <GenericButton>A</GenericButton>
                </div>
                <div>
                    <GenericButton className="jumbotron-button right">
                        <IoChevronForward />
                    </GenericButton>
                </div>
            </div>
            <div>
                <figure>
                    <img src="" alt="Title" className="" />
                </figure>
                <span className="">Description</span>
                <GenericButton>
                    <IoPlayCircle />
                </GenericButton>
                <GenericButton>i</GenericButton>
            </div>
        </div>
    );
};
