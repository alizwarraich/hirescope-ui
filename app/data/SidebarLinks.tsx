import { BiUserCircle } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { TbBuildingCommunity } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

interface LinkProps {
    name: string;
    path: string;
    icon: (props: { color: string }) => JSX.Element;
}

export const links: LinkProps[] = [
    {
        name: "Profile",
        path: "/profile",
        icon: ({ color }) => {
            return <BiUserCircle className={`w-6 h-6 text-${color}-500`} />;
        },
    },
    {
        name: "Applications",
        path: "/applications",
        icon: ({ color }) => {
            return (
                <AiOutlineFolderOpen className={`w-6 h-6 text-${color}-500`} />
            );
        },
    },
    {
        name: "Resume",
        path: "/resume",
        icon: ({ color }) => {
            return <RiPagesLine className={`w-6 h-6 text-${color}-500`} />;
        },
    },
    {
        name: "Property",
        path: "/property",
        icon: ({ color }) => {
            return (
                <TbBuildingCommunity className={`w-6 h-6 text-${color}-500`} />
            );
        },
    },
    {
        name: "Settings",
        path: "/settings",
        icon: ({ color }) => {
            return <FiSettings className={`w-6 h-6 text-${color}-500`} />;
        },
    },
];
