import type { FC } from "react";
import { NavLink } from "react-router-dom";

interface LogoProps {
  logoStyles?: string;
  dotStyles?: string;
}

const Logo: FC<LogoProps> = ({ logoStyles, dotStyles }) => {
  return (
    <NavLink
      to="/"
      className={`flex cursor-pointer  items-center gap-1 font-bold  ${logoStyles}`}
    >
      <div className="text-shadow relative  whitespace-nowrap font-semibold leading-tight tracking-wider">
        FB3
        <div
          className={`absolute  bottom-[0.2rem] -right-[0.2rem] self-end  rounded-full ${dotStyles}`}
        />
      </div>
    </NavLink>
  );
};

export default Logo;
