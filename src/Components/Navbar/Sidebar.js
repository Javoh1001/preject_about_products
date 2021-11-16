import React from 'react';
import {ReactComponent as Check} from './Images/check-circle.svg';
import {ReactComponent as Archive} from './Images/archive.svg';
import {ReactComponent as Layer} from './Images/layers.svg';
import {ReactComponent as Map} from './Images/map-pin.svg';
import {ReactComponent as User} from './Images/users.svg';
import {ReactComponent as BarChart} from './Images/bar-chart-2.svg';
import {ReactComponent as Setting} from './Images/setting.svg';

export const Sidebar = [
    {
        id:1,
        title:'Buyrutmalar',
        path:'/',
        icon:<Check />,
        cName:'nav-text',
    },
    {
        id:2,
        title:'Maxsulotlar',
        path:'/maxsulotlar',
        icon:<Archive />,
        cName:'nav-text',
    },
    {
        id:3,
        title:'Kategoryalar',
        path:'/kategoryalar',
        icon:<Layer />,
        cName:'nav-text',
    },
    {
        id:4,
        title:'Filiallar',
        path:'/filiallar',
        icon:<Map />,
        cName:'nav-text',
    },
    {
        id:5,
        title:'Mijozlar',
        path:'/mijozlar',
        icon:<User />,
        cName:'nav-text',
    },
    {
        id:6,
        title:'Xisobot',
        path:'/xisobot',
        icon:<BarChart />,
        cName:'nav-text',
    },  
    {
        id:7,
        title:'Katalog',
        path:'/katalog',
        icon:<Setting />,
        cName:'nav-text',
    },
    // {
    //     id:8,
    //     title:'Katalog',
    //     path:'/katalog',
    //     icon:<Setting />,
    //     cName:'nav-text',
    // },
    // {
    //     id:9,
    //     title:'Katalog',
    //     path:'/katalog',
    //     icon:<Setting />,
    //     cName:'nav-text',
    // },
    // {
    //     id:10,
    //     title:'Katalog',
    //     path:'/katalog',
    //     icon:<Setting />,
    //     cName:'nav-text',
    // },
    // {
    //     id:11,
    //     title:'Katalog',
    //     path:'/katalog',
    //     icon:<Setting />,
    //     cName:'nav-text',
    // },
    // {
    //     id:12,
    //     title:'Katalog',
    //     path:'/katalog',
    //     icon:<Setting />,
    //     cName:'nav-text',
    // },
    // {
    //     id:13,
    //     title:'Katalog',
    //     path:'/katalog',
    //     icon:<Setting />,
    //     cName:'nav-text',
    // }
]