import { Box, Container, Grid, Typography } from '@mui/material'
import { colors } from '../../theme/colors'
import { Link } from 'react-router-dom';
import DNA from '../../assets/Thumbnail/bacteria.png'
import Math from '../../assets/Thumbnail/abacus.png'
import Chemistry from '../../assets/Thumbnail/lab-equipment.png'
import Physics from '../../assets/Thumbnail/atomic.png'

const services = [
    {
        title: 'Design',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: DNA,
        iconBgColor: '#EDE7F6',
        color: '#673AB7',
        item:23
    },
    {
        title: 'Development',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Chemistry,
        iconBgColor: '#FFF3E0',
        color: '#FF9800',
        item:23
    },
    {
        title: 'IT & Software',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Physics,
        iconBgColor: '#E1F5FE',
        color: '#03A9F4',
        item:23
    },
    {
        title: 'Business',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Math,
        iconBgColor: '#E8F5E9',
        color: '#4CAF50',
        item:23
    },
    {
        title: 'Marketing',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Chemistry,
        iconBgColor: '#E8F5E9',
        color: '#4CAF50',
        item:23
    },
    {
        title: 'Photography',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: DNA,
        iconBgColor: '#E1F5FE',
        color: '#03A9F4',
        item:23
    },
    {
        title: 'Health & Care',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Math,
        iconBgColor: '#FFF3E0',
        color: '#FF9800',
        item:23
    },
    {
        title: 'Technology',
        description: 'Lorem Ipsum is Simply Dummy of the Printing And Typesetting',
        image: Physics,
        iconBgColor: '#EDE7F6',
        color: '#673AB7',
        item:23
    },
];

const PopularCategory = () => {
    return (
        <Box mt={5}>
            <Container maxWidth={'xl'}>
                <Box>
                    <Box textAlign={'center'}>
                        <Typography color={colors.primary} fontWeight={600} fontSize={32}>Most <Typography component={'span'} color={colors.warning} fontWeight={600} fontSize={32}> Popular </Typography>Categories</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta ipsam perspiciatis eum repellendus ipsum rem.</Typography>
                    </Box>
                    <Box mt={3}>
                        <Grid container spacing={2}>
                            {services.map((item, index) => (
                                <Grid item xs={12} md={3} key={index}>
                                <Link to={''}>
                                    <Box
                                        border={`1px solid ${item.color}`}
                                        borderRadius={2}
                                        p={3}
                                    >
                                        <Box
                                            display={'flex'}
                                            width={'100%'}
                                            justifyContent={'center'}
                                        >
                                            <Box
                                                component={'img'}
                                                src={item.image}
                                                height={100}
                                                sx={{
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </Box>
                                        <Box textAlign={'center'} mt={3}>
                                            <Typography fontWeight={600} fontSize={20} color={item.color}>{item.title}</Typography>
                                            <Typography color={item.color}>{item.item} Questions</Typography>
                                        </Box>
                                    </Box>
                                </Link>
                            </Grid>
                            ))}
                        </Grid>
                        <Box display={'flex'} justifyContent={'center'} mt={3}>
                            <Link to={''}>
                                <Box display={'flex'} gap={1.5} color={'#000'}>
                                    <Typography fontWeight={600}>See More Categories</Typography>
                                    <i className='bi bi-arrow-right'></i>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default PopularCategory