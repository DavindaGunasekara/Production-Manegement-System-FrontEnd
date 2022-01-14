import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button, InputAdornment, Select, InputLabel, FormControl, FormHelperText } from '@material-ui/core';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { values } from 'lodash';
import { Formik } from 'formik';
import { Alert, CircularProgress } from '@mui/material';
import * as Yup from 'yup';

const Production = () => {
    const [quantity, setQuantity] = useState('');
    const [rawMaterial, setRawMaterial] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [orderNo, setOrderNo] = useState('');
    const [orderType, setOrderType] = useState('');
    const [completedOrder, setCompletedOrder] = useState('');
    const [dispatchedOrder, setDispatchedOrder] = useState('');
    const [chartCompleted, setChartCompleted] = useState([]);
    const [chartNotCompleted, setChartNotCompleted] = useState([]);
    const [show, setShow] = useState(false);
    const [alertContent, setAlertContent] = useState('');

    function updateStock() {
        const data = {
            // eslint-disable-next-line
            quantity: quantity,
            // eslint-disable-next-line
            rawMaterial: rawMaterial
        };
        fetch('http://localhost:4000/updateStock/updateStock', {
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
                    console.log('data updated');
                    // setShow(true);
                    // dispatch({ type: 'auth', authData: data });
                } else {
                    alert('data not added');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    function setTarget() {
        localStorage.setItem('StartDate', startDate);
        localStorage.setItem('EndDate', endDate);
    }
    function setOrderCompletion() {
        localStorage.setItem('CompletedOrder', completedOrder);
        localStorage.setItem('DispatchedOrder', dispatchedOrder);
    }
    function updateTarget() {
        localStorage.setItem('CompletedPercentage', chartCompleted);
        localStorage.setItem('NotCompletedPercentage', chartNotCompleted);
    }
    function selectOrder() {
        const data = {
            // eslint-disable-next-line
            orderNo: orderNo,
            // eslint-disable-next-line
            orderType: orderType
        };
        localStorage.setItem('OrderNo', orderNo);
        fetch('http://localhost:4000/select/select', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    console.log('data updated');
                    const arr = values(data.data);
                    localStorage.setItem('todaysOrder', JSON.stringify(arr));
                    setAlertContent('Order updated Successfully!');
                    setShow(true);
                } else {
                    alert('data not added');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <MainCard title="Production Department" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    {show ? (
                        <div>
                            <Alert
                                onClose={() => {
                                    setShow(false);
                                }}
                                variant="filled"
                                color="error"
                                severity="success"
                            >
                                {alertContent}
                            </Alert>
                            <br />
                        </div>
                    ) : (
                        <></>
                    )}
                    <SubCard title="Select Today's Order">
                        <Formik
                            initialValues={{ orderNo: '', orderType: '' }}
                            validationSchema={Yup.object().shape({
                                orderNo: Yup.string().max(50).min(8).required('Order No is Required'),
                                orderType: Yup.string().max(50).required('order Type is Required')
                            })}
                            onSubmit={() => {
                                selectOrder();
                                return new Promise((res) => setTimeout(res, 1000));
                            }}
                        >
                            {({ values, errors, handleChange, handleSubmit, isSubmitting, touched }) => (
                                <form>
                                    <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                                        <Grid item>
                                            <FormControl>
                                                <TextField
                                                    name="orderNo"
                                                    value={values.orderNo}
                                                    sx={{ width: '50ch' }}
                                                    label="Order No"
                                                    id="outlined-size-normal"
                                                    placeholder="XY-01-02"
                                                    autoComplete="off"
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        setOrderNo(e.target.value);
                                                    }}
                                                />

                                                {touched.orderNo && errors.orderNo && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {' '}
                                                        {errors.orderNo}{' '}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <FormControl>
                                                <InputLabel id="demo-multiple-name-label">Order Type</InputLabel>
                                                <Select
                                                    name="orderType"
                                                    value={values.orderType}
                                                    sx={{ width: '50ch' }}
                                                    labelId="demo-multiple-name-label"
                                                    id="demo-multiple-name"
                                                    label="Order Type"
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        setOrderType(e.target.value);
                                                    }}
                                                >
                                                    <MenuItem value="Regular Basis">Regular</MenuItem>
                                                    <MenuItem value="One-time Basis">One-time</MenuItem>
                                                </Select>
                                                {touched.orderType && errors.orderType && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {' '}
                                                        {errors.orderType}{' '}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                disabled={isSubmitting}
                                                // startIcon={isSubmitting ? <CircularProgress size="0.9rem" /> : undefined}
                                                variant="contained"
                                                size="medium"
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Get Details
                                            </Button>
                                        </Grid>
                                        {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Set Target Period">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Start Date"
                                    id="outlined-size-normal"
                                    placeholder="Start Date"
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="End Date"
                                    id="outlined-size-normal"
                                    placeholder="End Date"
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => setTarget()}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Update Stock">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Quantity"
                                    id="outlined-size-normal"
                                    placeholder="Quantity"
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel id="demo-multiple-name-label">Raw Material</InputLabel>
                                    <Select
                                        sx={{ width: '50ch' }}
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        label="Raw Material"
                                        onChange={(e) => setRawMaterial(e.target.value)}
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
                                <Button variant="contained" size="medium" onClick={() => updateStock()}>
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Update Target">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Completed Percentage"
                                    id="outlined-size-normal"
                                    placeholder="Completed"
                                    onChange={(e) => setChartCompleted(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Not Completed Percentage"
                                    id="outlined-size-normal"
                                    placeholder="Not Completed"
                                    onChange={(e) => setChartNotCompleted(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => updateTarget()}>
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Order Completion">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Completed Order"
                                    id="outlined-size-normal"
                                    placeholder="Completed Order"
                                    onChange={(e) => setCompletedOrder(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Dispatched Order"
                                    id="outlined-size-normal"
                                    placeholder="Dispatched Order"
                                    onChange={(e) => setDispatchedOrder(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => setOrderCompletion()}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Production;
