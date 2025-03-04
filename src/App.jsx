import './App.css'
import { Outlet } from 'react-router-dom';
import {
    Header,
    Footer
} from "./components";


const App = () => (
    <div className="min-h-screen flex flex-col flex-wrap">
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer/>
    </div>
    
);


export default App;
