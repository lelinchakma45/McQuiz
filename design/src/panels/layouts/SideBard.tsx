import { Box, Drawer, Typography } from '@mui/material';
import React from 'react'
import { colors } from '../../theme/colors';

interface Headerprops{
    open: boolean;
      toggleDrawer: (open: boolean) => () => void;
}

const SideBard = ({open, toggleDrawer}:Headerprops) => {
    return (
        <>
            <Box sx={{
                width: 240,
                bgcolor: 'white',
                p: 2,
                display: { xs: 'none', md: 'flex' },
                height: '100vh',
                flexDirection: 'column',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box>
                        <Typography fontWeight={700} fontSize={24}><Typography component={'span'} fontWeight={700} fontSize={24} color={colors.primary}>L</Typography>OGO</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                        <i className='bi bi-grid' />
                        <Typography>Dashboard</Typography>
                    </Box>
                    <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ background: 'red', cursor: 'pointer' }}>
                        <i className='bi bi-list-check' />
                        <Typography>Quick Learn</Typography>
                    </Box>
                    <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                        <i className='bi bi-question-diamond' />
                        <Typography>Quizzes</Typography>
                    </Box>
                    <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                        <i className='bi bi-award' />
                        <Typography>Leader board</Typography>
                    </Box>
                    <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                        <i className='bi bi-gear' />
                        <Typography>Setting</Typography>
                    </Box>
                    <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                        <i className='bi bi-person' />
                        <Typography>Profile</Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                    <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                        <i className='bi bi-box-arrow-right' />
                        <Typography>Sign out</Typography>
                    </Box>
                    <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                        <i className='bi bi-chevron-double-left' />
                        <Typography>Hide</Typography>
                    </Box>
                </Box>
            </Box>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                    <Box sx={{
                        width: 240,
                        bgcolor: 'white',
                        p: 2,
                        display: 'flex',
                        height: '100vh',
                        flexDirection: 'column'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                            <Box>
                                <Typography fontWeight={700} fontSize={24}><Typography component={'span'} fontWeight={700} fontSize={24} color={colors.primary}>L</Typography>OGO</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                                <i className='bi bi-grid' />
                                <Typography>Dashboard</Typography>
                            </Box>
                            <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ background: 'red', cursor: 'pointer' }}>
                                <i className='bi bi-list-check' />
                                <Typography>Quick Learn</Typography>
                            </Box>
                            <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                                <i className='bi bi-question-diamond' />
                                <Typography>Quizzes</Typography>
                            </Box>
                            <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                                <i className='bi bi-award' />
                                <Typography>Leader board</Typography>
                            </Box>
                            <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                                <i className='bi bi-gear' />
                                <Typography>Setting</Typography>
                            </Box>
                            <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                                <i className='bi bi-person' />
                                <Typography>Profile</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 'auto' }}>
                            <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                                <i className='bi bi-box-arrow-right' />
                                <Typography>Sign out</Typography>
                            </Box>
                            <Box display={'flex'} gap={1} alignItems={'center'} py={1} px={1} borderRadius={2} sx={{ cursor: 'pointer' }}>
                                <i className='bi bi-chevron-double-left' />
                                <Typography>Hide</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default SideBard;