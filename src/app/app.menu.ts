import { MenuItem } from '../GreenApp/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'Bulgaria',
                        icon: 'glyphicon-flag',
                        route: 'country-detail/Bulgaria',
                        submenu: null
                    },
                    {
                        text: 'Japan',
                        icon: 'glyphicon-flag',
                        route: 'country-detail/Japan',
                        submenu: null
                    },
                    {
                        text: 'China',
                        icon: 'glyphicon-flag',
                        route: 'country-detail/China',
                        submenu: null
                    }
                ],
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-flag',
                route: 'country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-flag',
                route: 'country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: 'country-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'County List',
                icon: 'glyphicon-th-list',
                route: 'country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'settings',
                submenu: null
            }
        ]
    }
]