import clsx from "clsx";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "medium",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-orange-500 text-white shadow hover:bg-orange-600 focus:ring-orange-500",
    secondary:
      "bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "border border-orange-400 text-orange-500 bg-transparent hover:bg-orange-50 focus:ring-orange-400",
  };

  const sizes: Record<ButtonSize, string> = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      {...props}
      className={clsx(baseClass, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}
