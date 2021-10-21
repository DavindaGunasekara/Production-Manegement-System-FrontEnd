import React from 'react';

// material-ui
import { Typography, Grid, Button, Paper, TextField, MenuItem } from '@material-ui/core';
import { gridSpacing } from 'store/constant';
import welcomeImage from '../../../assets/images/users/welcome1.png';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import MuiTypography from '@material-ui/core/Typography';

//= =============================|| SAMPLE PAGE ||==============================//

const Welcome = () => (
    <MainCard>
        <Grid container spacing={5}>
            <Grid item xs={12} sm={6} style={{ marginTop: '10%' }}>
                <Grid container direction="column" spacing={3} style={{ textAlign: 'center', fontSize: 22 }}>
                    <Grid item>
                        <MuiTypography variant="h1" gutterBottom>
                            Welcome to Rathna Cinnamon
                        </MuiTypography>
                        <MuiTypography variant="h1" gutterBottom>
                            Production Management System
                        </MuiTypography>
                    </Grid>
                    <Grid item spacing={1}>
                        <MuiTypography variant="h3" gutterBottom fontFamily="initial">
                            Begin the day with the system
                        </MuiTypography>
                    </Grid>
                    <Grid item>
                        <Button href="/pages/login/login3" variant="contained" size="large">
                            Sign in
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Paper>
                            <img src={welcomeImage} style={{ width: '93%', marginLeft: '0%', marginTop: '-8%' }} alt="Welcome" />
                        </Paper>
                    </Grid>
                    <br />
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
);

export default Welcome;
