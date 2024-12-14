import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps{
    page:string;
}

const Breadcrumbs = ({ page }:HeaderProps) => {
    return (
        <Box display={'flex'} gap={2} alignItems={'center'} pt={5} justifyContent={'center'} color={'#FFF'}>
            <Link to={''}>
                <Box>
                    <Typography fontWeight={500} fontSize={18} color='#FFF'>Home</Typography>
                </Box>
            </Link>
            <Box>
                <i className='bi bi-chevron-right'></i>
            </Box>
            <Link to={''}>
                <Box>
                    <Typography fontWeight={500} fontSize={18} color='#FFF'>{page}</Typography>
                </Box>
            </Link>
        </Box>
    )
}

export default Breadcrumbs;