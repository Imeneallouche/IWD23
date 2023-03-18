import location from "../../assets/imgs/location.png";
import phone from "../../assets/imgs/phone.png";
import email from "../../assets/imgs/email.png";
import React, { useState } from "react";
import { api } from "../../utils/api";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const fromData = { name, email, feedback };

    api
      .post("/login", fromData)
      .then((response) => {
        console.log("sent");
      })
      .catch((err) => console.log("error"));

    const formData = { name, email, feedback };
  };

  return (
    <section className="bg-[#202135]">
      <div className="text-center">
        <h2 className="text-2xl py-14 text-[#5A5C81]">CONTACT US </h2>
        <h4 className="text-4xl text-white text-bold">Let us get in touch</h4>
      </div>
      <div className="w-[90%] md:gap-x-[120px] md:py-16 md:mx-auto">
        <div className="text-center md:text-center md:mx-auto  ">
          <h2 className="text-[#7A86FF] text-2xl  font-bold py-4">
            Send us a message
          </h2>
          <p className="text-white w-[260px] mx-auto md:w-[400px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            totam quibusdam eius magnam provident. Cum corporis suscipit dolores
            a fuga et eligendi eos in temporibus est. Voluptatem mollitia enim
            nobis?
          </p>
          <div className="text-center  py-7 ">
            <form className="" onSubmit={handleSubmit}>
              <input
                className="px-7 md:w-[400px] md:mx-auto py-2 rounded-md md:block"
                type="text"
                placeholder="Enter Your Name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <input
                className="my-5 px-7 md:w-[400px] md:mx-auto py-2 rounded-md md:block"
                type="email"
                placeholder="Enter Your Email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <textarea
                className="w-[240px] md:w-[400px] h-[90px] md:h-[150px] px-7 py-2 block mx-auto"
                placeholder="Enter Your Message"
                id="feedback"
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                required
              ></textarea>
              <button
                className="bg-[#7A86FF] my-4 px-4 py-2 md:px-9 rounded-md font-bold"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
