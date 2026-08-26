import { Event } from "@/app/types/event";
import { ComponentProps } from "react";

type EventCardProps = ComponentProps<"article"> & {
  variant?: "upcoming" | "live" | "completed";
  event: Event;
};

export default function EventCard({
  variant = "upcoming",
  className = "",
  children,
  ...props
}: EventCardProps) {
  const baseStyles =
    "bg-(--third-bg) rounded-sm border border-(--third-text) cursor-pointer";

  const variants = {
    upcoming: "",
    live: "",
    completed: "",
  };

  return (
    <article
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </article>
  );
}
