import { Navigate, Outlet } from 'react-router-dom';

const GuardedRoute = () => {
  const auth = localStorage.getItem('token');
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default GuardedRoute;
