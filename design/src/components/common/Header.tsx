import { Box, Container, Select, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box>
            <Container maxWidth={'xl'}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box>
                        <Typography><Typography component={'span'}>L</Typography>OGO</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <Box display={'flex'} alignItems={'center'} gap={3}>
                            <Box>
                                <Link to={''}>
                                    <Typography>Home</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link to={''}>
                                    <Typography>Why McQuiz</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link to={''}>
                                    <Typography>About us</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link to={''}>
                                    <Typography>Contact us</Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <Select>
                                
                            </Select>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={2}>
                            <Box>
                                <Link to={''}>
                                    <Typography>Login</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link to={''}>
                                    <Typography>Sign up</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header;