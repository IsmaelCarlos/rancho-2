import { useLocation, Outlet } from 'react-router-dom'

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Home from '@/screens/Home';

function App() {

    const location = useLocation();

    return <>
        <Sidebar color='blue' />
        {/* color='#352320' */}
        
        <div id="content" className="p-4 p-md-5">
            

            <Header />

            {
                location.pathname === '/'
                    ? <Home />
                    : <Outlet />
            }


        </div>
    </>
}

export default App
