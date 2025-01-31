import React from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
    onClick?: () => void;
}

interface Testimonial {
    id: number;
    author_name: string;
    author_title: string;
    author_description: string;
    author_email: string;
    author_phone: string;
    author_image: string;
    testimonial: string;
    status: boolean;
    created_at: string;
    update_at: string;
    color: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        author_name: "John Doe",
        author_title: "Senior Developer",
        author_description: "Expert in full-stack development.",
        author_email: "johndoe@example.com",
        author_phone: "+1234567890",
        author_image: "https://via.placeholder.com/300x200",
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia vehicula erat, mollis dapibus quam feugiat quis. Fusce eleifend magna ac diam dignissim posuere. Fusce posuere nibh vel tortor viverra pretium. Cras nec eros eget lacus mattis pellentesque quis eu magna. Fusce tempus tincidunt neque, sit amet commodo tortor venenatis eget. Aliquam non imperdiet dui. In hac habitasse platea dictumst. Aenean nunc ante, accumsan sed ultrices ut, placerat id enim. Morbi finibus nulla ac felis placerat, ut mattis magna luctus. Vestibulum malesuada ex quis dui cursus imperdiet eu vel turpis. Sed aliquam lorem quis velit sodales, tempus blandit nisi tristique.',
        status: true,
        created_at: "2024-01-01T10:00:00Z",
        update_at: "2024-01-10T10:00:00Z",
        color: 'green-500',
    },
    {
        id: 2,
        author_name: "Jane Smith",
        author_title: "Data Scientist",
        author_description: "Specialist in machine learning and AI.",
        author_email: "janesmith@example.com",
        author_phone: "+1234567891",
        author_image: "https://via.placeholder.com/300x200",
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia vehicula erat, mollis dapibus quam feugiat quis. Fusce eleifend magna ac diam dignissim posuere. Fusce posuere nibh vel tortor viverra pretium. Cras nec eros eget lacus mattis pellentesque quis eu magna. Fusce tempus tincidunt neque, sit amet commodo tortor venenatis eget. Aliquam non imperdiet dui. In hac habitasse platea dictumst. Aenean nunc ante, accumsan sed ultrices ut, placerat id enim. Morbi finibus nulla ac felis placerat, ut mattis magna luctus. Vestibulum malesuada ex quis dui cursus imperdiet eu vel turpis. Sed aliquam lorem quis velit sodales, tempus blandit nisi tristique.',
        status: true,
        created_at: "2024-01-02T10:00:00Z",
        update_at: "2024-01-11T10:00:00Z",
        color: 'orange-500',
    },
    {
        id: 3,
        author_name: "Michael Johnson",
        author_title: "UI/UX Designer",
        author_description: "Expert in creating user-friendly interfaces.",
        author_email: "michaeljohnson@example.com",
        author_phone: "+1234567892",
        author_image: "https://via.placeholder.com/300x200",
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia vehicula erat, mollis dapibus quam feugiat quis. Fusce eleifend magna ac diam dignissim posuere. Fusce posuere nibh vel tortor viverra pretium. Cras nec eros eget lacus mattis pellentesque quis eu magna. Fusce tempus tincidunt neque, sit amet commodo tortor venenatis eget. Aliquam non imperdiet dui. In hac habitasse platea dictumst. Aenean nunc ante, accumsan sed ultrices ut, placerat id enim. Morbi finibus nulla ac felis placerat, ut mattis magna luctus. Vestibulum malesuada ex quis dui cursus imperdiet eu vel turpis. Sed aliquam lorem quis velit sodales, tempus blandit nisi tristique.',
        status: true,
        created_at: "2024-01-03T10:00:00Z",
        update_at: "2024-01-12T10:00:00Z",
        color: 'red-500',
    },
    {
        id: 4,
        author_name: "Emily Davis",
        author_title: "Project Manager",
        author_description: "Experienced in Agile methodologies.",
        author_email: "emilydavis@example.com",
        author_phone: "+1234567893",
        author_image: "https://via.placeholder.com/300x200",
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia vehicula erat, mollis dapibus quam feugiat quis. Fusce eleifend magna ac diam dignissim posuere. Fusce posuere nibh vel tortor viverra pretium. Cras nec eros eget lacus mattis pellentesque quis eu magna. Fusce tempus tincidunt neque, sit amet commodo tortor venenatis eget. Aliquam non imperdiet dui. In hac habitasse platea dictumst. Aenean nunc ante, accumsan sed ultrices ut, placerat id enim. Morbi finibus nulla ac felis placerat, ut mattis magna luctus. Vestibulum malesuada ex quis dui cursus imperdiet eu vel turpis. Sed aliquam lorem quis velit sodales, tempus blandit nisi tristique.',
        status: true,
        created_at: "2024-01-04T10:00:00Z",
        update_at: "2024-01-13T10:00:00Z",
        color: 'green-500'
    },
    {
        id: 5,
        author_name: "Chris Brown",
        author_title: "Cloud Engineer",
        author_description: "AWS and Azure certified professional.",
        author_email: "chrisbrown@example.com",
        author_phone: "+1234567894",
        author_image: "https://via.placeholder.com/300x200",
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia vehicula erat, mollis dapibus quam feugiat quis. Fusce eleifend magna ac diam dignissim posuere. Fusce posuere nibh vel tortor viverra pretium. Cras nec eros eget lacus mattis pellentesque quis eu magna. Fusce tempus tincidunt neque, sit amet commodo tortor venenatis eget. Aliquam non imperdiet dui. In hac habitasse platea dictumst. Aenean nunc ante, accumsan sed ultrices ut, placerat id enim. Morbi finibus nulla ac felis placerat, ut mattis magna luctus. Vestibulum malesuada ex quis dui cursus imperdiet eu vel turpis. Sed aliquam lorem quis velit sodales, tempus blandit nisi tristique.',
        status: true,
        created_at: "2024-01-05T10:00:00Z",
        update_at: "2024-01-14T10:00:00Z",
        color: 'red-500',
    },
    {
        id: 6,
        author_name: "Sophia Wilson",
        author_title: "Cybersecurity Specialist",
        author_description: "Expert in network security and threat analysis.",
        author_email: "sophiawilson@example.com",
        author_phone: "+1234567895",
        author_image: "https://via.placeholder.com/300x200",
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia vehicula erat, mollis dapibus quam feugiat quis. Fusce eleifend magna ac diam dignissim posuere. Fusce posuere nibh vel tortor viverra pretium. Cras nec eros eget lacus mattis pellentesque quis eu magna. Fusce tempus tincidunt neque, sit amet commodo tortor venenatis eget. Aliquam non imperdiet dui. In hac habitasse platea dictumst. Aenean nunc ante, accumsan sed ultrices ut, placerat id enim. Morbi finibus nulla ac felis placerat, ut mattis magna luctus. Vestibulum malesuada ex quis dui cursus imperdiet eu vel turpis. Sed aliquam lorem quis velit sodales, tempus blandit nisi tristique.',
        status: true,
        created_at: "2024-01-06T10:00:00Z",
        update_at: "2024-01-15T10:00:00Z",
        color: 'orange-500',
    },
    {
        id: 7,
        author_name: "David Martinez",
        author_title: "DevOps Engineer",
        author_description: "Specialist in CI/CD pipelines and automation.",
        author_email: "davidmartinez@example.com",
        author_phone: "+1234567896",
        author_image: "https://via.placeholder.com/300x200",
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia vehicula erat, mollis dapibus quam feugiat quis. Fusce eleifend magna ac diam dignissim posuere. Fusce posuere nibh vel tortor viverra pretium. Cras nec eros eget lacus mattis pellentesque quis eu magna. Fusce tempus tincidunt neque, sit amet commodo tortor venenatis eget. Aliquam non imperdiet dui. In hac habitasse platea dictumst. Aenean nunc ante, accumsan sed ultrices ut, placerat id enim. Morbi finibus nulla ac felis placerat, ut mattis magna luctus. Vestibulum malesuada ex quis dui cursus imperdiet eu vel turpis. Sed aliquam lorem quis velit sodales, tempus blandit nisi tristique.',
        status: true,
        created_at: "2024-01-07T10:00:00Z",
        update_at: "2024-01-16T10:00:00Z",
        color: 'green-500',
    },
];


