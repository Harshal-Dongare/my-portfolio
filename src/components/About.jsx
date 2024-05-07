import React from "react";

const About = () => {
    return (
        <section
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                        About
                    </p>
                </div>
                <p className="text-2xl mt-20">
                    My name is Harshal Dongare, I'm a{" "}
                    <span className="font-styleScript text-cyan-500">
                        front-end
                    </span>{" "}
                    developer based in Thane, Maharashtra, India. I have
                    developed many types of front-ends from well know DJ
                    applications to E-commerce booking platforms.
                </p>
                <br />
                <p className="text-2xl">
                    I'm passionate about cutting-edge, pixel-perfect, beautiful
                    interfaces and intuitively implemented UX.
                </p>
            </div>
        </section>
    );
};

export default About;
