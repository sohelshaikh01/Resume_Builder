import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'

import Form from "./pages/Form.jsx";
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/create',
        element: <Form/>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

{/* <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateResume />} />
          <Route path="/examples" element={<Examples />} />
      </Routes>
  </Router> */}