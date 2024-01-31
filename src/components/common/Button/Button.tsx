import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

export const Button = ({
  children,
  type = "button",
  disabled,
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button
    type={type}
    className={cn(
      "min-w-[218px] py-4 px-5 me-2 mb-2 text-base focus:outline-none bg-white rounded-[62px] border border-gray-200",
      className,
      { "cursor-not-allowed": disabled, "hover:bg-gray-100": !disabled },
    )}
    {...props}
  >
    {children}
  </button>
);
