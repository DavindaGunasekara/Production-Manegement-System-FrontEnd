// assets
import { IconBrandFramer, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconBrandFramer,
    IconLayoutGridAdd
};

// ===========================|| UTILITIES MENU ITEMS ||=========================== //

const utilities = {
    id: 'utilities',
    title: 'Departments',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Production',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Planning & Operations',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Export',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'util-quality',
            title: 'Quality',
            type: 'item',
            url: '/utils/util-quality',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'util-reports',
            title: 'Reports',
            type: 'item',
            url: '/utils/util-reports',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'util-users',
            title: 'Users',
            type: 'item',
            url: '/utils/util-users',
            icon: icons.IconShadow,
            breadcrumbs: false
        }
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default utilities;
