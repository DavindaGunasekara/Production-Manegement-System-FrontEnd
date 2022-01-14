import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTheme } from '@material-ui/styles';
import {
    Box,
    Card,
    Grid,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    Button,
    FormLabel,
    Checkbox,
    FormControlLabel,
    FormGroup
} from '@material-ui/core';
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

const Quality = () => {
    const [orderNo, setOrderNo] = useState('');
    const [chemicalStatus, setChemicalStatus] = useState('');
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    // const [show, setShow] = useState(false);
    function handleCheck() {
        localStorage.setItem('QualityReport', checked1);
        localStorage.setItem('LoadingInspectionReport', checked2);
        localStorage.setItem('WeightSheet', checked3);
        localStorage.setItem('DispatchedNote', checked4);
    }
    return (
        <MainCard title="Reports of All Departments" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Update Report Confirmation">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                    <FormLabel component="legend" sx={{ marginLeft: '-22%' }}>
                                        <h3>Only Check Received Reports</h3>
                                    </FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked1}
                                                    onChange={(e) => setChecked1(e.target.checked)}
                                                    name="Quality Report"
                                                />
                                            }
                                            label="Quality Report"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked2}
                                                    onChange={(e) => setChecked2(e.target.checked)}
                                                    name="Loading Inspection Report"
                                                />
                                            }
                                            label="Loading Inspection Report"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked3}
                                                    onChange={(e) => setChecked3(e.target.checked)}
                                                    name="Weight Sheet"
                                                />
                                            }
                                            label="Weight Sheet"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked4}
                                                    onChange={(e) => setChecked4(e.target.checked)}
                                                    name="Dispatched Note"
                                                />
                                            }
                                            label="Dispatched Note"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => handleCheck()}>
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Upload Reports">
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
                                    <InputLabel id="demo-simple-select-autowidth-label">Report Type</InputLabel>
                                    <Select
                                        sx={{ width: '50ch' }}
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        label="Report Type"
                                        onChange={(e) => setChemicalStatus(e.target.value)}
                                    >
                                        <MenuItem value="Company Standards">Company Standards</MenuItem>
                                        <MenuItem value="Specification Sheets">Specification Sheets</MenuItem>
                                        <MenuItem value="Technical Data Sheets">Technical Data Sheets</MenuItem>
                                        <MenuItem value="Material Data Sheets">Material Data Sheets</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <TextField sx={{ width: '50ch' }} name="upload-photo" type="file" />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => handleCheck()}>
                                    Upload Report
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Quality;
