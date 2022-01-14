import React, { useEffect, useState } from 'react';
import { Typography, Grid, Table, Badge, ButtonBase, Avatar, Box, OutlinedInput, InputAdornment, Modal } from '@material-ui/core';
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

const Export = () => {
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
    const classes = useStyles();
    return (
        <MainCard style={{ height: '100%' }}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={3}>
                    <SubCard title="Search for Regular Orders" className={classes.SubCard1}>
                        <Grid container direction="column" spacing={3}>
                            <Grid item>
                                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <OutlinedInput
                                        className={classes.searchControl}
                                        id="input-search-header"
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Regular Orders"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <ButtonBase sx={{ borderRadius: '12px' }}>
                                                    <Avatar variant="rounded" className={classes.headerAvatar} onClick={handleOpen}>
                                                        <IconSearch stroke={1.5} size="1.2rem" />
                                                    </Avatar>
                                                </ButtonBase>
                                            </InputAdornment>
                                        }
                                        aria-describedby="search-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight'
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Table>
                                    {
                                        // eslint-disable-next-line
                                        orderData.filter((val) => {
                                                // eslint-disable-next-line
                                                if (searchTerm == '') {
                                                    // eslint-disable-next-line
                                                    return val;
                                                    // eslint-disable-next-line
                                                } else if (val.orderNo.toUpperCase().includes(searchTerm.toUpperCase())) {
                                                    // eslint-disable-next-line
                                                    return val;
                                                    // eslint-disable-next-line
                                                }
                                                // eslint-disable-next-line
                                            }).map((item, index) => {
                                                return (
                                                    <tbody>
                                                        <tr key={index.toString()}>
                                                            <td>{item.orderNo}</td>
                                                        </tr>
                                                        <Modal
                                                            open={open}
                                                            onClose={handleClose}
                                                            aria-labelledby="modal-modal-title"
                                                            aria-describedby="modal-modal-description"
                                                        >
                                                            <Box sx={style}>
                                                                <Typography id="modal-modal-title" variant="h4" component="h2">
                                                                    <h4>Order No:{item.orderNo}</h4>
                                                                </Typography>
                                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                                    <h4>Product Grade: {item.productGrade}</h4>
                                                                    <h4>Order Quantity: {item.orderQuantity}</h4>
                                                                    <h4>Order Type: {item.orderType}</h4>
                                                                    <h4>Chemical Status: {item.chemicalStatus}</h4>
                                                                    <h4>Product Dimension: {item.productDimension}</h4>
                                                                    <h4>Packing Type: {item.packingType}</h4>
                                                                    <h4>Product Grade: {item.productGrade}</h4>
                                                                    <h4>Special Notes From Export: {item.specialNotesExport}</h4>
                                                                    <h4>Special Notes From Quality: {item.specialNotesQuality}</h4>
                                                                </Typography>
                                                            </Box>
                                                        </Modal>
                                                    </tbody>
                                                );
                                            })
                                    }
                                </Table>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard className={classes.SubCard1}>
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <Grid>
                                    <IconBell />
                                </Grid>
                                <h1>New Order Placed</h1>
                                <SubCard className={classes.SubCard2}>
                                    <Badge md={10}>{localStorage.getItem('CustomerOrderNo')}</Badge>
                                </SubCard>
                            </Grid>
                            <Grid item>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Order Quantity</td>
                                            <td>{localStorage.getItem('CustomerOrderQuantity')}</td>
                                        </tr>
                                        <tr>
                                            <td>Product Grade</td>
                                            <td>{localStorage.getItem('CustomerProductGrade')}</td>
                                        </tr>
                                        <tr>
                                            <td>Special Notes</td>
                                            <td>{localStorage.getItem('CustomerSpecialNotesExport')}</td>
                                        </tr>
                                        <tr>
                                            <td>Order Type</td>
                                            <td>{localStorage.getItem('CustomerOrdertype')}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Grid>
                            <Grid item>
                                <SubCard className={classes.SubCard2}>
                                    <Badge md={10}>
                                        <MuiTypography variant="h5">
                                            Customer Deadline:
                                            <br />
                                            {localStorage.getItem('CustomerDeadline')}
                                        </MuiTypography>
                                    </Badge>
                                </SubCard>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <SubCard title="Customer Feedback" className={classes.SubCard1}>
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <SubCard className={classes.SubCard2}>
                                    <Badge md={10}>{localStorage.getItem('CustomerFeedBackOrderNo')}</Badge>
                                </SubCard>
                            </Grid>
                            <Grid item>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>{localStorage.getItem('CustomerFeedBack')}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Export;
