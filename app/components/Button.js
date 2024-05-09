import React from "react";
import Link from "next/link";

function Button({ description, icon, onClick, href, style }) {
  const buttonProps = onClick ? { onClick } : {};
  const content = (
    <span
      className={`group relative inline-flex items-center overflow-hidden ${style}`}
    >
      <span className="absolute -end-full transition-all group-hover:end-4">
        {icon}
      </span>
      <span className="text-sm font-medium transition-all group-hover:me-4">
        {description}
      </span>
    </span>
  );

  return href ? (
    <Link href={href}>
      <button {...buttonProps}>{content}</button>
    </Link>
  ) : (
    <button {...buttonProps}>{content}</button>
  );
}

export default Button;
