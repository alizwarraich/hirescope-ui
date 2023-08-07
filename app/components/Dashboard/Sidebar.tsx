"use client";

import { links } from "../../data/SidebarLinks";
import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const { push } = useRouter();
    const [active, setActive] = useState("/profile");

    useEffect(() => {
        // if path is /dashboard, navigate to /dashboard/profile
        if (pathname === "/dashboard") {
            push("/dashboard/profile");
        }
        setActive("/" + pathname.split("/")[2]);
    }, [pathname]);

    return (
        <div className="w-full h-screen px-4">
            <div className="flex flex-col gap-3">
                {links.map((link, index) => {
                    return (
                        <Link
                            href={`/dashboard${link.path}`}
                            key={index}
                            className={`px-3 py-2 hover:bg-gray-100 ${
                                active === link.path
                                    ? "bg-blue-50 text-[#4069E5] font-semibold"
                                    : "text-gray-600"
                            } hover flex items-center gap-2`}
                        >
                            <div>
                                <link.icon
                                    color={
                                        active === link.path ? "blue" : "gray"
                                    }
                                />
                            </div>
                            <p>{link.name}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
