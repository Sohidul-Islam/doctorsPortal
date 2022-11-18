
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRouter from './pages/PrivateRouter/PrivateRouter';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor/AddDoctor';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import AdminRouter from './pages/Dashboard/AdminRoute/AdminRouter';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/appointment" element={<PrivateRouter><Appointment /></PrivateRouter>}>
          </Route>
          <Route path="dashboard" element={<PrivateRouter><Dashboard /></PrivateRouter>}>
            <Route path={``} element={<DashboardHome />}></Route>
            <Route path={`makeadmin`} element={<AdminRouter><MakeAdmin /></AdminRouter>}></Route>
            <Route path={`adddoctor`} element={<AdminRouter><AddDoctor /></AdminRouter>}></Route>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
