



import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';

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
        color: colors.primary,
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
        color: colors.warning,
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
        color: colors.danger,
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
        color: colors.success,
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
        color: colors.danger,
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
        color: colors.warning,
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
        color: colors.primary,
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
                breakpoint: 1536, // xl breakpoint
                settings: {
                    slidesToShow: 3,
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
                                Testimonial
                            </Typography>
                        </Typography>
                        <Typography>
                            Various versions have evolved over the years, sometimes by accident,
                        </Typography>
                    </Box>

                    <Box sx={{ '& .slick-track': { display: 'flex', gap: 0 } }}>
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <Box
                                    key={testimonial.id}
                                    sx={{
                                        p: 1,
                                        '& .testimonial-card': {
                                            p: 1,
                                            borderRadius: 1,
                                            border: `1px solid ${testimonial.color}`
                                        }
                                    }}
                                >
                                    <div className="testimonial-card">
                                        <Typography
                                            sx={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                WebkitLineClamp: 6,
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            "{testimonial.testimonial}"
                                        </Typography>
                                        <Box display={'flex'} gap={1} alignItems={'center'} mt={3}>
                                            <Link to={`/testimonial/${testimonial.id}`} style={{ textDecoration: 'none' }}>
                                                <Box
                                                    component="img"
                                                    src={testimonial.author_image}
                                                    sx={{
                                                        width: 50,
                                                        height: 50,
                                                        objectFit: 'cover',
                                                        borderRadius: 9999
                                                    }}
                                                    alt={testimonial.author_name}
                                                />
                                            </Link>
                                            <Box>
                                                <Link to={`/testimonial/${testimonial.id}`} style={{ textDecoration: 'none' }}>
                                                    <Typography sx={{
                                                        fontWeight: 600,
                                                        lineHeight: 1.3,
                                                        fontSize: 20,
                                                        color: '#000'
                                                    }}>
                                                        {testimonial.author_name}
                                                    </Typography>
                                                </Link>
                                                <Typography sx={{
                                                    fontWeight: 300,
                                                    lineHeight: 1.3,
                                                    fontSize: 14
                                                }}>
                                                    {testimonial.author_title}
                                                </Typography>
                                            </Box>
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

export default Testimonial;