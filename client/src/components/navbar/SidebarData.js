import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Users",
    path: "/admin/users",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Create Notice",
    path: "/admin/notices",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Notices",
    path: "/admin/users",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/admin/notices",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
