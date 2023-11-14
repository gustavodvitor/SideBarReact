import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import PermMediaIcon from "@mui/icons-material/PermMedia";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Email",
    icon: <EmailIcon />,
    link: "/Email",
  },
  {
    title: "Analytics",
    icon: <AssessmentIcon />,
    link: "/analytics",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Friends",
    icon: <GroupsIcon />,
    link: "/friends",
  },
  {
    title: "Images",
    icon: <PermMediaIcon />,
    link: "/images",
  },
];
