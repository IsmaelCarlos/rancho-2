import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'

import Login from '@/screens/Login'
import Registration_people from '@/screens/Registration_people'
import Registration_farm from '@/screens/Registration_farm'
import Teste from '@/screens/Teste'

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration_people/>
            },
            {
                path: '/teste',
                element: <Teste />
            },
            {
                path: '/registration_farm',
                element: <Registration_farm />
            },
        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
