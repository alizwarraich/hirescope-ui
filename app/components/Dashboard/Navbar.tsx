import Image from "next/image";
import Link from "next/link";

import Bell from "@/public/icons/Bell";
import ChevronDown from "@/public/icons/ChevronDown";

const Navbar = () => {
    return (
        <div className="bg-white px-8 py-4 border-b flex justify-between">
            <Link href="/dashboard/profile" className="flex items-center gap-3">
                <Image
                    src="/images/DashboardLogo.png"
                    width={40}
                    height={40}
                    alt="logo"
                />
                <p className="text-gray-700 font-bold">hirescope</p>
            </Link>
            <div className="flex items-center gap-6">
                <Bell />
                <div className="flex justify-between items-center gap-3 pl-5 border-l">
                    <Image
                        src="/images/Avatar.png"
                        alt="avatar"
                        className="rounded-full"
                        width={40}
                        height={40}
                    />
                    <p className="text-gray-600">David Smith</p>
                    <ChevronDown />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
