import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Box, ButtonBase, Link, Tab, Tabs } from '@material-ui/core';

// project imports
import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// assets
import { IconMenu2 } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    // headerAvatar: {
    //     ...theme.typography.commonAvatar,
    //     ...theme.typography.mediumAvatar,
    //     transition: 'all .2s ease-in-out',
    //     background: theme.palette.secondary.light,
    //     color: theme.palette.secondary.dark,
    //     '&:hover': {
    //         background: theme.palette.secondary.dark,
    //         color: theme.palette.secondary.light
    //     }
    // },
    tabs: {
        '&:last-child': {
            position: 'flex',
            right: '0',
            paddingLeft: 390
        },
        '&:hover': {
            background: theme.palette.warning.light
        }
    },
    boxContainer: {
        width: '228px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 'auto'
        }
    }
}));

// ===========================|| MAIN NAVBAR / HEADER ||=========================== //

const Header = () => {
    const classes = useStyles();

    return (
        <>
            {/* logo & toggler button */}
            <div className={classes.boxContainer}>
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }} href="/Users">
                    <LogoSection />
                </Box>
                {/* <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar variant="rounded" className={classes.headerAvatar} onClick={handleLeftDrawerToggle} color="inherit">
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase> */}
            </div>

            {/* header search */}
            {/* <SearchSection theme="light" />
            <div className={classes.grow} />
            <div className={classes.grow} /> */}

            {/* notification & profile */}
            <div>
                <Tabs value onChange aria-label="disabled tabs example" className={classes.tabs}>
                    <Tab label="Today's Order" href="/TodaysOrder" />
                    <Tab label="Production Plan" href="/ProductionPlan" />
                    <Tab label="Export" href="/Export" />
                    <Tab label="Quality" href="/Quality" />
                    <Tab label="Reports" href="/Reports" />
                    <Tab label="Dashboard" href="/" />
                </Tabs>
            </div>
            <NotificationSection />
            <ProfileSection />
        </>
    );
};

// Header.propTypes = {
//     handleLeftDrawerToggle: PropTypes.func
// };

export default Header;
