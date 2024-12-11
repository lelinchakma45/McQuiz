import { Box, Button, Container, Menu, MenuItem, styled, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';

const NavLink = styled(Link)(() => ({
    position: 'relative',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 0.3s ease-in-out',

    '& .MuiTypography-root': {
        fontWeight: 400,
        transition: 'color 0.3s ease-in-out, font-weight 0.3s ease-in-out',
    },

    '&::after': {
        content: '""',
        position: 'absolute',
        width: '0%',
        height: '2px',
        bottom: '-4px',
        left: '0',
        backgroundColor: colors.primary,
        transition: 'width 0.3s ease-in-out',
    },

    '&:hover': {
        '& .MuiTypography-root': {
            color: colors.primary,
            fontWeight: 600,
        },
        '&::after': {
            width: '100%',
        }
    },

    '&.active': {
        '& .MuiTypography-root': {
            color: colors.primary,
            fontWeight: 700,
        },
        '&::after': {
            width: '100%',
        }
    }
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [selectedLang, setSelectedLang] = useState('EN');

    const languages = [
        { code: 'EN', name: 'English' },
        { code: 'ES', name: 'Español' },
        { code: 'FR', name: 'Français' },
        { code: 'DE', name: 'Deutsch' }
    ];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget as HTMLElement);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageSelect = (code: string) => {
        setSelectedLang(code);
        handleClose();
    };
    const isActive = (path: string) => location.pathname === path;
    return (
        <Box
        >
            <Container maxWidth={'xl'}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} minHeight={90}>
                    <Box>
                        <Typography fontWeight={700} fontSize={24}><Typography component={'span'} fontWeight={700} fontSize={24} color={colors.primary}>L</Typography>OGO</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <Box display={'flex'} alignItems={'center'} gap={5} mr={4}>
                            <Box>
                                <NavLink to="/" className={isActive('/') ? 'active' : ''}>
                                    <Typography>Home</Typography>
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink to="/why-mcquiz" className={isActive('/why-mcquiz') ? 'active' : ''}>
                                    <Typography>Why McQuiz</Typography>
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink to="/about" className={isActive('/about') ? 'active' : ''}>
                                    <Typography>About us</Typography>
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink to="/contact" className={isActive('/contact') ? 'active' : ''}>
                                    <Typography>Contact us</Typography>
                                </NavLink>
                            </Box>
                        </Box>
                        <Box>
                            <Button
                                id="language-button"
                                aria-controls={open ? 'language-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon />}
                                disableRipple
                                sx={{
                                    color: 'text.secondary',
                                    minWidth: '80px',
                                    textTransform: 'none',
                                    padding: '6px 10px',
                                    '&:hover': {
                                        backgroundColor: 'transparent'
                                    },
                                    '&:focus': {
                                        outline: 'none',
                                        backgroundColor: 'transparent'
                                    },
                                    '&.MuiButton-root': {
                                        boxShadow: 'none',
                                        '&:hover': {
                                            boxShadow: 'none',
                                        }
                                    }
                                }}
                            >
                                {selectedLang}
                            </Button>
                            <Menu
                                id="language-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'language-button',
                                    sx: {
                                        padding: 0
                                    }
                                }}
                                sx={{
                                    '& .MuiPaper-root': {
                                        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                                        marginTop: '4px'
                                    }
                                }}
                            >
                                {languages.map((lang) => (
                                    <MenuItem
                                        key={lang.code}
                                        onClick={() => handleLanguageSelect(lang.code)}
                                        disableRipple
                                        sx={{
                                            minWidth: '120px',
                                            fontSize: '0.875rem',
                                            '&:hover': {
                                                backgroundColor: 'transparent'
                                            },
                                            '&.Mui-selected': {
                                                backgroundColor: 'transparent'
                                            },
                                            '&.Mui-focusVisible': {
                                                backgroundColor: 'transparent'
                                            }
                                        }}
                                    >
                                        {lang.name} ({lang.code})
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={2}>
                            <Box>
                                <Link to={''}>
                                    <Typography>Login</Typography>
                                </Link>
                            </Box>
                            <Link to={''}>
                                <Box
                                    py={1}
                                    px={2}
                                    border={'1px solid'}
                                    borderRadius={99}
                                >
                                    <Typography>Sign up</Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header;