import React from 'react';
import { Box, Typography, Stack, styled } from '@mui/material';
import logo from "../../Logo.png";

const Logo = styled('img')(({ theme }) => ({
    height: '60px', // Adjust logo height for better scaling
    width: 'auto',  // Allow logo to scale proportionally
    marginRight: theme.spacing(2),
}));

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', px: 4, py: 2 }}>
            <Logo src={logo} alt="Logo" />
            <Stack direction="row" spacing={2}>
                <Typography variant="body2" color="white">
                    © 2024 My Website
                </Typography>
                <Typography variant="body2" color="white">
                    Terms
                </Typography>
                <Typography variant="body2" color="white">
                    Privacy
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;