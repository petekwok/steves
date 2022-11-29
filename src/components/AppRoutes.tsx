import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Location from '../pages/Location';

export const Path = {
  home: '/home',
  menu: '/menu',
  clickCollect: '/clickCollect',
  location: '/location',
  about: '/about',
};
const AppRoutes: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to={`${Path.home}`} />} />
      <Route path={`${Path.home}`} element={<Home />} />
      <Route path={`${Path.menu}`} element={<Menu />} />
      <Route path={`${Path.location}`} element={<Location />} />
    </Routes>
  );
};

export default AppRoutes;
