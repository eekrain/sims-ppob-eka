import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router";

type Props = {
  className?: string;
  to: string;
} & PropsWithChildren;

export const MyNavLink = ({ to, children, className }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "font-semibold text-muted-foreground hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
          isActive && "text-red-600",
          className,
        )
      }
    >
      {children}
    </NavLink>
  );
};
