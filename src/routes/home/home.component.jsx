import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.components';

const Home = () => {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
};

export default Home;
