import React, { useState } from 'react';
// material-ui
import { Grid, TextField, MenuItem, Button, InputAdornment, Select, InputLabel } from '@material-ui/core';
// import MuiTypography from '@material-ui/core/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { values } from 'lodash';
// import DropDownMenu from 'material-ui/DropDownMenu';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
    const [quantity, setQuantity] = useState('');
    const [rawMaterial, setRawMaterial] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [orderNo, setOrderNo] = useState('');
    const [orderType, setOrderType] = useState('');
    const [completedOrder, setCompletedOrder] = useState('');
    const [dispatchedOrder, setDispatchedOrder] = useState('');
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
    function selectOrder() {
        const data = {
            // eslint-disable-next-line
            orderNo: orderNo,
            // eslint-disable-next-line
            orderType: orderType
        };
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
                    // const arr = values(data);
                    localStorage.setItem('todaysOrder', JSON.stringify(data));
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
                    <SubCard title="Select Today's Order">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Order No"
                                    id="outlined-size-normal"
                                    defaultValue="Type Order No"
                                    onChange={(e) => setOrderNo(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel id="demo-multiple-name-label" sx={{ width: '26ch' }}>
                                    Raw Material
                                </InputLabel>
                                <Select
                                    sx={{ width: '50ch' }}
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    label="Raw Material"
                                    onChange={(e) => setOrderType(e.target.value)}
                                >
                                    <MenuItem value="Regular Basis">Regular</MenuItem>
                                    <MenuItem value="One-time Basis">One-time</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => selectOrder()}>
                                    Get Details
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <SubCard title="Search Amendments">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField sx={{ width: '50ch' }} label="Order No" id="outlined-size-normal" defaultValue="Type Order No" />
                            </Grid>
                            <Grid item>
                                <TextField select sx={{ width: '50ch' }} label="Order Type" id="outlined-size-normal" defaultValue="Select">
                                    <MenuItem onClick disableRipple>
                                        Regular
                                    </MenuItem>
                                    <MenuItem onClick disableRipple>
                                        One-time
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium">
                                    Get Details
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                    <SubCard title="Set Target Period">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Start Date"
                                    id="outlined-size-normal"
                                    defaultValue="Type Start Date"
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="End Date"
                                    id="outlined-size-normal"
                                    defaultValue="Type End Date"
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                {/* <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Add Amendments"
                                style={{ width: 400, height: 200 }}
                            /> */}
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
                                    defaultValue="Enter Quantity"
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel id="demo-multiple-name-label" sx={{ width: '26ch' }}>
                                    Raw Material
                                </InputLabel>
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
                                <TextField sx={{ width: '50ch' }} label="Order No" id="outlined-size-normal" defaultValue="Type Order No" />
                            </Grid>
                            <Grid item>
                                <TextField select sx={{ width: '50ch' }} label="Order Type" id="outlined-size-normal" defaultValue="Select">
                                    <MenuItem onClick disableRipple>
                                        Regular
                                    </MenuItem>
                                    <MenuItem onClick disableRipple>
                                        One-time
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium">
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
                                    defaultValue="Type Completed Order No"
                                    onChange={(e) => setCompletedOrder(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Dispatched Order"
                                    id="outlined-size-normal"
                                    defaultValue="Type Dispatched Order No"
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

export default Typography;
