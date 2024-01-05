import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container py-10 lg:py-20">
      <div className="grid md:grid-cols-2 items-center gap-20">
        <div className="">
          <h1 className="text-2xl md:text-3xl font-medium">
            Empowering Digital Success with
          </h1>
          <p className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-3xl font-semibold">
            Coder Tech
          </p>
          <p className="text-justify mt-5 text-gray-600">
            We are a team of talented digital experts who constantly looking for
            creative challenges. We strongly believe combining tech and creative
            can make digital experiences more engaging. We help our clients
            succeed by creating brand identities, digital experiences, and print
            materials that communicate clearly, achieve marketing goals, and
            look fantastic.
          </p>
        </div>
        <div className="mx-auto">
          <Image
            src="/images/aboutUs.jpg"
            width={600}
            height={600}
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
}
