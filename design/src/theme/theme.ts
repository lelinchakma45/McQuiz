import { createTheme } from '@mui/material/styles';
import typography from './typography';
import { colors } from './colors';
import { lightcolors } from './lightcolors';

const theme = createTheme({
    palette: {
        primary: {
          main: colors.primary, // Use the imported color
          light: lightcolors.primary, // Use the imported color
        },
        success: {
          main: colors.success, // Use the imported color
          light: lightcolors.success, // Use the imported color
        },
        warning: {
          main: colors.warning, // Use the imported color
          light: lightcolors.warning, // Use the imported color
        },
        error: {
          main: colors.danger, // Use the imported color (Mapped to error/danger)
          light: lightcolors.danger, // Use the imported color (Mapped to error/danger)
        },
    },
    typography,
});

export default theme;