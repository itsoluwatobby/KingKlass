import { useEffect } from 'react';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { NavModal } from './components/modals/NavModal';
import { DesignerLayout } from './layout/DesignerLayout';
import { Login } from './components/authentication/Login';
import { initNavModals } from './utility/initialVariables';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDesignerContext } from './hooks/useDesignerContext';
import { UserNavModal } from './components/modals/UserNavModal';
import { Notifications } from './components/modals/Notiications';
import { Registration } from './components/authentication/Registration';
import { switchModals, toggleAttributes } from './utility/toggleModalStates';
import { Measurements } from './components/modals/Measurements';
import { Carts } from './components/modals/Cart';
import { CartPreview } from './components/modals/CartPreview';
import PaymentPrompt from './components/modalPrompts/PaymentPrompt';
import AboutUs from './pages/AboutUs';
import { AdminAccountSetting } from './components/modals/AdminAccountSetting';
import { PaymentCheckout } from './components/modals/PaymentCheckout';
import { Orders } from './pages/Orders';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layout/DashboardLayout';
import AdminOrders from './pages/AdminOrders';
import UploadProduct from './pages/UploadProduct';

let prevPathname = '/';
function App() {
  const { pathname } = useLocation();
  const { appModals, setAppModals, setToggleNav } = useDesignerContext() as DesignerContextProps;

  const { signin, signup } = appModals;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (pathname !== prevPathname) {
        setAppModals(prev => toggleAttributes(prev, 'CLOSE') as AppModals)
        setToggleNav(initNavModals);
        prevPathname = pathname
      }
      else if (signin === 'OPEN') {
        setAppModals(switchModals['signin'])
        setToggleNav(initNavModals);
      }
      else if (signup === 'OPEN') {
        setAppModals(switchModals['signup'])
        setToggleNav(initNavModals);
      }
    }
    return () => {
      isMounted = false
    }
  }, [pathname, signin, signup, setAppModals])

  return (
    <main className='w-full md:m-auto h-scre scroll-smooth overflow-y-scroll transition-all'>
      {/* APP MODALS */}
      <UserNavModal />
      <NavModal />
      <Notifications />
      <Measurements />
      <Carts />
      <CartPreview />
      <AdminAccountSetting />
      <PaymentCheckout />

      {/* Authentication Modals */}
      <Login />
      <Registration />

      {/* Modal Prompts */}
      <PaymentPrompt />

      {/* ROUTES */}
      <Routes>
        <Route path='/' element={<DesignerLayout />}>
          <Route index element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<ProductPage />} />
          <Route path='orders' element={<Orders />} />

          <Route element={<DashboardLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='adminOrders' element={<AdminOrders />} />
            <Route path='uploadProduct' element={<UploadProduct />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>


      <ToastContainer />
    </main>
  )
}

export default App
