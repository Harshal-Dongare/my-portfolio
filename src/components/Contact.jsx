import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://getform.io/f/warkreqb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            } else {
                alert("Form submitted successfully.");
            }

            // Clear form fields after successful submission
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            // alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again later.");
        }
    };

    return (
        <section
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                        Contact
                    </p>
                    <p className="py-6">
                        Submit the form below to get in touch with me
                    </p>
                </div>

                {/* Enquiry Form */}
                <div className="flex justify-center items-center">
                    <form
                        onSubmit={handleSubmit}
                        action="https://getform.io/f/warkreqb"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="message"
                            rows={10}
                            placeholder="Enter your message"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>

                        <button
                            type="submit"
                            className="text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:to-blue-800 hover:scale-110 duration-300"
                        >
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
