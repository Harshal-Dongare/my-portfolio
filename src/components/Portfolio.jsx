import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
    // link handler for Demo and Code links
    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    const projectList = [
        {
            _id: 1,
            src: arrayDestruct,
            codeLink: "https://github.com/harshal-dongare",
            demoLink: "https://www.google.com/",
        },
        {
            _id: 2,
            src: reactParallax,
            codeLink: "https://github.com/harshal-dongare",
            demoLink: "https://www.google.com/",
        },
        {
            _id: 3,
            src: navbar,
            codeLink: "https://github.com/harshal-dongare",
            demoLink: "https://www.google.com/",
        },
        {
            _id: 4,
            src: reactSmooth,
            codeLink: "https://github.com/harshal-dongare",
            demoLink: "https://www.google.com/",
        },
        {
            _id: 5,
            src: installNode,
            codeLink: "https://github.com/harshal-dongare",
            demoLink: "https://www.google.com/",
        },
        {
            _id: 6,
            src: reactWeather,
            codeLink: "https://github.com/harshal-dongare",
            demoLink: "https://www.google.com/",
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
