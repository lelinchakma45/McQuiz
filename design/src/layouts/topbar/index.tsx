import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import LogoImg from '../../../assets/logo.png';
import ProfileMenu from './ProfileMenu';

interface TopbarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isClosing, mobileOpen, setMobileOpen }: TopbarProps) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack
      px={3.5}
      height={90}
      alignItems="center"
      justifyContent="space-between"
      bgcolor="info.lighter"
      position="sticky"
      top={0}
      zIndex={1200}
      className='no-print'
      // borderBottom={'1px solid'}
    >
      <Stack spacing={{ xs: 1, sm: 2 }} alignItems="center">
        <ButtonBase
          component={Link}
          href="/"
          disableRipple
          sx={{ lineHeight: 0, display: { xs: 'none', sm: 'block', lg: 'none' } }}
        >
          <img src={LogoImg} alt="logo" height={54} width={54} />
        </ButtonBase>

        <Toolbar sx={{ display: { xm: 'block', lg: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <IconifyIcon icon="clarity:menu-line" />
          </IconButton>
        </Toolbar>
      </Stack>

      <Stack spacing={{ xs: 1, sm: 2 }} alignItems="center">
        <ProfileMenu />
      </Stack>
    </Stack>
  );
};

export default Topbar;