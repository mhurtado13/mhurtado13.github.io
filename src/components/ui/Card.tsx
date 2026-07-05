import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-white/60 p-6 transition-shadow duration-200 hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}
