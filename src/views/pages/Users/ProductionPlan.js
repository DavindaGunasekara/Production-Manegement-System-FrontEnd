import React from 'react';

// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';

//= =============================|| SAMPLE PAGE ||==============================//

const ProductionPlan = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            <h1>Production Plan</h1>
        </Typography>
    </MainCard>
);

export default ProductionPlan;
