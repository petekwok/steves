import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

export const Path = {
  home: '/home',
  about: '/about',
  menu: '/menu',
  location: '/location',
  clickCollect: '/clickCollect',
};
const AppRoutes: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to={`${Path.home}`} />} />
      <Route path={`${Path.home}`} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
