import { AiOutlinePlus as AddIcon } from "react-icons/ai";

interface OverviewHeaderProps {
    title: string;
}

const OverviewHeader: React.FC<OverviewHeaderProps> = ({ title }) => {
    return (
        <div className="w-full flex justify-between">
            <p className="font-bold text-2xl text-gray-800">{title}</p>
            <button className="bg-blue-600 hover:opacity-90 text-white px-3 py-[0.35rem] rounded-sm flex items-center gap-2">
                <AddIcon />
                <span>New</span>
            </button>
        </div>
    );
};

export default OverviewHeader;
