import type { Metadata } from "next";
import NavbarComponent from "../components/Dashboard/Navbar";
import SidebarComponent from "../components/Dashboard/Sidebar";

export const metadata: Metadata = {
    title: "Employee Dashboard",
    description:
        "An employee management system built with Next.js and Typescript.",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="fixed w-full z-50">
                <NavbarComponent />
            </div>
            <div className="flex">
                <div className="fixed w-72 md:pt-24 bg-[#FAFAFB]">
                    <SidebarComponent />
                </div>
                <div className="pl-4 pr-16 md:ml-72 md:pt-[5rem] pb-10 w-full">
                    {children}
                </div>
            </div>
        </>
    );
}
