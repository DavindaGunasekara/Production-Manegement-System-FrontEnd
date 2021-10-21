import React from 'react';

// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';

//= =============================|| SAMPLE PAGE ||==============================//

const Users = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            <h1>Users</h1>
        </Typography>
    </MainCard>
);

export default Users;
