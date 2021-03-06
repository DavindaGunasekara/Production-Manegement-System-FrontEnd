import React, { useState, useEffect } from 'react';
import { Grid, Table, Badge, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import { values } from 'lodash';
import { makeStyles } from '@material-ui/styles';
import MuiTypography from '@material-ui/core/Typography';
import MainCard from 'ui-component/cards/MainCard';
import DoughnutChart from 'utils/DoughnutChart';

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

const TodaysOrder = () => {
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        // const token = localStorage.getItem("authToken");
        // console.log(token, "token");

        fetch('http://localhost:4000/displayStock/displayStock', {
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
                setUsersData(arr);
                console.log(arr);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const orderData = JSON.parse(localStorage.getItem('todaysOrder'));
    console.log(orderData);
    const classes = useStyles();
    return (
        <MainCard>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={3}>
                    <SubCard title="Current Stock" className={classes.SubCard1}>
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell colSpan={2}>Raw Material</TableCell>
                                            <TableCell colSpan={2}>Quantity(kg)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {usersData.map((item, index) => (
                                            <TableRow key={index.toString()}>
                                                <TableCell colSpan={2}>{`${item.rawMaterial}`}</TableCell>
                                                <TableCell colSpan={2}>{`${item.quantity}`}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Current Processing" className={classes.SubCard1} style={{ height: '100%' }}>
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <SubCard className={classes.SubCard2}>
                                    <Badge md={10}>{localStorage.getItem('OrderNo')}</Badge>
                                </SubCard>
                            </Grid>
                            <Grid item>
                                <Table>
                                    {orderData.map((item, index) => (
                                        <TableBody key={index}>
                                            <TableRow>
                                                <TableCell>Product Dimension</TableCell>
                                                <TableCell>{`${item.ProductDimension}`}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Special Notes Quality</TableCell>
                                                <TableCell>{`${item.SpecialNotesQuality}`}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Chemical Status</TableCell>
                                                <TableCell>{`${item.chemicalStatus}`}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Order Quantity</TableCell>
                                                <TableCell>{`${item.orderQuantity}`}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Packing Type</TableCell>
                                                <TableCell>{`${item.packingType}`}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Product Grade</TableCell>
                                                <TableCell>{`${item.productGrade}`}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Special Notes Export</TableCell>
                                                <TableCell>{`${item.specialNotesExport}`}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    ))}
                                </Table>
                            </Grid>
                            <Grid item xs={12} sm={2} spacing={4}>
                                <SubCard title="Amendments" className={classes.SubCard2}>
                                    <Table>
                                        <tbody align="center">
                                            <tr>
                                                <MuiTypography variant="h5">
                                                    <td>{localStorage.getItem('Amendments')}</td>
                                                </MuiTypography>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SubCard>
                            </Grid>
                            <Grid item>
                                <SubCard className={classes.SubCard2}>
                                    <Badge md={10}>
                                        <MuiTypography variant="h5">
                                            Start Date:
                                            <br />
                                            {localStorage.getItem('StartDate')}
                                        </MuiTypography>
                                    </Badge>
                                </SubCard>
                            </Grid>
                            <Grid item>
                                <SubCard className={classes.SubCard2}>
                                    <Badge md={10}>
                                        <MuiTypography variant="h5">
                                            End date:
                                            <br />
                                            {localStorage.getItem('EndDate')}
                                        </MuiTypography>
                                    </Badge>
                                </SubCard>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={3} spacing={4}>
                    <SubCard title="Production Progress" className={classes.SubCard1} style={{ height: '100%' }}>
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <DoughnutChart />
                            </Grid>
                            <Grid item>
                                <SubCard className={classes.SubCard2}>
                                    <Badge md={10}>
                                        <MuiTypography variant="h5">
                                            Completed
                                            <br />
                                            {localStorage.getItem('CompletedOrder')}
                                        </MuiTypography>
                                    </Badge>
                                </SubCard>
                            </Grid>
                            <Grid item>
                                <SubCard className={classes.SubCard2}>
                                    <Badge md={10}>
                                        <MuiTypography variant="h5">
                                            Dispatched
                                            <br />
                                            {localStorage.getItem('DispatchedOrder')}
                                        </MuiTypography>
                                    </Badge>
                                </SubCard>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default TodaysOrder;
