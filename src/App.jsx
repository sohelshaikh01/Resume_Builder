import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


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
