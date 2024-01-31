import { InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

type Props = {
  icon?: ReactNode;
};

export const Input = ({
  icon,
  className,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative w-full">
    {icon && (
      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        {icon}
      </div>
    )}
    <input
      className={cn(
        "bg-whiteSmoke text-base rounded-[62px] focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        className,
        { ["ps-[54px]"]: icon },
      )}
      {...props}
    />
  </div>
);
