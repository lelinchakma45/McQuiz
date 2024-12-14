import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Image from '../../assets/cover/students.jpg'

const data =[
    {
        title:'Track your progress and earn badges for completing quizzes and achieving high scores'
    },
    {
        title:'Track your progress and earn badges for completing quizzes and achieving high scores'
    },
    {
        title: 'See your leaderboard ranking and complete with other students'
    },
    {
        title: 'Learn at your own pace and review your result for improvement.'
    }
]

const Rules = () => {
    return (
        <Box py={5}>
            <Box textAlign={'center'}>
                <Typography fontWeight={700} fontSize={32}>This Platform for Everyone</Typography>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et excepturi corrupti sapiente doloribus nihil blanditiis voluptate expedita minima veniam vitae porro, molestias unde, sed praesentium mollitia dolor. Impedit, sint alias!</Typography>
                <Box display={'flex'} justifyContent={'center'} gap={10} mt={3}>
                    <Link to={""}>
                        <Box>
                            <Typography>I am Student</Typography>
                        </Box>
                    </Link>
                    <Link to={""}>
                        <Box>
                            <Typography>I am Teacher</Typography>
                        </Box>
                    </Link>
                </Box>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Box 
                        component={'img'}
                        src={Image}
                        alt=''
                        width={'60vh'}
                        height={'60vh'}
                        my={5}
                        borderRadius={9999}
                        sx={{
                            objectFit:'cover'
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'}>
                    <Box>
                        {data.map((item, index)=>(
                            <Box key={index} py={3}>
                                <Typography>{item.title}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Rules;