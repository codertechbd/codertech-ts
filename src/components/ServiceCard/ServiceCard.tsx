import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from './serviceCard.module.css'

interface ServiceCardProps {
  _id: string | number;
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  service,
}: {
  service: ServiceCardProps;
}) {
  return (
    <Link href="services" className={styles.service_card}>
      <div className="flex items-center justify-center">{service?.icon}</div>
      <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
        {service?.title}
      </h2>
      <div className="text-neutral-content text-[15px]">
        {service?.description?.slice(0, 100)}...
      </div>

      <button>
        Read More <FaLongArrowAltRight />
      </button>
    </Link>
  );
}
