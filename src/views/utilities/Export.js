import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Box, Card, Grid, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

//= ==============================|| SHADOW BOX ||===============================//

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

const UtilitiesShadow = () => (
    <MainCard title="Export Department" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <SubCard title="Add Order">
                    <Grid container direction="column" spacing={3} style={{ textAlign: 'center' }}>
                        <Grid item>
                            <TextField
                                sx={{ width: '50ch' }}
                                label="Order No"
                                id="outlined-size-normal"
                                defaultValue="Type Order No"
                                // onChange={(e) => setOrderNo(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <InputLabel id="demo-multiple-name-label" sx={{ width: '26ch' }}>
                                Order Type
                            </InputLabel>
                            <Select
                                sx={{ width: '50ch' }}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                label="Order Type"
                                // onChange={(e) => setOrderType(e.target.value)}
                            >
                                <MenuItem value="Regular Basis">Regular</MenuItem>
                                <MenuItem value="One-time Basis">One-time</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={{ width: '50ch' }}
                                label="Order Quantity"
                                id="outlined-size-normal"
                                defaultValue="Type Order Quantity"
                                // onChange={(e) => setOrderNo(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <InputLabel id="demo-multiple-name-label" sx={{ width: '26ch' }}>
                                Product Grade
                            </InputLabel>
                            <Select
                                sx={{ width: '50ch' }}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                label="Product Grade"
                                // onChange={(e) => setOrderType(e.target.value)}
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
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UtilitiesShadow;
