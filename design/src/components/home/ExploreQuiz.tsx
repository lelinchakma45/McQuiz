import { Box, Container, Grid, Typography } from '@mui/material';
import { colors } from '../../theme/colors';
import DNA from '../../assets/Thumbnail/bacteria.png'
import Math from '../../assets/Thumbnail/abacus.png'
import Chemistry from '../../assets/Thumbnail/lab-equipment.png'
import Physics from '../../assets/Thumbnail/atomic.png'
import Arrow from '../../assets/Components/arrow.png'
import { Link } from 'react-router-dom';

const data = [
    {
        id: 1,
        name: 'Biology',
        items: 45,
        image: DNA
    },
    {
        id: 2,
        name: 'Chemistry',
        items: 45,
        image: Chemistry
    },
    {
        id: 3,
        name: 'Mathematics',
        items: 45,
        image: Math
    },
    {
        id: 4,
        name: 'Physics',
        items: 45,
        image: Physics
    },
]

const ExploreQuiz = () => {
    return (
        <Box py={5}>
            <Container maxWidth={'xl'}>
                <Box>
                    <Box textAlign={'center'}>
                        <Typography color={colors.primary} fontWeight={600} fontSize={32}>Explore <Typography component={'span'} color={colors.warning} fontWeight={600} fontSize={32}> 3498+</Typography> Quizzes</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta ipsam perspiciatis eum repellendus ipsum rem.</Typography>
                    </Box>
                    <Box mt={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={2} display={{xs:'none', md:'block'}}>
                                <Box display={'flex'} alignItems={'center'} height={'100%'}>
                                    <Box>
                                        <Typography fontWeight={500} fontSize={38} lineHeight={1.5}><Typography component={'span'} fontWeight={500} fontSize={38} sx={{ background: colors.warning }}>Explore</Typography> <br />Quizzes</Typography>
                                        <Box
                                            component={'img'}
                                            src={Arrow}
                                            width={'80%'}
                                            sx={{
                                                translate: 'rotate(180deg)'
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <Grid container spacing={2}>
                                    {data.map((item, index) => (
                                        <Grid item xs={12} md={3} key={index}>
                                            <Link to={''}>
                                                <Box
                                                    border={'1px solid'}
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
                                                        <Typography fontWeight={600} fontSize={20}>{item.name}</Typography>
                                                        <Typography>{item.items} Quizzes</Typography>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box display={'flex'} justifyContent={'center'} mt={3}>
                            <Link to={''}>
                                <Box display={'flex'} gap={2} color={'#000'}>
                                    <Typography fontWeight={600}>See More Quizzess</Typography>
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

export default ExploreQuiz;