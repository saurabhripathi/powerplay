
import { Provider } from 'react-redux';
import { store } from '../store/appStore'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Header'
const AppLayout = ()=>{
    return <> 
      <Provider store={store}>
     <Header />
     <Outlet />
   </Provider>
    </>

}

export default AppLayout
