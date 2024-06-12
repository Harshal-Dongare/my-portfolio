import React from "react";
import glamhue from "../assets/portfolio/glamhue.jpg";
import fintessmind from "../assets/portfolio/fitness-mind.jpg";
import coditor from "../assets/portfolio/coditor.jpg";
import geminiClone from "../assets/portfolio/gemini-clone.jpg";
import onBook from "../assets/portfolio/onBook.jpg";
import golfClone from "../assets/portfolio/golfClone.jpg";

const Portfolio = () => {
    // link handler for Demo and Code links
    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    const projectList = [
        {
            _id: 1,
            src: glamhue,
            codeLink: "https://github.com/Harshal-Dongare/ecommerce-portal",
            demoLink: "https://glamhue.netlify.app/",
        },
        {
            _id: 2,
            src: fintessmind,
            codeLink: "https://github.com/Harshal-Dongare/fitness-mind",
            demoLink: "https://fitness-mind.netlify.app/",
        },
        {
            _id: 3,
            src: coditor,
            codeLink: "https://github.com/Harshal-Dongare/CodeEditor",
            demoLink: "https://vanilla-coditor.netlify.app/",
        },
        {
            _id: 4,
            src: golfClone,
            codeLink:
                "https://github.com/Harshal-Dongare/SidecupFamilyGolf-Website-Clone",
            demoLink: "https://sidecupfamilyclone.netlify.app/",
        },
        {
            _id: 5,
            src: geminiClone,
            codeLink: "https://github.com/Harshal-Dongare/Gemini-Clone",
            demoLink: "https://hdgeminiclone.netlify.app/",
        },
        {
            _id: 6,
            src: onBook,
            codeLink: "https://github.com/harshal-dongare",
            demoLink: "https://onboook.netlify.app/",
        },
    ];

    return (
        <section
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                {/* Portfolio heading */}
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                {/* Cards Structure */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projectList.map(({ _id, src, codeLink, demoLink }) => (
                        <div
                            key={_id}
                            className="shadow-md shadow-cyan-500 rounded-lg"
                        >
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />

                            {/* Navigation Links */}
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={() => handleClick(demoLink)}
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-500 font-bold"
                                >
                                    Demo
                                </button>
                                <button
                                    onClick={() => handleClick(codeLink)}
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-500 font-bold"
                                >
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
