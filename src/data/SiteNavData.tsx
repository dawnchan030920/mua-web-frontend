import { ReactNode } from "react";
import { ReactComponent as Home20 } from "../assets/icons/home20.svg";
import { ReactComponent as Balloon20 } from "../assets/icons/balloon20.svg";
import { ReactComponent as Call20 } from "../assets/icons/call20.svg";
import { ReactComponent as Beaker20 } from "../assets/icons/beaker20.svg";
import { ReactComponent as School20 } from "../assets/icons/school20.svg";
import { ReactComponent as Project20 } from "../assets/icons/project20.svg";
import { ReactComponent as Recurrence20 } from "../assets/icons/recurrence20.svg";
import { ReactComponent as Home24 } from "../assets/icons/home24.svg";
import { ReactComponent as School24 } from "../assets/icons/school24.svg";
import { ReactComponent as Project24 } from "../assets/icons/project24.svg";
import { ReactComponent as Balloon24 } from "../assets/icons/balloon24.svg";
import { ReactComponent as Beaker24 } from "../assets/icons/beaker24.svg";
import { ReactComponent as Call24 } from "../assets/icons/call24.svg";
import { ReactComponent as Recurrence24 } from "../assets/icons/recurrence24.svg";

type Item = {
  tag: string;
  icon: ReactNode;
  to: string;
  end: boolean;
}

type Section = {
  title: string;
  items: Item[];
};

const SiteNavData: Section[] = [
  {
    title: "站点",
    items: [
      {
        tag: "首页",
        to: "/",
        icon: <Home20 />,
        end: true,
      },
      {
        tag: "学校",
        to: "/school",
        icon: <School20 />,
        end: false,
      },
      {
        tag: "联合项目",
        to: "/project",
        icon: <Project20 />,
        end: false,
      },
      {
        tag: "联合活动",
        to: "/activity",
        icon: <Balloon20 />,
        end: false,
      },
      {
        tag: "复原项目",
        to: "/recurrence",
        icon: <Recurrence20 />,
        end: false,
      },
      {
        tag: "实验性",
        to: "/other",
        icon: <Beaker20 />,
        end: false,
      }
    ],
  },
  {
    title: "功能",
    items: [
      {
        tag: "联系我们",
        to: "/contact",
        icon: <Call20 />,
        end: false,
      },
    ],
  },
];

enum SiteNavKey {
  Home, School, Project, Activity, Other, Contact, Recurrence
}

const SiteNavMap: Record<SiteNavKey, Item> = {
  [SiteNavKey.Home]: {
    tag: "首页",
    to: "/",
    icon: <Home24 />,
    end: false,
  },
  [SiteNavKey.School]: {
    tag: "学校",
    to: "/school",
    icon: <School24 />,
    end: false,
  },
  [SiteNavKey.Project]: {
    tag: "联合项目",
    to: "/project",
    icon: <Project24 />,
    end: false,
  },
  [SiteNavKey.Activity]: {
    tag: "联合活动",
    to: "/activity",
    icon: <Balloon24 />,
    end: false,
  },
  [SiteNavKey.Other]: {
    tag: "实验性",
    to: "/other",
    icon: <Beaker24 />,
    end: false,
  },
  [SiteNavKey.Contact]: {
    tag: "联系我们",
    to: "/contact",
    icon: <Call24 />,
    end: false,
  },
  [SiteNavKey.Recurrence]: {
    tag: "复原项目",
    to: "/recurrence",
    icon: <Recurrence24 />,
    end: false,
  },
}

export { type Section, type Item, SiteNavKey, SiteNavData, SiteNavMap };
