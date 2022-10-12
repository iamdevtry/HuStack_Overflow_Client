import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import { useApolloClient } from '@apollo/client';
import { useAuthContext } from '../context/auth';

//component
import UserMenuMobile from './UserMenuMobile';
import UserMenuDesktop from './UserMenuDesktop';
import NavMenuMobile from './NavMenuMobile';
import SearchBar from './SearchBar';
import DarkModeSwitch from './DarkModeSwitch';

import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
    Button,
    Link,
} from '@material-ui/core';

import SofLogo from '../svg/stack-overflow.svg';

//icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
    const { user, logoutUser } = useAuthContext();
    const [searchOpen, setSearchOpen] = useState(false);
    const client = useApolloClient();
    const classes = useNavStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
        if (!isMobile && searchOpen) {
            setSearchOpen(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile]);

    const handleLogout = () => {
        logoutUser();
        client.resetStore();
    };

    return (
        <AppBar position="sticky" color="inherit" elevation={1} className={classes.appBar}>
            <Toolbar variant="dense" disableGutters={isMobile}>
                {!searchOpen && (
                    <Container disableGutters className="classes.contentContainer">
                        <div className={classes.leftPortion}>
                            <div className={classes.logoWrapper}>
                                {isMobile && <NavMenuMobile />}
                                {isMobile ? (
                                    <IconButton
                                        className={classes.logo}
                                        component={RouterLink}
                                        to="/"
                                    >
                                        <img src={SofLogo} width="25px" alt="sof-logo" />
                                    </IconButton>
                                ) : (
                                    <Button
                                        className={classes.logo}
                                        component={RouterLink}
                                        to="/"
                                        size="large"
                                    >
                                        <img
                                            src={SofLogo}
                                            width="28px"
                                            alt="sof-logo"
                                            style={{ marginRight: '5px' }}
                                        />
                                        stack<strong>underflow</strong>
                                    </Button>
                                )}
                                {!isMobile && (
                                    <Typography variant="caption" color="secondary">
                                        | Made with{' '}
                                        <FavoriteIcon style={{ fontSize: 10, color: '#f4649f' }} />
                                        by
                                        <Link
                                            href={'https://github.com/phongtrollx2'}
                                            color="inherit"
                                            target="_blank"
                                            rel="nooperner"
                                        >
                                            <strong>{` GG1`}</strong>
                                        </Link>
                                    </Typography>
                                )}
                            </div>
                            {!isMobile && <SearchBar />}
                        </div>
                        {isMobile ? (
                            <>
                                <IconButton
                                    color="primary"
                                    className="classes.searchBtn"
                                    onClick={() => setSearchOpen((prevState) => !prevState)}
                                >
                                    <SearchIcon />
                                </IconButton>
                                <DarkModeSwitch />
                                <UserMenuMobile user={user} logoutUser={handleLogout} />
                            </>
                        ) : (
                            <>
                                <UserMenuDesktop user={user} logoutUser={handleLogout} />
                                <DarkModeSwitch />
                            </>
                        )}
                    </Container>
                )}
                {searchOpen && isMobile && (
                    <SearchBar isMobile={isMobile} setSearchOpen={setSearchOpen} />
                )}
            </Toolbar>
        </AppBar>
    );
};
export default NavBar;
