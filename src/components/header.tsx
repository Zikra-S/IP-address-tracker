import type { ReactNode } from "react";
import patternDesktop from "../assets/images/pattern-bg-desktop.png";
import patternMobile from "../assets/images/pattern-bg-mobile.png";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="relative isolate flex h-75 flex-col items-center gap-6 px-6 pt-6 md:h-70 md:pt-8">
      <picture>
        <source media="(min-width: 768px)" srcSet={patternDesktop} />
        <img src={patternMobile} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      </picture>

      <h1 className="text-2xl font-medium text-white md:text-[26px]">IP Address Tracker</h1>

      {children}
    </header>
  );
}
