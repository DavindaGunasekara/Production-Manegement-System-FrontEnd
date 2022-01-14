import React, { useEffect, useState } from 'react';
import { Typography, Grid, Table, Badge, Avatar, Box, OutlinedInput, InputAdornment, Modal, Checkbox, Link, Tab } from '@material-ui/core';
import { IconSearch, IconAdjustmentsHorizontal, IconBell } from '@tabler/icons';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import { makeStyles } from '@material-ui/styles';
import MuiTypography from '@material-ui/core/Typography';
import MainCard from 'ui-component/cards/MainCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

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

const Reports = () => {
    const [orderData, setOrderData] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        // const token = localStorage.getItem("authToken");
        // console.log(token, "token");

        fetch('http://localhost:4000/selectRegular/selectRegular', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // Authorization: "Bearer " + token,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // const arr = values(data);
                setOrderData(data.data);
                console.log(data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    const QualityReport = JSON.parse(localStorage.getItem('QualityReport'));
    const LIReport = JSON.parse(localStorage.getItem('LoadingInspectionReport'));
    const WeightSheet = JSON.parse(localStorage.getItem('WeightSheet'));
    const DispatchedNote = JSON.parse(localStorage.getItem('DispatchedNote'));
    const classes = useStyles();
    return (
        <MainCard style={{ height: '100%' }}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <SubCard className={classes.SubCard1}>
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <Grid>
                                    <IconBell />
                                </Grid>
                                <h1>Report Confirmation</h1>
                                <SubCard className={classes.SubCard2} sx={{ width: '50%', marginLeft: '25%' }}>
                                    <Badge md={10}>RM-20-08</Badge>
                                </SubCard>
                            </Grid>
                            <Grid item>
                                <Table sx={{ marginLeft: '-10%' }}>
                                    <tbody>
                                        <tr>
                                            <td>Quality Report</td>
                                            <td>
                                                <Checkbox
                                                    defaultChecked={QualityReport}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    disabled
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Loading Inspection Report</td>
                                            <td>
                                                <Checkbox defaultChecked={LIReport} inputProps={{ 'aria-label': 'controlled' }} disabled />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight Sheet</td>
                                            <td>
                                                <Checkbox
                                                    defaultChecked={WeightSheet}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    disabled
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dispatched Note</td>
                                            <td>
                                                <Checkbox
                                                    defaultChecked={DispatchedNote}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    disabled
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid item xs={12} sm={5.8}>
                        <SubCard className={classes.SubCard1}>
                            <Link href="/QualityReports" underline="none">
                                Quality Reports
                            </Link>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={5.8} sx={{ marginLeft: '50%', marginTop: '-9.1%' }}>
                        <SubCard className={classes.SubCard1}>
                            <Link href="/LIReports" underline="none">
                                Loading Inspection Reports
                            </Link>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={5.8} sx={{ marginTop: '4%' }}>
                        <SubCard className={classes.SubCard1}>
                            <Link href="/WeightSheets" underline="none">
                                Weight Sheets
                            </Link>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={5.8} sx={{ marginLeft: '50%', marginTop: '-9.1%' }}>
                        <SubCard className={classes.SubCard1}>
                            <Link href="/DispatchedNotes" underline="none">
                                Dispatched Notes
                            </Link>
                        </SubCard>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Reports;
