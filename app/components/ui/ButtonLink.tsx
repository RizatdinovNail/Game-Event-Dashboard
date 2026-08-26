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
  const baseStyles = "";

  const variants = {
    primary:
      "bg-(--accentColor) uppercase text-(--primary-text) rounded-sm w-fit py-2 px-12 font-semibold font-(family-name:--font-heading) max-sm:w-full max-sm:text-center",
    secondary:
      "bg-(--primary-bg) uppercase text-(--primary-text) rounded-sm w-fit py-2 px-12 font-semibold font-(family-name:--font-heading) border-(--third-text) border-1 max-sm:w-full max-sm:text-center",
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
