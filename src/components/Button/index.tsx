"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

type ButtonProps = {
  iconLeft?: string;
  iconRight?: string;
  styles?: string;
  fn?: () => any;
  n?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  iconLeft,
  iconRight,
  styles,
  fn,
  n,
  ...props
}: ButtonProps) => {
  const defaultClasses =
    "font-bold shadow-md flex justify-around items-center w-[80px] rounded bg-black h-[50px] text-white";
  return (
    <button {...props} onClick={fn} className={`${styles || defaultClasses}`}>
      {iconLeft && <Icon icon={iconLeft} />}
      {children}
      {iconRight && <Icon icon={iconRight} />}
    </button>
  );
};
export default Button;
