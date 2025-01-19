
import React from 'react';
import {
    Box,
} from '@mui/material';
import SideBard from './SideBard';
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <Box
                sx={{
                    bgcolor: 'white',
                    p: 2,
                    display: { xs: 'flex', md: 'none' },
                    position: 'sticky',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                }}
            >
                <Box onClick={toggleDrawer(true)}>
                    <Box component={'i'} fontSize={24} className='bi bi-list' />
                </Box>
                <Box>
                    <Box>
                        <Box
                            component={'img'}
                            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            width={40}
                            height={40}
                            borderRadius={9999}
                            sx={{
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', bgcolor: '#FFF' }}>
                {/* Sidebar */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        position: 'sticky',
                        top: 0,
                        height: '100vh',
                        zIndex: 1000,
                    }}
                >
                    <SideBard open={open} toggleDrawer={toggleDrawer} />
                </Box>


                {/* Main Content */}
                <Box
                    sx={{
                        maxHeight: '100vh',
                        overflowX:'auto'
                    }}
                >

                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default DashBoardLayout;