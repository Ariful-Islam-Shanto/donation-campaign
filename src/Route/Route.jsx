import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Main Layout/Root';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default Route;