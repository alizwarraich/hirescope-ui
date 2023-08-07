import Overview from "@/app/components/Dashboard/Profile/Overview";
import PersonalDetails from "@/app/components/Dashboard/Profile/PersonalDetails";
import ProfileCard from "@/app/components/Dashboard/Profile/ProfileCard";

const ProfilePage = () => {
    return (
        <>
            <div className="w-full grid grid-cols-[20%_80%] gap-4">
                <ProfileCard />
                <PersonalDetails />
            </div>
            <div className="mt-8">
                <Overview />
            </div>
        </>
    );
};

export default ProfilePage;
