import { useState, PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';
import Topbar from './topbar';

const PanelLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <Stack width={1} minHeight="100vh" className='bg-trans' sx={{background:'#f2f3f3'}}>
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} setIsClosing={setIsClosing} />
      <Stack
        component="main"
        direction="column"
        width={{ xs: 1, lg: 'calc(100% - 252px)' }}
        flexGrow={1}
      >
        <Topbar isClosing={isClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <Box>
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
};

export default PanelLayout;