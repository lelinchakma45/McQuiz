import { Box, Container, Grid, Typography } from '@mui/material';
import { colors } from '../../theme/colors';
import { Link } from 'react-router-dom';
import Image from '../../assets/cover/none.png'
import Image2 from '../../assets/cover/hero-cover-1.png'

const HomeMain = () => {
    return (
        <Box
            minHeight={'60vh'}
            display={'flex'}
            alignItems={'center'}
        >
            <Container maxWidth={'xl'}>
                <Box>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Box>
                                    <Typography fontWeight={700} fontSize={42} color={colors.primary}>Test Your Skills and knowledge with Expert Quizzes</Typography>
                                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam quidem corrupti maxime officiis minus voluptates debitis, repellat numquam eius odit fuga a necessitatibus et voluptatem. Odit nobis sint ut.</Typography>
                                </Box>
                                <Box display={'flex'} alignItems={'center'} gap={3} mt={5}>
                                    <Link to={''}>
                                        <Box
                                            py={1}
                                            px={2}
                                            border={`1px solid ${colors.primary}`}
                                            borderRadius={99}
                                            sx={{
                                                background: colors.primary
                                            }}
                                        >
                                            <Typography color={'#FFF'}>Sign up for Free</Typography>
                                        </Box>
                                    </Link>
                                    <Link to={''}>
                                        <Box
                                            py={1}
                                            px={2}
                                        >
                                            <Typography fontWeight={500} color={'#000'}>Are you a Teacher?</Typography>
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} position={'relative'}>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Box
                                    component={'img'}
                                    src={Image2}
                                    maxHeight={'50vh'}
                                    position={'absolute'}
                                    bottom={0}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default HomeMain;