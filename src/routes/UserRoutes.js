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
const QualityReports = Loadable(lazy(() => import('views/pages/Users/QualityReports')));
const LIReports = Loadable(lazy(() => import('views/pages/Users/LIReports')));
const WeightSheets = Loadable(lazy(() => import('views/pages/Users/WeightSheets')));
const DispatchedNotes = Loadable(lazy(() => import('views/pages/Users/DispatchedNotes')));
const CompanyStandards = Loadable(lazy(() => import('views/pages/Users/CompanyStandards')));
const SpecificationSheets = Loadable(lazy(() => import('views/pages/Users/SpecificationSheets')));
const TechnicalDataSheets = Loadable(lazy(() => import('views/pages/Users/TechnicalDataSheets')));
const MaterialSafetyDataSheets = Loadable(lazy(() => import('views/pages/Users/MaterialSafetyDataSheets')));

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
        },
        {
            path: '/QualityReports',
            element: <QualityReports />
        },
        {
            path: '/LIReports',
            element: <LIReports />
        },
        {
            path: '/WeightSheets',
            element: <WeightSheets />
        },
        {
            path: '/DispatchedNotes',
            element: <DispatchedNotes />
        },
        {
            path: '/CompanyStandards',
            element: <CompanyStandards />
        },
        {
            path: '/SpecificationSheets',
            element: <SpecificationSheets />
        },
        {
            path: '/TechnicalDataSheets',
            element: <TechnicalDataSheets />
        },
        {
            path: '/MaterialSafetyDataSheets',
            element: <MaterialSafetyDataSheets />
        }
    ]
};

export default UserRoutes;
