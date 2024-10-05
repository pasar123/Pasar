"use client";

import React from "react";

interface ButtonGradientProps {
  title?: string;
  onClick?: () => void;
}

const ButtonGradient: React.FC<ButtonGradientProps> = ({ title = 'View all integrations!', onClick }) => {
  return (
    <button
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-xl"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonGradient;
