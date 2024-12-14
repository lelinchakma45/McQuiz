import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { colors } from "../../theme/colors";
import { Link } from "react-router-dom";
import { useState } from "react";

const links = [
    {
        name: 'Home',
        path: '/home',
    },
    {
        name: 'About us',
        path: '/about',
    },
    {
        name: `FAQ's`,
        path: '/faq',
    },
    {
        name: 'Contact us',
        path: '/contact',
    },

]

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            console.log('Email submitted:', email);
            // Add your submission logic here
            setEmail('');
        }
    };
    return (
        <Box
            sx={{
                background: colors.primary,
                color: '#FFF'
            }}
            mt={5}
            pt={10}
            pb={3}
        >
            <Container maxWidth={'xl'}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Box>
                                <Box>
                                    <Typography fontWeight={700} fontSize={24}><Typography component={'span'} fontWeight={700} fontSize={24} color={colors.warning}>L</Typography>OGO</Typography>
                                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus eius magnam! Fugiat illo impedit distinctio soluta, dolorum rerum asperiores totam dolore libero sapiente? Eum possimus doloremque ea excepturi. Similique?</Typography>
                                </Box>
                                <Box>
                                    <Link to={""}>
                                        <Box>
                                            <i></i>
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <Box>
                                <Typography fontWeight={600} fontSize={20}>Infortant Links</Typography>
                                {links.map((item, index) => (
                                    <Link to={item.path} key={index}>
                                        <Box my={1}>
                                            <Typography color="#FFF">{item.name}</Typography>
                                        </Box>
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <Box>
                                <Typography fontWeight={600} fontSize={20}>Categories</Typography>
                                {links.map((item, index) => (
                                    <Link to={item.path} key={index}>
                                        <Box my={1}>
                                            <Typography color="#FFF">{item.name}</Typography>
                                        </Box>
                                    </Link>
                                ))}
                            </Box>
                        </Grid>

                        <Grid item xs={6} lg={4}>
                            <Box>
                                <Box mb={2}>
                                    <Typography fontWeight={600} fontSize={20}>Get in Touch</Typography>
                                    <Typography>We don't send spam so don't worry</Typography>
                                </Box>
                                <form
                                    onSubmit={handleSubmit}
                                    style={{ display: 'flex', gap: '2px' }}
                                >
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address"
                                        required
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                bgcolor: 'white',
                                                borderRadius: '4px 0 0 4px',
                                                '& fieldset': {
                                                    border: 'none'
                                                },
                                                '&:hover fieldset': {
                                                    border: 'none'
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: 'none'
                                                }
                                            },
                                            '& .MuiOutlinedInput-input': {
                                                '&:focus': {
                                                    outline: 'none',
                                                    boxShadow: 'none'
                                                }
                                            }
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disableElevation
                                        sx={{
                                            bgcolor: 'warning.main',
                                            color: 'rgba(0, 0, 0, 0.87)',
                                            borderRadius: '0 4px 4px 0',
                                            px: 3,
                                            '&:hover': {
                                                bgcolor: 'warning.dark'
                                            },
                                            '&:focus': {
                                                outline: 'none',
                                                boxShadow: 'none'
                                            }
                                        }}
                                    >
                                        Send
                                    </Button>
                                </form>
                                <Box mt={2}>
                                    <Typography>Phone: +8801569179743</Typography>
                                    <Typography>Email: mail@lelinchakma.com</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={5} textAlign={'center'}>
                        <Typography>Copyright 2024. All Rights Reserved</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;