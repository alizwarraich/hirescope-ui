import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="grid grid-rows-[40%_60%] relative border rounded-lg overflow-hidden">
            <div className="w-full h-[7rem] flex flex-col items-center justify-center bg-[url('/images/CoverImage.png')] bg-no-repeat bg-cover bg-top"></div>
            <div className="pb-32"></div>
            <div className="mt-8 absolute self-center w-full flex flex-col justify-center items-center">
                <Image
                    src={"/images/Avatar.png"}
                    alt="Avatar"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <p className="mt-2 font-semibold">Full Name</p>
                <p className="text-gray-500 text-xs">Professional Title</p>
            </div>
        </div>
    );
};

export default ProfileCard;
