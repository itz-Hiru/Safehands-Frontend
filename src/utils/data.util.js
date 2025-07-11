import { LuCirclePlus, LuLayoutDashboard, LuLogOut } from "react-icons/lu"

export const NAV_ITEMS = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Testimonials", path: "#testimonials" },
];

export const SIDE_MENU_DATA = [
    { label: "Dashboard", path: "/admin/dashboard", icon: LuLayoutDashboard },
    { label: "Create Service", path: "/admin/create", icon: LuCirclePlus },
    { label: "Logout", path: "logout", icon: LuLogOut },
]