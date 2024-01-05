import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-3 gradient-bg">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="min-w-[200px]">
            <Image
              src="/images/light.png"
              alt="coder tech logo"
              className="w-40 lg:w-44"
              width={200}
              height={100}
            />
          </Link>

          <nav>
            <ul className="flex items-center space-x-4 text-white">
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
