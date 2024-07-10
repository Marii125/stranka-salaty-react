import { Outlet } from 'react-router-dom';
import './style.css';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
