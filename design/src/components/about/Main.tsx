import { Box, Grid, Typography } from '@mui/material';
import Student from '../../assets/cover/students.jpg'
import Light from '../../assets/Components/light.png'
import Emc2 from '../../assets/Components/emc2.png'
import Clock from '../../assets/Components/clock.png'
import Cell from '../../assets/Components/cell.png'
import Compass from '../../assets/Components/compas.png'
import Arrow from '../../assets/Components/arrowdraw.png'
import Ber from '../../assets/Components/barchart.png'
import Graph from '../../assets/Components/graph.png'
import Global from '../../assets/Components/global.png'
import { colors } from '../../theme/colors';

const Main = () => {
    return (
        <Box
            py={5}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} display={'flex'}
                        alignItems={'center'}>
                    <Box>
                        <Box>
                            <Typography fontWeight={700} fontSize={48} color={colors.primary} mb={2}>McQuiz: Your Giveway to Learning Through Quizzes</Typography>
                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, possimus consequuntur reprehenderit aut rerum quae soluta voluptas ut aperiam commodi debitis totam expedita obcaecati distinctio. Modi asperiores iure debitis eos.</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} position={'relative'}>
                    <Box 
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Box
                            component={'img'}
                            src={Student}
                            alt='About Student Cover'
                            width={'60vh'}
                            height={'50vh'}
                            sx={{
                                borderRadius: '100px 100px 100px 0px'
                            }}
                            zIndex={9}
                        />
                        <Box
                            component={'img'}
                            src={Light}
                            position={'absolute'}
                            alt=''
                            height={30}
                            right={0}
                        />
                        <Box
                            component={'img'}
                            src={Global}
                            position={'absolute'}
                            alt=''
                            height={50}
                            top={'20%'}
                            right={60}
                        />
                        <Box
                            component={'img'}
                            src={Ber}
                            position={'absolute'}
                            alt=''
                            height={30}
                            right={70}
                            top={'60%'}
                        />
                        <Box
                            component={'img'}
                            src={Arrow}
                            position={'absolute'}
                            alt=''
                            height={40}
                            left={100}
                            bottom={'50%'}
                        />
                        <Box
                            component={'img'}
                            src={Graph}
                            position={'absolute'}
                            alt=''
                            height={50}
                            right={100}
                            bottom={0}
                        />
                        <Box
                            component={'img'}
                            src={Clock}
                            position={'absolute'}
                            alt=''
                            height={60}
                            top={0}
                            right={0}
                        />
                        <Box
                            component={'img'}
                            src={Compass}
                            position={'absolute'}
                            alt=''
                            height={60}
                            left={20}
                        />
                        <Box
                            component={'img'}
                            src={Cell}
                            position={'absolute'}
                            alt=''
                            height={60}
                            left={100}
                            bottom={0}
                        />
                        <Box
                            component={'img'}
                            src={Emc2}
                            position={'absolute'}
                            alt=''
                            height={40}
                            left={150}
                            top={0}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main;