import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTheme } from '@material-ui/styles';
import { Box, Card, Grid, TextField, InputLabel, Select, MenuItem, FormControl, Button, Alert } from '@material-ui/core';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

const ShadowBox = ({ shadow }) => {
    const theme = useTheme();
    return (
        <Card sx={{ mb: 3, boxShadow: shadow }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3,
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.grey[800]
                }}
            >
                <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
            </Box>
        </Card>
    );
};

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

//= ===========================|| UTILITIES SHADOW ||============================//

const Export = () => {
    const [orderNo, setOrderNo] = useState('');
    const [orderType, setOrderType] = useState('');
    const [orderQuantity, setOrderQuantity] = useState('');
    const [productGrade, setProductGrade] = useState('');
    const [specialNotesExport, setSpecialNotesExport] = useState('');
    const [amendments, setAmendments] = useState('');
    const [customerDeadline, setCustomerDeadline] = useState('');
    const [customerFeedBackOrderNo, setCustomerFeedBackOrderNo] = useState('');
    const [customerFeedBack, setCustomerFeedBack] = useState('');
    const [show, setShow] = useState(false);
    const addOrder = () => {
        const data = {
            // eslint-disable-next-line
            orderNo: orderNo,
            // eslint-disable-next-line
            orderQuantity: orderQuantity,
            // eslint-disable-next-line
            productGrade: productGrade,
            // eslint-disable-next-line
            specialNotesExport: specialNotesExport,
            // eslint-disable-next-line
            orderType: orderType
        };
        localStorage.setItem('CustomerOrderNo', orderNo);
        localStorage.setItem('CustomerOrderQuantity', orderQuantity);
        localStorage.setItem('CustomerProductGrade', productGrade);
        localStorage.setItem('CustomerSpecialNotesExport', specialNotesExport);
        localStorage.setItem('CustomerOrdertype', orderType);
        localStorage.setItem('CustomerDeadline', customerDeadline);
        fetch('http://localhost:4000/orders/create', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Success:', data);
                if (data) {
                    setShow(true);
                    // dispatch({ type: 'auth', authData: data });
                } else {
                    alert('Order not added');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    function addAmendments() {
        localStorage.setItem('Amendments', amendments);
    }
    function addCustomerFeedBack() {
        localStorage.setItem('CustomerFeedBackOrderNo', customerFeedBackOrderNo);
        localStorage.setItem('CustomerFeedBack', customerFeedBack);
    }
    return (
        <MainCard title="Export Department" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Add Order">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            {/* <Grid item>
                                <Alert
                                    variant="filled"
                                    severity="success"
                                    onClose={() => {
                                        alert('👋 Well, hi there! Thanks for dismissing me.');
                                    }}
                                    action={show}
                                >
                                    This is a success alert — check it out!
                                </Alert>
                            </Grid> */}
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Order No"
                                    id="outlined-size-normal"
                                    placeholder="Order No"
                                    onChange={(e) => setOrderNo(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel id="demo-simple-select-autowidth-label">Order Type</InputLabel>
                                    <Select
                                        sx={{ width: '50ch' }}
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        label="Order Type"
                                        onChange={(e) => setOrderType(e.target.value)}
                                    >
                                        <MenuItem value="Regular Basis">Regular</MenuItem>
                                        <MenuItem value="One-time Basis">One-time</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Order Quantity"
                                    id="outlined-size-normal"
                                    placeholder="Order Quantity"
                                    onChange={(e) => setOrderQuantity(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel id="demo-simple-select-autowidth-label">Product Grade</InputLabel>
                                    <Select
                                        sx={{ width: '50ch' }}
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-multiple-name"
                                        label="Product Grade"
                                        onChange={(e) => setProductGrade(e.target.value)}
                                    >
                                        <MenuItem value="Cinnamon Alba">Cinnamon Alba</MenuItem>
                                        <MenuItem value="Cinnamon C5 sp">Cinnamon C5 sp</MenuItem>
                                        <MenuItem value="Cinnamon C5">Cinnamon C5</MenuItem>
                                        <MenuItem value="Cinnamon C4">Cinnamon C4</MenuItem>
                                        <MenuItem value="Cinnamon H1">Cinnamon H1</MenuItem>
                                        <MenuItem value="Cinnamon H2">Cinnamon H2</MenuItem>
                                        <MenuItem value="Cinnamon Quillings">Cinnamon Quillings</MenuItem>
                                        <MenuItem value="Cinnamon Chips">Cinnamon Chips</MenuItem>
                                        <MenuItem value="Cinnamon Bale">Cinnamon Bale</MenuItem>
                                        <MenuItem value="Black Pepper">Black Pepper</MenuItem>
                                        <MenuItem value="White Pepper">White Pepper</MenuItem>
                                        <MenuItem value="Clove">Clove</MenuItem>
                                        <MenuItem value="Nutmeg">Nutmeg</MenuItem>
                                        <MenuItem value="Mace">Mace</MenuItem>
                                        <MenuItem value="Arica Nut">Arica Nut</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    id="outlined-multiline-static"
                                    label="Special Notes"
                                    multiline
                                    rows={6}
                                    placeholder="Special Notes"
                                    onChange={(e) => setSpecialNotesExport(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Customer Deadline"
                                    id="outlined-size-normal"
                                    placeholder=" Customer Deadline"
                                    onChange={(e) => setCustomerDeadline(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => addOrder()}>
                                    Save Details
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Amend the Current Order">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    id="outlined-multiline-static"
                                    label="Amendments to the Current Processing Order"
                                    multiline
                                    rows={4}
                                    placeholder="Amendments to the Current Processing Order"
                                    onChange={(e) => setAmendments(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => addAmendments()}>
                                    Save Amendments
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                    <Grid item style={{ marginTop: '4%' }}>
                        <SubCard title="Customer FeedBack">
                            <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                                <Grid item>
                                    <TextField
                                        sx={{ width: '50ch' }}
                                        label="Order No"
                                        id="outlined-size-normal"
                                        placeholder="Order No"
                                        onChange={(e) => setCustomerFeedBackOrderNo(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        sx={{ width: '50ch' }}
                                        label="FeedBack"
                                        id="outlined-size-normal"
                                        placeholder="FeedBack"
                                        onChange={(e) => setCustomerFeedBack(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" size="medium" onClick={() => addCustomerFeedBack()}>
                                        Save Customer FeedBack
                                    </Button>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Export;