const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-600 bg-transparent text-blue-600 cursor-pointer absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex"
        style={{ right: -50 }}
    >
        <i className="bi bi-arrow-right"></i>
    </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-600 bg-transparent text-blue-600 cursor-pointer absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex"
        style={{ left: -50 }}
    >
        <i className="bi bi-arrow-left"></i>
    </div>
);

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 3,
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
        <div className="mt-20 pb-40">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div>
                    <div className="text-center pt-20 pb-8">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Our Best{' '}
                            <span className="text-blue-600">
                                Testimonial
                            </span>
                        </h2>
                        <p className="text-gray-600">
                            Various versions have evolved over the years, sometimes by accident,
                        </p>
                    </div>

                    <div className="slick-track-custom">
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="p-4"
                                >
                                    <div 
                                        className={`p-4 rounded border border-${testimonial.color}`}
                                    >
                                        <p className="line-clamp-6">
                                            "{testimonial.testimonial}"
                                        </p>
                                        <div className="flex gap-4 items-center mt-12">
                                            <Link to={`/testimonial/${testimonial.id}`}>
                                                <img
                                                    src={testimonial.author_image}
                                                    className="w-12 h-12 object-cover rounded-full"
                                                    alt={testimonial.author_name}
                                                />
                                            </Link>
                                            <div>
                                                <Link 
                                                    to={`/testimonial/${testimonial.id}`}
                                                    className="no-underline"
                                                >
                                                    <p className="font-semibold text-xl leading-tight text-black">
                                                        {testimonial.author_name}
                                                    </p>
                                                </Link>
                                                <p className="font-light text-sm leading-tight">
                                                    {testimonial.author_title}
                                                </p>
                                            </div>
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

export default Testimonial;