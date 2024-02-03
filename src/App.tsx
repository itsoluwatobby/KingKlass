import { Routes, Route, useLocation } from 'react-router-dom';
import { DesignerLayout } from './layout/DesignerLayout';
import { Home } from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/NotFound';
import { NavModal } from './components/NavModal';
import { useDesignerContext } from './hooks/useDesignerContext';
import { useEffect } from 'react';
import { switchModals, toggleAttributes } from './utility/toggleModalStates';
import { UserNavModal } from './components/UserNavModal';
import { Login } from './components/authentication/Login';
import { Registration } from './components/authentication/Registration';
import { initNavModals } from './utility/initialVariables';
import Products from './pages/Products';


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
    <main className='w-[60%] midscreen:w-full md:m-auto h-scre scroll-smooth overflow-y-scroll'>
      <UserNavModal />
      <NavModal /> 

      <Login />
      <Registration />

      <Routes>
        <Route path='/' element={<DesignerLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>


      <ToastContainer />
    </main>
  )
}

export default App
