import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  description,
  centered = true,
  align,
  className,
  children,
}: SectionHeadingProps) {
  const textAlign = align || (centered ? "center" : "left");
  const descText = description || subtitle;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        textAlign === "center" && "text-center",
        textAlign === "left" && "text-left",
        textAlign === "right" && "text-right",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {descText && (
        <p className={cn(
          "text-muted-foreground text-lg max-w-2xl",
          textAlign === "center" && "mx-auto"
        )}>
          {descText}
        </p>
      )}
      {children}
    </motion.div>
  );
}
