import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Link, styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../Logo.png';

const Logo = styled('img')(({ theme }) => ({
    height: '100px',
    width: '100px',
    marginRight: theme.spacing(2),
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [moreAnchorEl, setMoreAnchorEl] = useState(null);
    const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
    const [blogAnchorEl, setBlogAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMoreAnchorEl(null);
        setAboutAnchorEl(null);
        setBlogAnchorEl(null);
    };

    const handleMoreOpen = (event) => {
        setMoreAnchorEl(event.currentTarget);
    };

    const handleAboutOpen = (event) => {
        setAboutAnchorEl(event.currentTarget);
    };

    const handleBlogOpen = (event) => {
        setBlogAnchorEl(event.currentTarget);
    };

    return (
        <AppBar position="static" style={{backgroundColor: '#2b4560'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Logo src={logo} alt="Logo" />
                </Typography>
                <div>
                    <Button color="inherit" component={Link} href="/home">Home</Button>
                    <Button color="inherit" onClick={handleAboutOpen}>About</Button>
                    <Menu
                        anchorEl={aboutAnchorEl}
                        open={Boolean(aboutAnchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} href="/about/team">Our Team</MenuItem>
                        <MenuItem component={Link} href="/about/mission">Our Mission</MenuItem>
                        <MenuItem component={Link} href="/about/history">Our History</MenuItem>
                    </Menu>
                    <Button color="inherit" onClick={handleBlogOpen}>Blogs</Button>
                    <Menu
                        anchorEl={blogAnchorEl}
                        open={Boolean(blogAnchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} href="/blog/ourBlog">Our Blog</MenuItem>
                        <MenuItem component={Link} href="/blog/blogGrid">Blog Grid</MenuItem>
                        <MenuItem component={Link} href="/blog/blogDetails">Blog Details</MenuItem>
                        <MenuItem component={Link} href="/blog/ourLatestBlog">Our Latest Blog</MenuItem>
                    </Menu>
                    <Button color="inherit" component={Link} href="/contact">Contact</Button>
                    <Button color="inherit" onClick={handleMoreOpen}>More</Button>
                    <Menu
                        anchorEl={moreAnchorEl}
                        open={Boolean(moreAnchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} href="/gallery">Gallery</MenuItem>
                        <MenuItem component={Link} href="/blog">Blog</MenuItem>
                        <MenuItem component={Link} href="/faq">FAQ</MenuItem>
                    </Menu>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} href="/home">Home</MenuItem>
                        <MenuItem onClick={handleAboutOpen}>About</MenuItem>
                        <MenuItem onClick={handleBlogOpen}>Blog</MenuItem>
                        <MenuItem component={Link} href="/contact">Contact</MenuItem>
                        <MenuItem onClick={handleMoreOpen}>More</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
