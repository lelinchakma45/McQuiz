import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from '../../assets/cover/students.jpg'
import { colors } from '../../theme/colors'
import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <Box
            sx={{
                // background: lightcolors.primary,
                pb: 10
            }}
        >
            <Container maxWidth={'lg'}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Box
                                component={'img'}
                                src={Image}
                                alt=''
                                width={'50vh'}
                                height={'50vh'}
                                my={5}
                                borderRadius={9999}
                                sx={{
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'}>
                            <Box>
                                <Typography fontWeight={700} fontSize={{ xs: 24, sm: 24, md: 32, lg: 48 }} color={colors.primary}>Discover the Story Behind Our Quizzes</Typography>
                                <Typography mt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium reiciendis ipsa recusandae voluptatem eius, tempora adipisci.</Typography>
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
                                            <Typography color={'#FFF'}>Learn More</Typography>
                                        </Box>
                                    </Link>
                                    <Link to={''}>
                                        <Box
                                            py={1}
                                            px={2}
                                            border={`1px solid ${colors.primary}`}
                                            borderRadius={99}
                                        >
                                            <Typography fontWeight={500} color={'#000'}>Read FAQ's</Typography>
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Contacts