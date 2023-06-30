import { Outlet } from 'react-router-dom';
import Header from 'componets/CommomComponents/Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
