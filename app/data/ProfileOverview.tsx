export interface DataType {
    name: string;
    position?: string;
    startDate: string;
    endDate: string;
    branch?: string;
    status: string;
    rating?: number;
    degree?: string;
    specialty?: string;
    issuer?: string;
}

interface OverviewDataType {
    title: string;
    data: DataType[];
}

export const OverviewData: OverviewDataType[] = [
    {
        title: "Employment",
        data: [
            {
                name: "Google",
                position: "Software Engineer",
                startDate: "2021-01-01",
                endDate: "2021-01-01",
                branch: "Software",
                status: "Verified",
                rating: 8,
            },
            {
                name: "Google",
                position: "Software Engineer",
                startDate: "2021-01-01",
                endDate: "2021-01-01",
                branch: "Software",
                status: "In Progress",
                rating: 6,
            },
        ],
    },
    {
        title: "Education",
        data: [
            {
                name: "University of the Philippines",
                degree: "Bachelor of Science in Computer Science",
                startDate: "2021-01-01",
                endDate: "2021-01-01",
                status: "Verified",
                specialty: "Software Engineering",
            },
        ],
    },
    {
        title: "License",
        data: [
            {
                name: "Professional Regulation Commission",
                startDate: "2021-01-01",
                endDate: "2021-01-01",
                status: "Not Verified",
                branch: "Software",
                issuer: "Professional Regulation Commission",
            },
        ],
    },
    {
        title: "Certification",
        data: [
            {
                name: "Professional Regulation Commission",
                position: "Software Engineer",
                startDate: "2021-01-01",
                endDate: "2021-01-01",
                status: "Not Verified",
                branch: "Software",
                issuer: "Professional Regulation Commission",
            },
        ],
    },
];
