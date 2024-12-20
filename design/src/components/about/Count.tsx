import { Box, Container, Grid, Typography } from '@mui/material';
import Image from '../../assets/cover/students.jpg';
import { lightcolors } from '../../theme/lightcolors';
import { colors } from '../../theme/colors';
const Count = () => {
    return (
        <Box py={5} sx={{
            background:colors.primary,
            color:'#FFF'
        }}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={8}>
                        <Box>
                            <Typography fontWeight={600}  fontSize= { {xs: 24, sm: 24, md: 32, lg: 32} }>Our Success in Numbers</Typography>
                            <Typography fontSize={18}>At Quizzess, we're proud of our successs in empowering teachers and students to create and share engaging quizzes on any topic. Here are just a few of our numbers:</Typography>
                            <Box mt={5}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} mb={2}>
                                        <Box>
                                            <Typography fontWeight={600} fontSize={36} color={colors.warning}>+30K</Typography>
                                            <Typography>Teachers, Exams and Quizzes</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} mb={2}>
                                        <Box>
                                            <Typography fontWeight={600} fontSize={36} color={colors.danger}>+15.43K</Typography>
                                            <Typography>Syudent use McQuiz</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} mb={2}>
                                        <Box>
                                            <Typography fontWeight={600} fontSize={36} color={'#FFF'}>+8.4K</Typography>
                                            <Typography> Quizzes Created</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} mb={2}>
                                        <Box>
                                            <Typography fontWeight={600} fontSize={36} color={colors.warning}>+5K</Typography>
                                            <Typography>Exams Created</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Box
                                component={'img'}
                                src={Image}
                                alt=''
                                width={'40vh'}
                                height={'40vh'}
                                my={5}
                                borderRadius={9999}
                                sx={{
                                    objectFit: 'cover'
                                }}
                            />
                        </Box>
                    </Grid>
                    
                </Grid>
            </Container>
        </Box>
    )
}

export default Count