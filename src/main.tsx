import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import Login from '@/screens/Login'
import Registration_people from '@/screens/Registration_people'
import Registration_farm from '@/screens/Registration_farm'
import Perfil_user from '@/screens/Perfil_user'
import Registration_bovine from '@/screens/Registration_bovine'
import Registration_option from '@/screens/Registrations_option'
import Registration_pharmacy from '@/screens/Registration_pharmacy'
import Registration_food from '@/screens/Registration_food'
import Report from '@/screens/Report'
import Report_bovine from '@/screens/Report_bovine'
import Bovine from '@/screens/Bovine'
// import Management from '@/screens/Management'

import './css/bootstrap.css';
import './css/noticia.css';
import './css/style.css';

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
                element: <Registration_farm/>
            },
            {
                path: '/perfil_user',
                element: <Perfil_user/>
            },
            {
                path: '/registration_bovine',
                element: <Registration_bovine/>
            },
            {
                path:'/registration_option',
                element:<Registration_option/>
            },
            {
                path: '/registration_pharmacy',
                element:<Registration_pharmacy/>
            },
            {
                path: '/registration_food',
                element: <Registration_food/>
            },
            {
                path: '/report',
                element: <Report/>
            },
            {
                path:  '/report_bovine',
                element: <Report_bovine/>
            },
            {
                path: '/bovine/:id',
                element: <Bovine/>
            }
            // {
            //     path'/management',
            //     element:<Management/>
            // }
      
        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
