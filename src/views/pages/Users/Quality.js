import React from 'react';

// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';

//= =============================|| SAMPLE PAGE ||==============================//

const Quality = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            <h1>Quality</h1>
        </Typography>
    </MainCard>
);

export default Quality;
