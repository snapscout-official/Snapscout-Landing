import React from "react";
import { ReactComponent as SnapScoutSmall } from "../../assets/small-logo.svg";
import { Link } from "react-scroll";
export default function TopBar() {
  return (
    <nav className="w-full py-2">
      <div className="flex justify-between items-center">
        <button>
          <Link
            className="flex items-center"
            to="hero"
            spy={true}
            smooth={true}
            offset={17}
            duration={500}
          >
            <SnapScoutSmall className="" />
            <span className="text-white font-roboto font-bold tracking-[.1rem] text-[2rem]">
              SnapScout.
            </span>
          </Link>
        </button>

        <ul className="flex justify-between space-x-16 items-center">
          <li>
            <button>
              <Link
                className="font-raleway tracking-[.2rem] text-[#CED9E0]"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                ABOUT
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                className="font-raleway tracking-[.2rem] text-[#CED9E0]"
                to="features"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                FEATURES
              </Link>
            </button>
          </li>
          <li>
            <button className="font-raleway tracking-[.2rem] text-[#CED9E0]">
              CLIENTS
            </button>
          </li>
          <li>
            <button className="font-raleway tracking-[.2rem] text-[#CED9E0]">
              HELP
            </button>
          </li>
          <li>
            <button className="px-8 py-2 border-[.1rem] rounded-full font-raleway tracking-[.2rem] text-[#CED9E0] text-[1.4rem]">
              SIGN IN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
