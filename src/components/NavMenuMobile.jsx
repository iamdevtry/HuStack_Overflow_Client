//libs
import { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

//component
import { IconButton, Menu, Typography, MenuItem, Divider, Link } from '@material-ui/core';

//icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PublicIcon from '@material-ui/icons/Public';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import FavoriteIcon from '@material-ui/icons/Favorite';

//styles
import { useMenuStyles } from '../styles/muiStyles';

const NavMenuMobile = () => {
    const { pathname } = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useMenuStyles();

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton color="primary" onClick={handleOpenMenu}>
                {!anchorEl ? <MenuIcon /> : <CloseIcon className={classes.closeIcon} />}
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                marginThreshold={0}
                elevation={1}
            >
                <MenuItem
                    selected={
                        pathname === '/' ||
                        (!pathname.startsWith('/tag') && !pathname.startsWith('/user'))
                    }
                    dense
                    component={RouterLink}
                    to="/"
                    onClick={handleCloseMenu}
                >
                    <PublicIcon className={classes.menuIcon} />
                    HuStack Overflow
                </MenuItem>
                <MenuItem
                    selected={pathname.startsWith('/tag')}
                    dense
                    component={RouterLink}
                    to="/tags"
                    onClick={handleCloseMenu}
                >
                    <LocalOfferIcon className={classes.menuIcon} />
                    Tags
                </MenuItem>
                <MenuItem
                    selected={pathname.startsWith('/user')}
                    dense
                    component={RouterLink}
                    to="/users"
                    onClick={handleCloseMenu}
                >
                    <PeopleIcon className={classes.menuIcon} />
                    Users
                </MenuItem>
                <Divider />
                <div className={classes.madeByItem}>
                    <Typography variant="caption" color="primary">
                        Made with <FavoriteIcon style={{ fontSize: 10, color: '#EE7B31' }} /> by{' '}
                        <Link
                            href={'https://github.com/phongtrollx2'}
                            color="inherit"
                            target="_blank"
                            rel="noopener"
                        >
                            <strong>{` GG1`}</strong>
                        </Link>
                    </Typography>
                </div>
            </Menu>
        </div>
    );
};

export default NavMenuMobile;
