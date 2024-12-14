



import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';
import { lightcolors } from '../../theme/lightcolors';

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
    color:string;
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
        color:colors.primary,
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
        color:colors.warning,
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
        color:colors.danger,
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
        color:colors.success,
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
        color:colors.danger,
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
        color:colors.warning,
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
        color:colors.primary,
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
        color:colors.warning,
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
        color:colors.success,
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
        color:colors.danger,
    },
];


const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <Box
        onClick={onClick}
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: 40, sm: 40, md: 40, lg: 40 },
            height: { xs: 40, sm: 40, md: 40, lg: 40 },
            borderRadius: "50%",
            border: { xs: 'none', sm: 'none', md: `1px solid ${colors.primary}`, lg: `1px solid ${colors.primary}` },
            background: "transparent",
            color: colors.primary,
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            right: [-10, -10, -30, -50],
            transform: "translateY(-50%)",
            zIndex: 1
        }}
    >
        <EastRoundedIcon />
    </Box>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <Box
        onClick={onClick}
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: 40, sm: 40, md: 40, lg: 40 },
            height: { xs: 40, sm: 40, md: 40, lg: 40 },
            borderRadius: "50%",
            border: { xs: 'none', sm: 'none', md: `1px solid ${colors.primary}`, lg: `1px solid ${colors.primary}` },
            background: "transparent",
            color: colors.primary,
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            left: [-10, -10, -30, -50],
            transform: "translateY(-50%)",
            zIndex: 1
        }}
    >
        <WestRoundedIcon />
    </Box>
);

const BestTeacher = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1536, // xl breakpoint
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200, // lg breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900, // md breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600, // sm breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    };

    return (
        <Box
            mt={5}
            sx={{
                // background: lightcolors.primary,
                pb: 10
            }}
        >
            <Container maxWidth="xl">
                <Box>
                    <Box 
                        textAlign={'center'}
                        pt={5}
                        pb={2}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: 24, sm: 24, md: 32, lg: 32 },
                                fontWeight: 700
                            }}
                        >
                            Our Best {' '}
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: { xs: 24, sm: 24, md: 32, lg: 32 },
                                    fontWeight: 700,
                                    color: colors.primary
                                }}
                            >
                                Instructor
                            </Typography>
                        </Typography>
                        <Typography>
                            Various versions have evolved over the years, sometimes by accident,
                        </Typography>
                    </Box>

                    <Box sx={{ '& .slick-track': { display: 'flex', gap: 0 } }}>
                        <Slider {...settings}>
                            {instructors.map((instructor) => (
                                <Box
                                    key={instructor.id}
                                    sx={{
                                        p: 1,
                                        '& .instructor-card': {
                                            p: 1,
                                            borderRadius: 1,
                                            border: `1px solid ${instructor.color}`
                                        }
                                    }}
                                >
                                    <div className="instructor-card">
                                        <Link to={`/instructor/${instructor.id}`} style={{ textDecoration: 'none' }}>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column'
                                            }}>
                                                <Box
                                                    component="img"
                                                    src={instructor.instructor_image}
                                                    sx={{
                                                        width: 150,
                                                        height: 150,
                                                        objectFit: 'cover',
                                                        borderRadius: 9999
                                                    }}
                                                    alt={instructor.instructor_name}
                                                />
                                            </Box>
                                        </Link>
                                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                                            <Link to={`/instructor/${instructor.id}`} style={{ textDecoration: 'none' }}>
                                                <Typography sx={{
                                                    fontWeight: 600,
                                                    lineHeight: 1.3,
                                                    fontSize: 20,
                                                    color: '#000'
                                                }}>
                                                    {instructor.instructor_name}
                                                </Typography>
                                            </Link>
                                            <Typography sx={{
                                                fontWeight: 300,
                                                lineHeight: 1.3,
                                                fontSize: 14
                                            }}>
                                                {instructor.instructor_title}
                                            </Typography>
                                        </Box>
                                    </div>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BestTeacher;