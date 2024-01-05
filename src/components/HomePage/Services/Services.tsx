import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { MdAppSettingsAlt } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default function Services() {
  const services = [
    {
      _id: 1,
      title: "Web Development",
      slug: "web-development",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia odit officiis eos dolor ab modi corporis beatae odio! Nostrum, iste?",
      icon: <TbWorld className="h-10 w-10" />,
    },
    {
      _id: 2,
      title: "App Development",
      slug: "app-development",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia odit officiis eos dolor ab modi corporis beatae odio! Nostrum, iste?",
      icon: <MdAppSettingsAlt className="h-10 w-10" />,
    },
  ];

  return (
    <div className="container py-10 md:py-20">
      <div className="text-center w-1/2 mx-auto">
        <h1 className="text-3xl font-medium mb-2">Our Services</h1>
        <p className="text-gray-600">
          We are committed to digitalizing your business. We provide Integrated
          marketing company that delivers graphics, web, and marketing solutions
          for businesses of all sizes.
        </p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-10 mt-10">
        {
            services?.map(service => (
                <ServiceCard key={service?._id} service={service}  />
            ))
        }
      </div>
    </div>
  );
}
