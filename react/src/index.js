import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import ClientAlbum from './Pages/ClientAlbum';
import Blog from './Pages/Blog';
import Books from './Pages/Books';
import {createBrowserRouter,RouterProvider,Route,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "portfolio",
    element: <Portfolio/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "books",
    element: <Books/>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "clientalbum",
    element: <ClientAlbum/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}/>
  
);

