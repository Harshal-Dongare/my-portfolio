import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div
            name="home"
            className="w-full bg-gradient-to-b from-black via-black to-gray-800 h-screen"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row">
                <div className="flex flex-col justify-center md:text-left sm:text-center sm:items-center lg:items-start h-full">
                    <h1 className="text-4xl md:text-7xl font-bold text-white">
                        I'm a{" "}
                        <span className="text-cyan-500 font-styleScript font-medium">
                            Front-&nbsp;end
                        </span>{" "}
                        Developer
                    </h1>
                    <p className="text-gray-500 py-4 max-w-md">
                        {" "}
                        On a mission to craft pixel-perfect web wonders and
                        redefine digital brilliance. I love to work on web
                        application using technologies like HTML, CSS, React,
                        Tailwind, Node JS and Express JS.
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration-300
                            className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-110 hover:to-blue-800 cursor-pointer duration-300 gap-x-3"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <FaCircleArrowRight size={25} />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="pb-3 md:p-0">
                    <img
                        src={HeroImage}
                        alt="my-profile-snap"
                        className="rounded-2xl mx-auto w-3/6 md:w-4/6 "
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
