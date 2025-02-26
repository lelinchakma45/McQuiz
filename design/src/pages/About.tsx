import { Box, Container } from '@mui/material'
import Breadcrumbs from '../components/common/Breadcrumbs';
import Image from '../assets/Background/Bredicombs.png'
import Main from '../components/about/Main';
import Rules from '../components/about/Rules';
import Count from '../components/about/Count';
import Testimonial from '../components/about/Testimonial';

const About = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${Image})`,
                    backgroundRepeat: 'repeat',
                    // backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '15vh'
                }}
            >
                <Container maxWidth={'xl'}>
                    <Breadcrumbs page={'About'} />
                </Container>
            </Box>
            <Main />
            <Rules />
            <Count />
            <Testimonial />
        </Box>
    )
}

export default About