import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
    onClick?: () => void;
}

interface Instructor {
    id: number;
    instructor_name: string;
    instructor_title: string;
    instructor_description: string;
    instructor_email: string;
    instructor_phone: string;
    instructor_image: string;
    status: boolean;
    created_at: string;
    update_at: string;
    color: string;
}

const instructors: Instructor[] = [
    {
        id: 1,
        instructor_name: "John Doe",
        instructor_title: "Senior Developer",
        instructor_description: "Expert in full-stack development.",
        instructor_email: "johndoe@example.com",
        instructor_phone: "+1234567890",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-01T10:00:00Z",
        update_at: "2024-01-10T10:00:00Z",
        color:'green-500',
    },
    {
        id: 2,
        instructor_name: "Jane Smith",
        instructor_title: "Data Scientist",
        instructor_description: "Specialist in machine learning and AI.",
        instructor_email: "janesmith@example.com",
        instructor_phone: "+1234567891",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-02T10:00:00Z",
        update_at: "2024-01-11T10:00:00Z",
        color:'orange-500',
    },
    {
        id: 3,
        instructor_name: "Michael Johnson",
        instructor_title: "UI/UX Designer",
        instructor_description: "Expert in creating user-friendly interfaces.",
        instructor_email: "michaeljohnson@example.com",
        instructor_phone: "+1234567892",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-03T10:00:00Z",
        update_at: "2024-01-12T10:00:00Z",
        color:'red-500',
    },
    {
        id: 4,
        instructor_name: "Emily Davis",
        instructor_title: "Project Manager",
        instructor_description: "Experienced in Agile methodologies.",
        instructor_email: "emilydavis@example.com",
        instructor_phone: "+1234567893",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-04T10:00:00Z",
        update_at: "2024-01-13T10:00:00Z",
        color:'green-500',
    },
    {
        id: 5,
        instructor_name: "Chris Brown",
        instructor_title: "Cloud Engineer",
        instructor_description: "AWS and Azure certified professional.",
        instructor_email: "chrisbrown@example.com",
        instructor_phone: "+1234567894",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-05T10:00:00Z",
        update_at: "2024-01-14T10:00:00Z",
        color:'red-500',
    },
    {
        id: 6,
        instructor_name: "Sophia Wilson",
        instructor_title: "Cybersecurity Specialist",
        instructor_description: "Expert in network security and threat analysis.",
        instructor_email: "sophiawilson@example.com",
        instructor_phone: "+1234567895",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-06T10:00:00Z",
        update_at: "2024-01-15T10:00:00Z",
        color:'orange-500',
    },
    {
        id: 7,
        instructor_name: "David Martinez",
        instructor_title: "DevOps Engineer",
        instructor_description: "Specialist in CI/CD pipelines and automation.",
        instructor_email: "davidmartinez@example.com",
        instructor_phone: "+1234567896",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-07T10:00:00Z",
        update_at: "2024-01-16T10:00:00Z",
        color:'green-500',
    },
    {
        id: 8,
        instructor_name: "Olivia Garcia",
        instructor_title: "AI Researcher",
        instructor_description: "Focused on natural language processing.",
        instructor_email: "oliviagarcia@example.com",
        instructor_phone: "+1234567897",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-08T10:00:00Z",
        update_at: "2024-01-17T10:00:00Z",
        color:'orange-500',
    },
    {
        id: 9,
        instructor_name: "Ethan Moore",
        instructor_title: "Software Architect",
        instructor_description: "Specialist in scalable application design.",
        instructor_email: "ethanmoore@example.com",
        instructor_phone: "+1234567898",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-09T10:00:00Z",
        update_at: "2024-01-18T10:00:00Z",
        color:'green-500',
    },
    {
        id: 10,
        instructor_name: "Isabella Taylor",
        instructor_title: "Business Analyst",
        instructor_description: "Expert in bridging business and technology.",
        instructor_email: "isabellataylor@example.com",
        instructor_phone: "+1234567899",
        instructor_image: "https://via.placeholder.com/300x200",
        status: true,
        created_at: "2024-01-10T10:00:00Z",
        update_at: "2024-01-19T10:00:00Z",
        color:'red-500',
    },
];

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-green-600 
                 bg-transparent text-green-600 cursor-pointer absolute top-1/2 -translate-y-1/2 z-10"
        style={{ right: -50 }}
    >
        <i className="bi bi-arrow-right"></i>
    </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-green-600 
                 bg-transparent text-green-600 cursor-pointer absolute top-1/2 -translate-y-1/2 z-10"
        style={{ left: -50 }}
    >
        <i className="bi bi-arrow-left"></i>
    </button>
);

const BestTeacher = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    };

    return (
        <div className="mt-20 pb-20">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div>
                    {/* Header Section */}
                    <div className="text-center pt-20 pb-8">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Our Best{' '}
                            <span className="text-green-600">
                                Instructor
                            </span>
                        </h2>
                        <p className="text-gray-600">
                            Various versions have evolved over the years, sometimes by accident,
                        </p>
                    </div>

                    {/* Slider Section */}
                    <div className="slick-track-custom">
                        <Slider {...settings}>
                            {instructors.map((instructor) => (
                                <div
                                    key={instructor.id}
                                    className="p-2"
                                >
                                    <div 
                                        className={`p-4 rounded border border-${instructor.color}`}
                                    >
                                        <Link 
                                            to={`/instructor/${instructor.id}`}
                                            className="no-underline"
                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <img
                                                    src={instructor.instructor_image}
                                                    className="w-[150px] h-[150px] object-cover rounded-full"
                                                    alt={instructor.instructor_name}
                                                />
                                            </div>
                                        </Link>
                                        <div className="mt-8 text-center">
                                            <Link 
                                                to={`/instructor/${instructor.id}`}
                                                className="no-underline"
                                            >
                                                <h3 className="font-semibold text-xl leading-tight text-black">
                                                    {instructor.instructor_name}
                                                </h3>
                                            </Link>
                                            <p className="font-light text-sm leading-tight text-gray-600">
                                                {instructor.instructor_title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <style>{`
                .slick-track-custom :global(.slick-track) {
                    display: flex;
                    gap: 0;
                }
            `}</style>
        </div>
    );
};

export default BestTeacher;