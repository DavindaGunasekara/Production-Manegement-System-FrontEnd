import React, { useState, useEffect } from 'react';
import { Grid, Table, Badge, Box, Card, CardContent, ImageList } from '@material-ui/core';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import { values } from 'lodash';
import { makeStyles } from '@material-ui/styles';
import MuiTypography from '@material-ui/core/Typography';
import MainCard from 'ui-component/cards/MainCard';
import { array } from 'prop-types';

const useStyles = makeStyles((theme) => ({
    SubCard1: {
        background: theme.palette.orange.light,
        textAlign: '',
        borderColor: theme.palette.orange.main
    },
    SubCard2: {
        background: theme.palette.orange.main,
        borderColor: theme.palette.orange.dark
    }
}));

const ProductionPlan = () => {
    const [calendarData, setCalendarData] = useState([]);
    useEffect(() => {
        // const token = localStorage.getItem("authToken");
        // console.log(token, "token");

        fetch('http://localhost:4000/selectCalendarData/selectCalendarData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // Authorization: "Bearer " + token,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                const arr = values(data.data);
                console.log(arr[0].Month);
                const year = localStorage.getItem('CurrentYear');
                if (arr[0].Month === 'Apr' || arr[0].Month === 'Jun' || arr[0].Month === 'Sep' || arr[0].Month === 'Nov') {
                    arr.pop();
                } else if (arr[0].Month === 'Feb' && year % 4 === 0) {
                    arr.splice([29], 2);
                } else {
                    arr.splice([28], 3);
                }
                setCalendarData(arr);
                console.log(arr);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const classes = useStyles();
    return (
        <MainCard title="Production Plan">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                        <Grid item>
                            <ImageList cols="3">
                                {calendarData.map((item) => (
                                    <Box sx={{ display: 'grid' }}>
                                        <Card sx={{ display: 'flex', width: '100%', backgroundColor: 'cornsilk' }} key={item.id}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    backgroundColor: 'darksalmon',
                                                    width: '30%'
                                                }}
                                            >
                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <MuiTypography component="div" variant="h1">
                                                        {`${item.Date}`}
                                                    </MuiTypography>
                                                    <MuiTypography variant="h3" color="text.dark" component="div">
                                                        {`${item.Month}`}
                                                    </MuiTypography>
                                                </CardContent>
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
                                                    <MuiTypography component="div" variant="h4">
                                                        {`${item.orderNo}`}
                                                    </MuiTypography>
                                                    <MuiTypography variant="subtitle1" color="text.primary" component="div">
                                                        {`${item.Description}`}
                                                    </MuiTypography>
                                                </CardContent>
                                            </Box>
                                        </Card>
                                    </Box>
                                ))}
                            </ImageList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ProductionPlan;
