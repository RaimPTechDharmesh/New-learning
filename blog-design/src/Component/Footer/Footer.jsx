import React from 'react';
import {Box, Typography, Link, Stack, styled} from '@mui/material';
import logo from "../../Logo.png";

const Logo = styled('img')(({ theme }) => ({
    height: '100px',
    width: '100px',
    marginRight: theme.spacing(2),
}));

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Logo src={logo} alt="Logo" />
            <Stack direction="row" spacing={2}>
                <Typography variant="body2" color="white">
                    © 2024 My Website
                </Typography>
                <Link href="#" underline="none" color="white">
                    Terms
                </Link>
                <Link href="#" underline="none" color="white">
                    Privacy
                </Link>
            </Stack>
        </Box>
    );
};

export default Footer;