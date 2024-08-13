import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import reactQuery from "../assets/reactQuery.png";
import node from "../assets/node.png";
// import html from "../assets/html.png";
// import html from "../assets/html.png";

const TechStack = () => {
    const techList = [
        {
            _id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            _id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            _id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            _id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            _id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            _id: 6,
            src: github,
            title: "Git",
            style: "shadow-gray-400",
        },
        {
            _id: 7,
            src: firebase,
            title: "Firebase",
            style: "shadow-orange-500",
        },
        {
            _id: 8,
            src: redux,
            title: "Redux",
            style: "shadow-violet-400",
        },
        {
            _id: 9,
            src: sass,
            title: "Sass",
            style: "shadow-pink-400",
        },
        {
            _id: 10,
            src: reactQuery,
            title: "React Query",
            style: "shadow-red-400",
        },
        {
            _id: 11,
            src: node,
            title: "Node",
            style: "shadow-green-400",
        },
    ];
    return (
        <section
            name="techstack"
            className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-16"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="pb-8">
                    <p className="text-6xl font-bold border-b-4 border-blue-500 inline">
                        <span className="text-white font-styleScript font-medium neon-effect">
                            TechStack
                        </span>{" "}
                    </p>
                    <p className="py-6">
                        These are the technologies I've' worked with
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techList.map(({ _id, src, title, style }) => (
                        <div
                            key={_id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
