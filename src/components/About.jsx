import React from "react";

const About = () => {
    return (
        <section
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-6xl font-bold inline border-b-4 border-blue-500">
                        <span className="text-white font-styleScript font-medium neon-effect">
                            About
                        </span>{" "}
                    </p>
                </div>
                <p className="text-2xl mt-20 leading-relaxed">
                    My name is Harshal Dongare, I'm a{" "}
                    <span className="font-styleScript text-cyan-500">
                        front-end
                    </span>{" "}
                    developer based in Thane, Maharashtra, India. I have
                    developed a wide range of front-end applications,
                    demonstrating my ability to create user-friendly and
                    efficient interfaces for various types of platforms.
                </p>
                <br />
                <p className="text-2xl leading-relaxed">
                    I'm passionate about cutting-edge, pixel-perfect, beautiful
                    interfaces and intuitively implemented UX.
                </p>
            </div>
        </section>
    );
};

export default About;
