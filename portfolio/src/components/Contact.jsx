import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current,
        "your_public_key"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6" data-aos="fade-up">Contact</h3>

        <div className="glass rounded-lg p-6" data-aos="fade-up">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full mt-1 p-3 rounded-lg bg-white/5 border border-white/10 outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full mt-1 p-3 rounded-lg bg-white/5 border border-white/10 outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 p-3 rounded-lg bg-white/5 border border-white/10 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary glass px-6 py-3 text-sm mt-4"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm mt-3 text-indigo-200">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
