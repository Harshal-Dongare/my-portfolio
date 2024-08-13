import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const socialLinks = [
        {
            _id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/harshal-dongare-0a249829a/",
            style: "rounded-tr-md",
        },
        {
            _id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/harshal-dongare",
        },
        {
            _id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:harshaldongare.corp@gmail.com",
        },
        {
            _id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/Harshal-Dongare-Resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <div className="hidden lg:flex top-[35%] left-0 fixed">
            <ul>
                {socialLinks.map(({ _id, child, href, style, download }) => (
                    <li
                        key={_id}
                        className={`${style} flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300`}
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full neon-effect-div text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
