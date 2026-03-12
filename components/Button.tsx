import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`inline-block font-sans text-[13px] uppercase tracking-[0.1em] font-medium text-stone bg-text-primary rounded-lg transition-colors duration-300 hover:bg-accent ${className}`}
        style={{ padding: "14px 32px" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-block font-sans text-[13px] uppercase tracking-[0.1em] font-medium text-text-primary rounded-lg transition-all duration-300 ${className}`}
      style={{
        padding: "14px 32px",
        border: "1px solid rgba(26, 26, 26, 0.15)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(26, 26, 26, 0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(26, 26, 26, 0.15)";
      }}
    >
      {children}
    </Link>
  );
}
