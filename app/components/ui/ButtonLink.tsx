import Link from "next/link";
import { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const baseStyles = `focus-visible:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-(--accentColor) 
    focus-visible:ring-offset-2 
    focus-visible:ring-offset-(--primary-bg) 
    uppercase 
    text-(--primary-text) 
    rounded-sm 
    w-fit 
    py-2 
    px-12 
    font-semibold 
    font-(family-name:--font-heading)
    max-sm:w-full 
    max-sm:text-center`;

  const variants = {
    primary: "bg-(--accentColor)",
    secondary: "bg-(--primary-bg) border-(--third-text) border",
  };

  return (
    <Link
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
