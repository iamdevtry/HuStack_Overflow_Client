import { AppBar, Container, IconButton, Toolbar } from '@material-ui/core';

const NavBar = () => {
    return (
        <AppBar>
            <Toolbar>
                {!searchOpen && (
                    <Container>
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
                            </div>
                        </div>
                    </Container>
                )}
            </Toolbar>
        </AppBar>
    );
};
export default NavBar;
