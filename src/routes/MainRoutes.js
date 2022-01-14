import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Production')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Planning&Operation')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Export')));
const UtilsQuality = Loadable(lazy(() => import('views/utilities/Quality')));
const UtilsReports = Loadable(lazy(() => import('views/utilities/Reports')));
const UtilsUsers = Loadable(lazy(() => import('views/utilities/Users')));
const TodaysOrder = Loadable(lazy(() => import('views/pages/Users/TodaysOrder')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/utils/util-quality',
            element: <UtilsQuality />
        },
        {
            path: '/utils/util-reports',
            element: <UtilsReports />
        },
        {
            path: '/utils/util-users',
            element: <UtilsUsers />
        },
        // {
        //     path: '/icons/tabler-icons',
        //     element: <UtilsTablerIcons />
        // },
        // {
        //     path: '/icons/material-icons',
        //     element: <UtilsMaterialIcons />
        // },

        {
            path: '/sample-page',
            element: <SamplePage />
        }
        // {
        //     path: '/TodaysOrder',
        //     element: <TodaysOrder />
        // }
    ]
};

export default MainRoutes;
