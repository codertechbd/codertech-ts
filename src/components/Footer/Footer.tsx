import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Footer() {
  return (
    <footer className="pt-10 pb-5 font-extralight bg-gray-800 text-gray-300">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="w-max">
              <Link href="/">
                <Image
                  src="/images/light.png"
                  alt="coder tech logo"
                  className="w-40 lg:w-44"
                  width={200}
                  height={100}
                />
              </Link>
            </div>
            <div className="mt-2 text-sm">
              <p>
                If you have the Commitment and Desire to develop your eCommerce
                business we have the experience and expertise to make it
                success!
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-base font-semibold uppercase">
              Popular Services
            </h2>
            <ul className="text-sm flex flex-col gap-1">
              <li>
                <Link href={`/service`} className="hover:underline">
                  Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-semibold uppercase">
              Quick Link
            </h2>
            <ul className="text-sm flex flex-col gap-1">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/career" className="hover:underline">
                  Career
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:underline">
                  Return Policy
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-semibold uppercase">
              Get in Touch
            </h2>
            <ul className="text-sm">
              <li className="mb-1">
                <p>Dinajpur, Bangladesh</p>
              </li>
              <li className="mb-1">
                <p>01234567890</p>
              </li>
              <li>
                <p>khalid@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />

        <div className="sm:flex sm:items-center sm:justify-between opacity-80">
          <span className="text-sm">
            © 2017 - 2023 <span className="text-primary">eManager</span>. All
            Rights Reserved.
          </span>
          <ul className="flex items-center gap-2 mt-3 sm:mt-0">
            <li>
              <Link href="/" target="_blank">
                <BsFacebook className="text-lg hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link
                href={`https://api.whatsapp.com/send?phone`}
                target="_blank"
              >
                <IoLogoWhatsapp className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <AiFillInstagram className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsYoutube className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
