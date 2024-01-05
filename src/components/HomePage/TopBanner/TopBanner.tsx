import PrimaryButton from "@/components/UI/Button/PrimaryButton";
import Image from "next/image";
import { TiMediaPlayOutline } from "react-icons/ti";

export default function TopBanner() {
  return (
    <>
      <section className="gradient-bg text-white">
        <div className="container grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-5xl font-semibold">
              A digital agency shaping ideas into products
            </h1>
            <p className="my-5">
              There are endless possibilities in building your own business. It
              all starts with an idea.
            </p>
            <div className="flex items-center gap-3">
              <PrimaryButton link="/contact" buttonName="Contact Us" />
              <button className="bg-gray-200 p-1 rounded-full animate-pulse">
                <TiMediaPlayOutline className="w-10 h-10 p-1 gradient-bg rounded-full" />
              </button>

              {/* <div className="pulse flex items-center justify-center">
                <TiMediaPlayOutline className="w-10 h-10" />
              </div> */}
            </div>
          </div>
          <div className="mx-auto">
            <Image
              src="/images/creator-bro.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          style={{ fill: "#ffffff", width: "100%", height: 145 }}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#5b00ce", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#dc02ce", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
          />
        </svg>
      </div>
    </>
  );
}
