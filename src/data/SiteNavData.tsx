import { ReactNode } from "react";
import { ReactComponent as Home20 } from "../assets/icons/home20.svg";
import { ReactComponent as Balloon20 } from "../assets/icons/balloon20.svg";
import { ReactComponent as Call20 } from "../assets/icons/call20.svg";

type Section = {
  title: string;
  items: {
    tag: string;
    icon: ReactNode;
    to: string;
    end: boolean;
  }[];
};

const SiteNavData: Section[] = [
  {
    title: "Site",
    items: [
      {
        tag: "Home",
        to: "/",
        icon: <Home20 />,
        end: true,
      },
      {
        tag: "Activities",
        to: "/activity",
        icon: <Balloon20 />,
        end: false,
      },
    ],
  },
  {
    title: "Function",
    items: [
      {
        tag: "Contact",
        to: "/contact",
        icon: <Call20 />,
        end: false,
      },
    ],
  },
];

export { type Section, SiteNavData };
