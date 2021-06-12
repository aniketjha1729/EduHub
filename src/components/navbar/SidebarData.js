import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Admin",
    path: "/admin",
    icon: <FaIcons.FaAdn />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Notices",
    path: "/admin/notices",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Create Notice",
    path: "/admin/createnotice",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/teams",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
