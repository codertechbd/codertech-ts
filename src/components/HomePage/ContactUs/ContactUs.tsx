import { FaMailBulk, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function ContactUs() {
  return (
    <div className="container py-10 lg:py-20 grid md:grid-cols-2 grid-cols-1 gap-20 items-start">
      <div>
        <h1 className="text-2xl md:text-3xl font-medium">Contact Us</h1>
        <p className="text-gray-600">
          Thank you for interest in our service. Please fil up the form below or
          email us.
        </p>

        <div className="mt-6 flex flex-col gap-1.5 text-gray-600">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <p>0123456900</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp />
            <p>0123456900</p>
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail />
            <p>khalid@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationPin />
            <p>123, Jalan 1, Taman 2, 12345, Kuala Lumpur</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-secondary font-semibold text-xl mb-3">
          Get In Touch
        </h2>
        <form className="flex flex-col gap-3">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border-2 focus:border-primary rounded px-4 py-2 outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full border-2 focus:border-primary rounded px-4 py-2 outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border-2 focus:border-primary rounded px-4 py-2 outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full border-2 focus:border-primary rounded px-4 py-2 outline-none"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Type you message..."
              className="w-full border-2 focus:border-primary rounded px-4 py-2 outline-none "
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="gradient-bg px-4 py-2 rounded-lg text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
