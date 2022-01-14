import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button, Select, InputLabel, FormControl } from '@material-ui/core';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { values } from 'lodash';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const ProductionPlan = () => {
    const [orderDeadline, setOrderDeadline] = useState('');
    const [orderNo, setOrderNo] = useState('');
    const [orderType, setOrderType] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    function setUpcomingOrderDeadline() {
        localStorage.setItem('UpcomingOrderDeadline', orderDeadline);
    }
    function updateCalendar() {
        console.log(orderDate);
        console.log(value);
        const valueNew = value.toString();
        const dateArray = valueNew.split(' ');
        const Month = dateArray[1];
        const DateNo = dateArray[2];
        localStorage.setItem('CurrentYear', dateArray[3]);
        const data = {
            // eslint-disable-next-line
            id: DateNo,
            // eslint-disable-next-line
            Date: DateNo,
            // eslint-disable-next-line
            Month: Month,
            // eslint-disable-next-line
            orderNo: orderDate,
            // eslint-disable-next-line
            orderType: orderType,
            // eslint-disable-next-line
            Description: description
        };
        fetch('http://localhost:4000/monthPlan/monthPlan', {
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
                } else {
                    alert('data not added');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    function selectOrder() {
        const data = {
            // eslint-disable-next-line
            orderNo: orderNo,
            // eslint-disable-next-line
            orderType: orderType
        };
        localStorage.setItem('UpcomingOrderNo', orderNo);
        fetch('http://localhost:4000/select/selectUpcoming', {
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
                    localStorage.setItem('UpcomingOrder', JSON.stringify(arr));
                } else {
                    alert('data not added');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <MainCard title="Planning and Operation Department">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Select Today's Order">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
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
                                    <InputLabel id="demo-multiple-name-label">Order Type</InputLabel>
                                    <Select
                                        sx={{ width: '50ch' }}
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        label="Order Type"
                                        onChange={(e) => setOrderType(e.target.value)}
                                    >
                                        <MenuItem value="Regular Basis">Regular</MenuItem>
                                        <MenuItem value="One-time Basis">One-time</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => selectOrder()}>
                                    Get Details
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Set Order Deadline">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Order No"
                                    id="outlined-size-normal"
                                    placeholder="Order No"
                                    // onChange={(e) => setStartDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Order Deadline"
                                    id="outlined-size-normal"
                                    placeholder="Order Deadline"
                                    onChange={(e) => setOrderDeadline(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => setUpcomingOrderDeadline()}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Update Calender">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item style={{ display: 'grid', width: '58vh', marginLeft: '12%' }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Select Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Order No"
                                    id="outlined-size-normal"
                                    placeholder="Order No"
                                    onChange={(e) => setOrderDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    placeholder="Description"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => updateCalendar()}>
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ProductionPlan;
