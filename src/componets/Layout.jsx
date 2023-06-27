import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
