import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import 'styles/navbar.css';

const Layout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export default Layout;
