import { Box, Container } from '@mui/material'
import React from 'react'
import Image from '../assets/Background/Bredicombs.png'
import Breadcrumbs from '../components/common/Breadcrumbs';
import Collapse from '../components/contact/Collapse';

const Contact = () => {
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
                    <Breadcrumbs page={'Contact'} />
                </Container>
            </Box>
            <Collapse />
        </Box>
    )
}

export default Contact;