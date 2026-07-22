"use client";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import EnquiryModal, { type EnquiryFormData } from "./EnquiryModal";
import { useState } from "react";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "md" | "lg";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  opensEnquiryModal?: boolean;
};

type LinkButtonProps = SharedButtonProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: ComponentProps<typeof Link>["href"];
  };

type NativeButtonProps = SharedButtonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseStyles =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-[7px] border text-center font-semibold leading-none tracking-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B77F3] disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-[#2B77F3] bg-[#2B77F3] text-white shadow-[0_1px_2px_rgba(15,23,42,0.08)] hover:border-[#1767dc] hover:bg-[#1767dc]",
  outline:
    "border-[#2B77F3] bg-white text-[#2B77F3] shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:bg-blue-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-[42px] min-w-[171px] px-7 text-[20px]",
  lg: "h-[51px] min-w-[198px] px-8 text-[20px]",
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Button({
  children,
  className,
  showArrow = false,
  size = "md",
  variant = "primary",
  opensEnquiryModal = false,
  ...props
}: ButtonProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const buttonClassName = cx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <span
          aria-hidden="true"
          className="text-[24px] leading-none"
        >
          &rsaquo;
        </span>
      )}
    </>
  );

  const handleEnquirySubmit = (data: EnquiryFormData) => {
    console.log("Enquiry submitted:", data);
  };

  // Link buttons should not open the modal.
  if ("href" in props && props.href !== undefined) {
    return (
      <Link
        {...props}
        className={buttonClassName}
      >
        {content}
      </Link>
    );
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    props.onClick?.(event);

    if (!event.defaultPrevented && opensEnquiryModal) {
      setIsEnquiryOpen(true);
    }
  };

  return (
    <>
      <button
        {...props}
        className={buttonClassName}
        onClick={handleClick}
      >
        {content}
      </button>

      {opensEnquiryModal && (
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          onSubmit={handleEnquirySubmit}
        />
      )}
    </>
  );
}
