import React, { useState } from 'react';
import {
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

const Quality = () => {
    const [orderNo, setOrderNo] = useState('');
    const [orderType, setOrderType] = useState('');
    const [chemicalStatus, setChemicalStatus] = useState('');
    const [productGrade, setProductGrade] = useState('');
    const [specialNotesQuality, setSpecialNotesQuality] = useState('');
    const [productDimension, setProductDimension] = useState('');
    const [packingType, setPackingType] = useState('');
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [docOrderNo, setDocOrderNo] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [document, setDocument] = useState('');
    const [show, setShow] = useState(false);
    console.log(document);
    const addQualityDetails = () => {
        const data = {
            // eslint-disable-next-line
            orderNo: orderNo,
            // eslint-disable-next-line
            chemicalStatus: chemicalStatus,
            // eslint-disable-next-line
            productGrade: productGrade,
            // eslint-disable-next-line
            productDimension: productDimension,
            // eslint-disable-next-line
            packingType: packingType,
            // eslint-disable-next-line
            specialNotesQuality: specialNotesQuality,
            // eslint-disable-next-line
            orderType: orderType
        };
        fetch('http://localhost:4000/quality/update', {
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
    function handleCheck() {
        localStorage.setItem('ProductColor', checked1);
        localStorage.setItem('ProductDimension', checked2);
        localStorage.setItem('PackingCondition', checked3);
        localStorage.setItem('Cleanliness', checked4);
        localStorage.setItem('ContainerCondition', checked5);
        localStorage.setItem('ChemicalCondition', checked6);
    }
    const uploadDoc = () => {
        console.log(document);
        const data = {
            // eslint-disable-next-line
            orderNo: docOrderNo,
            // eslint-disable-next-line
            documentName: documentType,
            // eslint-disable-next-line
            document: document,
        };
        fetch('http://localhost:4000/insertDocument/insert', {
            method: 'POST',
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
    return (
        <MainCard title="Quality Assurance Department" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Add Quality Parameters to Orders">
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
                                <FormControl>
                                    <InputLabel id="demo-simple-select-autowidth-label">Chemical Status</InputLabel>
                                    <Select
                                        sx={{ width: '50ch' }}
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        label="Chemical Status"
                                        onChange={(e) => setChemicalStatus(e.target.value)}
                                    >
                                        <MenuItem value="SO2 free">SO2 free</MenuItem>
                                        <MenuItem value="With SO2">With SO2</MenuItem>
                                        <MenuItem value="Organic">Organic</MenuItem>
                                        <MenuItem value="Non Organic">Non Organic</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Product Dimension"
                                    id="outlined-size-normal"
                                    placeholder="Product Dimension"
                                    onChange={(e) => setProductDimension(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel id="demo-simple-select-autowidth-label">Packing Type</InputLabel>
                                    <Select
                                        sx={{ width: '50ch' }}
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        label="Packing type"
                                        onChange={(e) => setPackingType(e.target.value)}
                                    >
                                        <MenuItem value="Box">Box</MenuItem>
                                        <MenuItem value="Jute">Jute</MenuItem>
                                        <MenuItem value="PP Bags">PP Bags</MenuItem>
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
                                    onChange={(e) => setSpecialNotesQuality(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => addQualityDetails()}>
                                    Save Details
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Update Quality Confirmation">
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
                                                    name="Product Color"
                                                />
                                            }
                                            label="product Color"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked2}
                                                    onChange={(e) => setChecked2(e.target.checked)}
                                                    name="Product Dimension"
                                                />
                                            }
                                            label="Product Dimension"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked3}
                                                    onChange={(e) => setChecked3(e.target.checked)}
                                                    name="Packing Condition"
                                                />
                                            }
                                            label="Packing Condition"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked4}
                                                    onChange={(e) => setChecked4(e.target.checked)}
                                                    name="cleanliness"
                                                />
                                            }
                                            label="Cleanliness"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked5}
                                                    onChange={(e) => setChecked5(e.target.checked)}
                                                    name="Container Condition"
                                                />
                                            }
                                            label="Container Condition"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    Checked={checked6}
                                                    onChange={(e) => setChecked6(e.target.checked)}
                                                    name="Chemical condition"
                                                />
                                            }
                                            label="Chemical Condition"
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
                    <SubCard title="Upload Documents">
                        <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    label="Order No"
                                    id="outlined-size-normal"
                                    placeholder="Order No"
                                    onChange={(e) => setDocOrderNo(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel id="demo-simple-select-autowidth-label">Report Type</InputLabel>
                                    <Select
                                        sx={{ width: '50ch' }}
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        label="Document Type"
                                        onChange={(e) => setDocumentType(e.target.value)}
                                    >
                                        <MenuItem value="Company Standards">Company Standards</MenuItem>
                                        <MenuItem value="Specification Sheets">Specification Sheets</MenuItem>
                                        <MenuItem value="Technical Data Sheets">Technical Data Sheets</MenuItem>
                                        <MenuItem value="Material Data Sheets">Material Data Sheets</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{ width: '50ch' }}
                                    name="upload-photo"
                                    type="file"
                                    onChange={(e) => setDocument(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" onClick={() => uploadDoc()}>
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
