import { Box, Container } from '@mui/material'
import Breadcrumbs from '../components/common/Breadcrumbs';
import Image from '../assets/Background/Bredicombs.png'
import Main from '../components/about/Main';
import Rules from '../components/about/Rules';

const About = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${Image})`,
                    backgroundRepeat: 'repeat',
                    // backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '20vh'
                }}
            >
                <Container maxWidth={'xl'}>
                    <Breadcrumbs page={'About'} />
                </Container>

            </Box>
            <Container maxWidth={'xl'}>
                <Main />
                <Rules />
            </Container>
        </Box>
    )
}

export default About