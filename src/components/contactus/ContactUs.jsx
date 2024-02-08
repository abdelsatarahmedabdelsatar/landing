import React, { useState } from "react";
import Lottie from "lottie-react";
import conatct from "../../contact.json";
import gmail from "../../images/Animation - 1707000297621.json";
import watsapp from "../../images/Animation - 1707000348040.json";
import location from "../../images/Animation - 1707000451498.json";
import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const sendMail = (e) => {
    e.preventDefault();
    // if (
    //   nameCheck &&
    //   mailCheck &&
    //   messageCheck &&
    //   document.getElementById("name").value !== "" &&
    //   document.getElementById("email").value !== ""
    // ) {
    emailjs
      .sendForm(
        "service_s5kj2ws",
        "template_atx1sut",
        form.current,
        "7Npc3h8KyBV8JApl0"
      )
      .then(
        () => {
          // setTimeout(function () {
          // window.location.href = "/";
          // }, 2500);
        },
        (error) => {
          alert(error.text);
        }
      );
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div id="contact" className="flex justify-between lg:flex-row  xs:flex-col">
      <div className="bg-[#48866dd9] w-full text-center py-10  ">
        <h2 className="font-extrabold text-6xl py-4 text-gray-100">Contacts</h2>
        <p className="font-bold text-3xl py-2 text-gray-200">Company owner:</p>
        <p className="font-bold text-2xl text-gray-200 py-2">
          Saleh Amir Saleh Hallabi Almarri
        </p>
        <p className="font-bold text-2xl py-2 text-gray-200 flex items-center justify-center">
          <Lottie
            className="contact__animation"
            animationData={location}
            style={{ height: 40 }}
          />
          P.O. Box: 43
        </p>
        <p className="font-bold text-2xl py-2  text-gray-200 flex items-center justify-center">
          <Lottie
            className="contact__animation"
            animationData={watsapp}
            style={{ height: 40 }}
          />
          +971501686816
        </p>
        <p className="font-bold text-2xl py-2 text-gray-200 flex items-center justify-center">
          <Lottie
            className="contact__animation"
            animationData={gmail}
            style={{ height: 40 }}
          />
          salehallabi@gmail.com :
        </p>
      </div>
      <div className="bg-[#48866d] w-full py-10 text-center text-white">
        <h2 className="font-extrabold text-6xl py-4 px-6 text-gray-100">
          Get In Touch
        </h2>
        <p className="font-bold text-xl py-2 text-gray-200">
          Send Message to Us
          <br /> To Know More About Our Services
        </p>
        <div className="flex justify-around py-10">
          <form ref={form} onSubmit={sendMail}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block mx-auto my-3 p-3 rounded-xl focus:outline-none border-[#1a332a] w-64 bg-[#6dcaa54f] placeholder:text-white"
            />
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block mx-auto my-3 p-3 rounded-xl focus:outline-none border-[#1a332a] w-64 bg-[#6dcaa54f] placeholder:text-white"
            />
            <textarea
              type=""
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block mx-auto my-3 p-3 rounded-xl focus:outline-none border-[#1a332a] w-64 bg-[#6dcaa54f] placeholder:text-white"
            />
            <button
              type="submit"
              className="bg-[#52be2e67] p-3 px-6 rounded-3xl"
            >
              Send Message
            </button>
          </form>
          <Lottie
            className="contact__animation"
            animationData={conatct}
            style={{ height: 220 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
