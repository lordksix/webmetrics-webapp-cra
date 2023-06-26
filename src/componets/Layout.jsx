import { Outlet } from 'react-router-dom';
import Header from './Header';
import 'styles/navbar.css';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
