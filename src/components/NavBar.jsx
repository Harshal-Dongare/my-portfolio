import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import websiteLogo from "../assets/website-logo.png";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("");
    const [toggleHamburger, setToggleHamburger] = useState(false);

    const links = [
        {
            _id: 1,
            linkTitle: "home",
        },
        {
            _id: 2,
            linkTitle: "about",
        },
        {
            _id: 3,
            linkTitle: "portfolio",
        },
        {
            _id: 4,
            linkTitle: "techstack",
        },
        {
            _id: 5,
            linkTitle: "contact",
        },
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed z-30">
            <div>
                <h1 className="text-5xl font-signature ml-2 hidden md:block">
                    Harshal Dongare
                </h1>
                <div>
                    <img
                        src={websiteLogo}
                        alt=""
                        className="block md:hidden mx-auto h-12 w-auto"
                    />
                </div>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ _id, linkTitle }) => (
                    <li
                        key={_id}
                        className={`${
                            activeLink === linkTitle
                                ? "text-cyan-500"
                                : "text-gray-500"
                        } px-4 cursor-pointer capitalize font-medium hover:text-cyan-500 hover:scale-125 duration-200`}
                        onClick={() => setActiveLink(linkTitle)}
                    >
                        <Link to={linkTitle} smooth duration={500}>
                            {linkTitle}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Menu Icon */}
            <div
                onClick={() => setToggleHamburger(!toggleHamburger)}
                className="cursor-pointer pr-4 z-10 md:hidden"
            >
                {/* toggling the hamburger icon */}
                {toggleHamburger ? (
                    <FaTimes
                        className="hover:text-cyan-500 duration-200"
                        size={30}
                    />
                ) : (
                    <FaBars
                        className="hover:text-cyan-500 duration-200"
                        size={30}
                    />
                )}
            </div>

            {/* Hamburger Menu List */}
            <ul
                className={`${
                    toggleHamburger ? "flex" : "hidden"
                }  flex-col justify-center items-center absolute inset-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 md:hidden`}
            >
                {links.map(({ _id, linkTitle }) => (
                    <li
                        key={_id}
                        className={`${
                            activeLink === linkTitle
                                ? "text-cyan-500"
                                : "text-gray-500"
                        } px-4 py-6 text-4xl cursor-pointer capitalize font-medium hover:text-cyan-500 hover:scale-125 duration-200`}
                        onClick={() => setActiveLink(linkTitle)}
                    >
                        <Link
                            onClick={() => setToggleHamburger(!toggleHamburger)}
                            to={linkTitle}
                            smooth
                            duration={500}
                        >
                            {linkTitle}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavBar;
