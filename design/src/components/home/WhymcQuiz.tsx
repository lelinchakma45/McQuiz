import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../theme/colors'
import { lightcolors } from '../../theme/lightcolors'

const WhymcQuiz = () => {
    return (
        <Box
        mt={5}
        sx={{
            // background: lightcolors.primary,
            pb: 10
        }}
        >
            <Container maxWidth={'xl'}>
                <Box>
                    <Box textAlign={'center'} mb={5}>
                        <Typography fontWeight={600} fontSize={32}>Why McQuiz?</Typography>
                        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, velit veniam voluptas omnis nemo soluta.</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Box 
                                    width={60}
                                    height={60}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    border={`1px solid ${colors.primary}`}
                                    borderRadius={999}
                                    sx={{
                                        background:lightcolors.primary
                                    }}
                                >
                                    <i className='bi bi-heart-fill' style={{fontSize:24, color:colors.primary}}></i>
                                </Box>
                            </Box>
                            <Box textAlign={'center'} mt={2}>
                                <Typography fontWeight={600} fontSize={24} color={colors.primary}>We CARE about you !</Typography>
                                <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officia dolorem corporis nostrum ullam obcaecati quaerat maxime. Explicabo, necessitatibus facere. Quibusdam nulla omnis quasi sint sequi impedit odio odit praesentium.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Box 
                                    width={60}
                                    height={60}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    border={`1px solid ${colors.primary}`}
                                    borderRadius={999}
                                    sx={{
                                        background:lightcolors.primary
                                    }}
                                >
                                    <i className='bi bi-heart-fill' style={{fontSize:24, color:colors.primary}}></i>
                                </Box>
                            </Box>
                            <Box textAlign={'center'} mt={2}>
                                <Typography fontWeight={600} fontSize={24} color={colors.primary}>We CARE about you !</Typography>
                                <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officia dolorem corporis nostrum ullam obcaecati quaerat maxime. Explicabo, necessitatibus facere. Quibusdam nulla omnis quasi sint sequi impedit odio odit praesentium.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Box 
                                    width={60}
                                    height={60}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    border={`1px solid ${colors.primary}`}
                                    borderRadius={999}
                                    sx={{
                                        background:lightcolors.primary
                                    }}
                                >
                                    <i className='bi bi-heart-fill' style={{fontSize:24, color:colors.primary}}></i>
                                </Box>
                            </Box>
                            <Box textAlign={'center'} mt={2}>
                                <Typography fontWeight={600} fontSize={24} color={colors.primary}>We CARE about you !</Typography>
                                <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officia dolorem corporis nostrum ullam obcaecati quaerat maxime. Explicabo, necessitatibus facere. Quibusdam nulla omnis quasi sint sequi impedit odio odit praesentium.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default WhymcQuiz