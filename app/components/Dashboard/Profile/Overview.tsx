import OverviewHeader from "./OverviewHeader";
import { OverviewData } from "@/app/data/ProfileOverview";
import type { DataType } from "@/app/data/ProfileOverview";

import { GoVerified, GoUnverified } from "react-icons/go";

const Overview = () => {
    return (
        <div className="grid grid-cols-2 gap-10">
            {["Employment", "Education", "License", "Certification"].map(
                (title, index) => (
                    <div className="flex flex-col gap-3">
                        <OverviewHeader key={index} title={title} />
                        <div className="flex flex-col gap-4">
                            {OverviewData[index].data.map(
                                (data: DataType, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-2 px-6 py-4 border shadow rounded"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <p className="text-lg truncate font-semibold text-gray-800">
                                                    {data?.name}
                                                </p>
                                                {data?.rating && (
                                                    <div className="px-2 py-1 text-sm truncate font-semibold text-blue-500 bg-blue-50 rounded-full">
                                                        {data?.rating} / 10
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                className={`flex items-center gap-1 truncate ${
                                                    data?.status === "Verified"
                                                        ? "text-green-500"
                                                        : data?.status ===
                                                          "In Progress"
                                                        ? "text-gray-500"
                                                        : "text-red-500"
                                                }`}
                                            >
                                                {data?.status === "Verified" ? (
                                                    <GoVerified />
                                                ) : (
                                                    <GoUnverified />
                                                )}
                                                <p>{data?.status}</p>
                                            </div>
                                        </div>

                                        <div className="mt-2 grid gap-4 grid-cols-4 text-sm text-gray-700 font-medium">
                                            <p>Start Date</p>
                                            <p>End Date</p>
                                            <p>
                                                {index === 1
                                                    ? "Degree"
                                                    : index === 2
                                                    ? "Issuer"
                                                    : "Position"}
                                            </p>
                                            <p>
                                                {index === 1
                                                    ? "Speciality"
                                                    : "Branch"}
                                            </p>
                                        </div>

                                        <div className="grid gap-4 grid-cols-4 text-sm text-gray-500">
                                            <p className="truncate">
                                                {data?.startDate}
                                            </p>
                                            <p className="truncate">
                                                {data?.endDate}
                                            </p>
                                            <p className="truncate">
                                                {data?.position ||
                                                    data?.degree ||
                                                    data?.issuer}
                                            </p>
                                            <p className="truncate">
                                                {data?.branch ||
                                                    data?.specialty}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Overview;
