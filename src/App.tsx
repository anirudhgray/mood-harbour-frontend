import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GuardedRoute from './components/GuardRoute';
import ForgotPage from './pages/Forgot';
import Face from './pages/Face';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/dashboard" element={<GuardedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/face" element={<GuardedRoute />}>
          <Route path="/face" element={<Face />} />
        </Route>
        <Route path="/resources" element={<GuardedRoute />}>
          <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
      <ToastContainer theme="colored" position="bottom-right" />
    </Router>
  );
}

export default App;
