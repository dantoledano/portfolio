import { useRef, useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p52odhd", "template_jq7r62p", form.current, {
        publicKey: "4OvDc6okEr3v3NsfQ",
      })
      .then(
        () => {
          setMessage("Email sent successfully 🥳 Thank You!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Failed to send email. Please try again."); // Handle error
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get In Touch
        </motion.h2>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="max-w-md mx-auto border rounded-2xl flex flex-col gap-y-6 pb-10 p-6 w-full shadow-xl shadow-gray-500 mb-10"
        >
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-purple-950 transition-all"
            type="text"
            name="from_name"
            placeholder="Your Name"
          />
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-purple-950 transition-all"
            type="email"
            name="user_email"
            placeholder="Your Email"
          />
          <textarea
            placeholder="Your Message"
            className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-purple-950 transition-all"
            name="message"
          ></textarea>

          <div className="flex justify-center">
            <button className="bg-purple-950 text-white bg-opacity-40 inline-block text-sm rounded shadow-lg hover:bg-purple-900 hover:scale-105 transition transform duration-200 ease-in-out px-4 py-2">
              Send Message
            </button>
          </div>
          {message && <div className="text-center mt-4">{message}</div>}
        </motion.form>
        <div className="text-center tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="pb-4"
          >
            {CONTACT.email}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="bolder bg-gradient-to-r from-purple-100 via-slate-500 to-purple-900 bg-clip-text text-xl lg:text-2xl tracking-tight text-transparent"
          >
            By Dan Toledano
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
