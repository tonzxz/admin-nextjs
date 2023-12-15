import React, { MouseEvent } from "react";
import Link from "next/link";

interface Props {
  children: string;
  href?: string; // Make href prop optional
  className?: string;
  onSubmit?: (e: MouseEvent<HTMLButtonElement>) => void; // Add onSubmit prop
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, href, className, onSubmit, type }: Props) => {
  if (href) {
    // If there's an href, render a Link with a button inside
    return (
      <Link href={href} passHref>
        <button className={className}>{children}</button>
      </Link>
    );
  } else {
    // If there's no href, render a regular button with onSubmit event
    return (
      <button className={className} onClick={onSubmit} type={type}>
        {children}
      </button>
    );
  }
};

export default Button;
