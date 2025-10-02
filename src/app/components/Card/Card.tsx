import React from "react";

type CardVariant = "primary" | "secondary" | "outline";

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: CardVariant;
}

export default function Card({
  title,
  children,
  variant = "primary",
}: CardProps) {
  const baseClass =
    "w-[320px] h-auto rounded-2xl p-6 transition-all duration-300";

  const variantClasses: Record<CardVariant, string> = {
    primary:
      "bg-gradient-to-br from-orange-200 to-orange-100 border border-orange-300 text-gray-900 shadow-md hover:shadow-lg",
    secondary:
      "bg-white border border-gray-200 text-gray-800 shadow-sm hover:shadow-md",
    outline:
      "bg-transparent border-2 border-orange-400 text-gray-700 hover:bg-orange-50 hover:shadow-sm",
  };

  return (
    <div className={`${baseClass} ${variantClasses[variant]}`}>
      <h2 className="text-xl font-bold mb-3 tracking-tight">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
