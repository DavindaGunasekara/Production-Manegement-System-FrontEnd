import React, { lazy } from 'react';

// project imports
import UsersLayout from 'layout/UsersLayout';
import Loadable from 'ui-component/Loadable';

// login option 3 routing
const Welcome = Loadable(lazy(() => import('views/pages/Users/Welcome')));
const TodaysOrder = Loadable(lazy(() => import('views/pages/Users/TodaysOrder')));
const ProductionPlan = Loadable(lazy(() => import('views/pages/Users/ProductionPlan')));
const Export = Loadable(lazy(() => import('views/pages/Users/Export')));
const Quality = Loadable(lazy(() => import('views/pages/Users/Quality')));
const Reports = Loadable(lazy(() => import('views/pages/Users/Reports')));

// ===========================|| USER ROUTING ||=========================== //

const UserRoutes = {
    path: '/',
    element: <UsersLayout />,
    children: [
        {
            path: '/Users',
            element: <Welcome />
        },
        {
            path: '/TodaysOrder',
            element: <TodaysOrder />
        },
        {
            path: '/ProductionPlan',
            element: <ProductionPlan />
        },
        {
            path: '/Export',
            element: <Export />
        },
        {
            path: '/Quality',
            element: <Quality />
        },
        {
            path: '/Reports',
            element: <Reports />
        }
    ]
};

export default UserRoutes;
