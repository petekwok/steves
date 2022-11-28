import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

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
    </Routes>
  );
};

export default AppRoutes;
