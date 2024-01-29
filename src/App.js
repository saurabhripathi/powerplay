
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './component/Applayout'
import {LoginComponent, ProductListsComponent, ProductDetailsComponent, CartComponent} from './lazyRoutes'
import { Suspense } from 'react';


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter([
  { path: '/login', element:< Suspense>< LoginComponent /></Suspense>  },
  {
    path: '/',
    element: <AppLayout />,
    children: [{
      path: '/list',
      element: < Suspense>< ProductListsComponent /></Suspense> 
    }, {
      path: '/products/:id',
      element: < Suspense>< ProductDetailsComponent /></Suspense> 
    },
    {
      path: '/cart',
      element: < Suspense>< CartComponent /></Suspense> 
    }

    ]
  }])

export default App;
