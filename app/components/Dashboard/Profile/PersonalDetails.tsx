"use client";

import { useState } from "react";
import { ImPencil } from "react-icons/im";

const PersonalDetails = () => {
    const [evn, setEvn] = useState("101010####");

    const copyEvn = () => {
        navigator.clipboard.writeText(evn);
    };

    return (
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex justify-between px-2">
                <div className="flex items-end text-gray-800">
                    <p className="font-semibold text-lg">Personal Details</p>
                </div>
                <div className="flex flex-col items-end text-gray-800">
                    <p className="text-2xl font-bold">{evn}</p>
                    <button onClick={copyEvn} className="text-xs text-gray-400">
                        Copy EVN
                    </button>
                </div>
            </div>

            <div className="shadow-md border rounded w-[90%] px-4 py-4 grid grid-cols-[70%_30%]">
                <div className="text-gray-600 py-6 px-2 grid grid-cols-4">
                    <div className="flex flex-col gap-1">
                        <p>Contact</p>
                        <p>text</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Nationality</p>
                        <p>text</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Residence</p>
                        <p>text</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Address</p>
                        <p>text</p>
                    </div>
                </div>
                <div className="flex justify-end items-start">
                    <button className="flex items-center gap-1 text-gray-600">
                        <ImPencil />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
