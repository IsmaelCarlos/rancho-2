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
import Report_bovine from '@/screens/Report_bovine' 
import Report_pharmacy from './screens/Report_pharmacy'
import Report from '@/screens/Report'
import Bovine from '@/screens/Bovine'
import Medication from '@/screens/Medication'
import Report_food from '@/screens/Report_food'
import Food from '@/screens/Food'
import Processing from './screens/Processing'
import Vaccinate from './screens/Vaccinate'
import Brinco from './screens/brinco'
// import Management from '@/screens/Management'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

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
            },
            {   
                path: '/report_pharmacy',
                element: <Report_pharmacy/>
            },
            {
                path: '/medication/:id',
                element: <Medication/>
            },
            {
                path: '/report_food',
                element: <Report_food/>
            },
            {
                path: '/food/:id',
                element: <Food/>
            },
            {
                path: '/processing',
                element: <Processing/>
            },
            {
                path: '/vaccinate',
                element:<Vaccinate/>
            },
            {
                path: '/brinco',
                element:<Brinco/>
            }
            // {
            //     path'/management',
            //     element:<Management/>
            // }
      
        ]
    },
    
]);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>,
)
