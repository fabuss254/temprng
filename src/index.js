import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.css';

// Pages
import Home from './Pages/Home';
import Boisson from './Pages/Boisson';
import Contacts from './Pages/Contacts';
import Carte from './Pages/Carte';

// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Boisson",
    element: <Boisson/>,
  },
  {
    path: "/Contacts",
    element: <Contacts/>,
  },
  {
    path: "/Carte",
    element: <Carte/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
</>
);