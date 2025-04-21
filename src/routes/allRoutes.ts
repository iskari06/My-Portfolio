import { constantRoutes } from "./constantRoutes";
import { JSX } from "react";

import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Socials from "../pages/Socials";
import Works from "../pages/Works";

export type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement | null>;
};

export interface IRoute {
	key: string;
	path: string;
	name: string;
  element: () => JSX.Element;
}

export const PageRoutes: IRoute[] = [
	{ key: "home",
    path: constantRoutes.home,
    name: "Home",
    element: Home
  },
	{ key: "aboutme",
    path: constantRoutes.aboutme,
    name: "About Me",
    element: AboutMe
  },
  { key: "works",
    path: constantRoutes.works,
    name: "Works",
    element: Works
  },
	{ key: "socials",
    path: constantRoutes.socials,
    name: "Socials",
    element: Socials
  },
];
