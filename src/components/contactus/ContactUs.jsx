import React, { useState } from "react";
import Lottie from "lottie-react";
import conatct from "../../contact.json";
import gmail from "../../images/Animation - 1707000297621.json";
import watsapp from "../../images/Animation - 1707000348040.json";
import location from "../../images/Animation - 1707000451498.json";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const sendMail = (e) => { 
    e.preventDefault();
    const parError = document.getElementById("error");
    if (
      email !== "" &&
      name !== "" &&
      message !== "" &&
      /^[a-zA-z]+[0-9]+@[a-z]+\.com/.test(email)
    ) {
      emailjs
        .sendForm(
          "service_2zi8err",
          "template_yrsblyf",
          form.current,
          "0Jh1jLkKgBrlFYTvw"
        )
        .then(
          () => {
            parError.style.display = "none";
            setTimeout(function () {
              window.location.href = "/";
            }, 1000);
          },
          (error) => {
            alert(error.text);
          }
        );
      setEmail("");
      setMessage("");
      setName("");
    } else {
      parError.innerText = t("contactError");
      parError.style.display = "block";
    }
  };

  return (
    <div id="contact" className="flex justify-between lg:flex-row  xs:flex-col">
      <div className="contactLeft__section contactLeft__section w-full text-center py-10  ">
        <h2 className="font-extrabold text-6xl py-4 text-gray-100">
          {t("Contacts")}
        </h2>
        <div className="font-bold text-2xl py-2 text-gray-200 flex items-center justify-center">
          <Lottie
            className="contact__animation"
            animationData={location}
            style={{ height: 40 }}
          />
          P.O. Box: 43
        </div>
        <div className="font-bold text-2xl py-2  text-gray-200 flex items-center justify-center">
          <Lottie
            className="contact__animation"
            animationData={watsapp}
            style={{ height: 40 }}
          />
          +971542389928
        </div>
        <div className="font-bold text-2xl py-2 text-gray-200 flex items-center justify-center">
          <Lottie
            className="contact__animation"
            animationData={gmail}
            style={{ height: 40 }}
          />
          support@thegreenyard.online
        </div>
      </div>
      <div className=" contactRight__section w-full py-10 text-center text-white">
        <h2 className="font-extrabold text-6xl py-4 px-6 text-gray-100">
          {t("Get In Touch")}
        </h2>
        <p className="font-bold text-xl py-2 text-gray-200">
          {t("Send Message to Us")}
          <br /> {t("To Know More About Our Services")}
        </p>
        <div className=" flex sm:flex-row xs:flex-col justify-around py-10">
          <form ref={form} onSubmit={sendMail}>
            <input
              type="text"
              placeholder={t("name")}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block mx-auto my-3 p-3 rounded-xl focus:outline-none border-[#1a332a] w-64 bg-[#6dcaa54f] placeholder:text-white"
            />
            <input
              type="text"
              name="email"
              placeholder={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block mx-auto my-3 p-3 rounded-xl focus:outline-none border-[#1a332a] w-64 bg-[#6dcaa54f] placeholder:text-white"
            />
            <textarea
              type=""
              placeholder={t("message")}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block mx-auto my-1 p-3 rounded-xl focus:outline-none border-[#1a332a] w-64 bg-[#6dcaa54f] placeholder:text-white"
            />
            <p id="error" className="text-red-400 py-1">
              
            </p>
            <button
              type="submit"
              className="bg-[#52be2e67] p-3 px-6 rounded-3xl"
            >
              {t("Send Message")}
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
