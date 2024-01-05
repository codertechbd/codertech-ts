'use client'

import Link from "next/link";
import React from "react";

interface ButtonProps {
  link: string;
  buttonName: string;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  link,
  buttonName,
  className,
  onClick,
}) => {
  return (
    <Link href={link} onClick={onClick}>
      <button
        className={`bg-white text-gray-800 uppercase font-semibold py-2 px-4 rounded-lg ${className}`}
      >
        {buttonName}
      </button>
    </Link>
  );
};

export default PrimaryButton;
