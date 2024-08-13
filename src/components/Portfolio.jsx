import React from "react";
import glamhue from "../assets/portfolio/glamhue.jpg";
import fintessmind from "../assets/portfolio/fitness-mind.jpg";
import coditor from "../assets/portfolio/coditor.jpg";
import geminiClone from "../assets/portfolio/geminiClone.jpg";
import doanddice from "../assets/portfolio/doanddice.png";
import golfClone from "../assets/portfolio/golfClone.jpg";
import codepen from "../assets/portfolio/codepen.png";
import craftMyResume from "../assets/portfolio/craftMyResume.png";
import instantLogo from "../assets/portfolio/instantLogo.png";

const Portfolio = () => {
    // Link handler for Demo and Code links
    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    const projectList = [
        {
            _id: 1,
            src: craftMyResume,
            codeLink: "https://github.com/Harshal-Dongare/craft-my-resume",
            demoLink: "https://craft-my-resume-52b4e.web.app/",
            title: "Craft My Resume",
        },
        {
            _id: 2,
            src: codepen,
            codeLink: "https://github.com/Harshal-Dongare/codepal",
            demoLink: "https://resume-codepen.web.app/home/auth",
            title: "Codepen",
        },
        {
            _id: 3,
            src: instantLogo,
            codeLink: "https://github.com/Harshal-Dongare/logo-maker",
            demoLink: "https://instant-logo.netlify.app/",
            title: "Instant Logo",
        },
        {
            _id: 4,
            src: geminiClone,
            codeLink: "https://github.com/Harshal-Dongare/Gemini-Clone",
            demoLink: "https://hdgeminiclone.netlify.app/",
            title: "Gemini Clone",
        },
        {
            _id: 5,
            src: glamhue,
            codeLink: "https://github.com/Harshal-Dongare/ecommerce-portal",
            demoLink: "https://glamhue.netlify.app/",
            title: "GlamHue",
        },
        {
            _id: 6,
            src: fintessmind,
            codeLink: "https://github.com/Harshal-Dongare/fitness-mind",
            demoLink: "https://fitness-mind.netlify.app/",
            title: "Fitness Mind",
        },
        {
            _id: 7,
            src: golfClone,
            codeLink:
                "https://github.com/Harshal-Dongare/SidecupFamilyGolf-Website-Clone",
            demoLink: "https://sidecupfamilyclone.netlify.app/",
            title: "Golf Clone",
        },
        {
            _id: 8,
            src: doanddice,
            codeLink: "https://github.com/Harshal-Dongare/do-and-dice",
            demoLink: "https://main--doanddice.netlify.app/",
            title: "Do and Dice",
        },
    ];

    return (
        <section
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                {/* Portfolio heading */}
                <div className="pb-8">
                    <p className="text-6xl font-bold inline border-b-4 border-blue-500">
                        <span className="text-white font-styleScript font-medium neon-effect">
                            Portfolio
                        </span>{" "}
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                {/* Cards Structure */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projectList.map(
                        ({ _id, src, codeLink, demoLink, title }) => (
                            <div
                                key={_id}
                                className="relative shadow-md shadow-cyan-500 rounded-lg hover:shadow-red-500 cursor-pointer"
                            >
                                <div className="relative group hover:z-20">
                                    <img
                                        src={src}
                                        alt={title}
                                        className="rounded-md transition-transform duration-300 group-hover:scale-150 group-hover:z-20"
                                    />
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {title}
                                    </span>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={() => handleClick(demoLink)}
                                        className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 hover:text-cyan-500 font-bold"
                                    >
                                        Demo
                                    </button>
                                    <button
                                        onClick={() => handleClick(codeLink)}
                                        className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 hover:text-cyan-500 font-bold"
                                    >
                                        Code
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
