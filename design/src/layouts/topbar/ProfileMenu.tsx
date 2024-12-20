// src/components/layout/menu/ProfileMenu.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';

interface MenuItems {
  id: number;
  title: string;
  icon: string;
  path?: string;
  action?: () => void;
}

const getMenuItems = (role: string): MenuItems[] => [
  {
    id: 1,
    title: 'View Profile',
    icon: 'hugeicons:user-circle-02',
    path: `/profile`,
  },
  {
    id: 2,
    title: 'Help Center',
    icon: 'carbon:help',
    path: '/help',
  },
  {
    id: 3,
    title: 'Logout',
    icon: 'hugeicons:logout-03',
  },
];

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
//   const { student, logout } = useStudentAuth();
  const open = Boolean(anchorEl);

  // Get role-specific menu items
//   const menuItems = getMenuItems(student?.role || 'student');

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item: MenuItems) => {
    handleProfileMenuClose();

    if (item.title === 'Logout') {
    //   logout();
      navigate(paths.signin);
      return;
    }

    if (item.path) {
      navigate(item.path);
    }
  };

  // Get user's display name
//   const getDisplayName = () => {
//     if (!student) return '';
//     return student.first_name || student.last_name 
//       ? `${student.first_name} ${student.last_name}`.trim()
//       : student.email;
//   };

  // Get user's role display text
//   const getRoleDisplay = () => {
//     if (!student?.role) return '';
//     return student.role.charAt(0).toUpperCase() + student.role.slice(1);
//   };

  return (
    <>
      <Box sx={{ textAlign: 'right', mr:0 }}>
        <Typography variant="body1" color="text.primary">
          {/* Welcome, <Typography component={'span'} fontWeight={700}>{getDisplayName()}</Typography> */}
          Welcome Lelin Chakma
        </Typography>
        <Typography 
          variant="caption" 
          color="text.secondary"
          sx={{ fontSize: 12 }}
        >
          {/* {getRoleDisplay()} */}
          Student
        </Typography>
      </Box>

      <ButtonBase
        onClick={handleProfileClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        disableRipple
        sx={{ 
          borderRadius: '50%',
          overflow: 'hidden',
          '&:hover': { opacity: 0.8 }
        }}
      >
        <Avatar
          src={'student?.profile_image || undefined'}
          sx={{
            height: 48,
            width: 48,
            bgcolor: 'primary.main',
            border: '2px solid',
            borderColor: 'background.paper'
          }}
        >
          {/* {getDisplayName().charAt(0).toUpperCase()} */}
          Lelin Chakma
        </Avatar>
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 4,
          sx: {
            width: 230,
            overflow: 'visible',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box p={1}>
          <MenuItem 
            onClick={handleProfileMenuClose}
            sx={{ 
              borderRadius: 1,
              '&:hover': { bgcolor: 'action.hover' }
            }}
          >
            <Avatar 
              src={'student?.profile_image || undefined'}
              sx={{ 
                mr: 1, 
                height: 42, 
                width: 42,
                bgcolor: 'primary.main'
              }}
            >
              {/* {getDisplayName().charAt(0).toUpperCase()} */}
              Lelin Chakma
            </Avatar>
            <Stack direction="column">
              <Typography 
                variant="body2" 
                color="text.primary" 
                fontWeight={600}
                noWrap
              >
                {/* {getDisplayName()} */}
                Suprim
              </Typography>
              <Typography 
                variant="caption" 
                color="text.secondary" 
                fontWeight={400}
              >
                {/* {getRoleDisplay()} */}
                Student
              </Typography>
            </Stack>
          </MenuItem>
        </Box>

        <Divider sx={{ my: 0 }} />

        <Box p={1}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              sx={{ 
                py: 1,
                borderRadius: 1,
                '&:hover': { 
                  bgcolor: item.title === 'Logout' ? 'error.lighter' : 'action.hover',
                  '& .MuiListItemIcon-root, & .MuiTypography-root': {
                    color: item.title === 'Logout' ? 'error.main' : 'text.primary',
                  }
                }
              }}
            >
              <ListItemIcon 
                sx={{ 
                  mr: 1, 
                  color: item.title === 'Logout' ? 'error.main' : 'text.secondary',
                  fontSize: 'h5.fontSize' 
                }}
              >
                <IconifyIcon icon={item.icon} />
              </ListItemIcon>
              <Typography 
                variant="body2" 
                color={item.title === 'Logout' ? 'error.main' : 'text.secondary'}
                fontWeight={500}
              >
                {item.title}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
};

export default ProfileMenu;