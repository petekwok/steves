import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';

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
    </Routes>
  );
};

export default AppRoutes;
