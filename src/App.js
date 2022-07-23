
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
import Navigation from './pages/Share/Navigation/Navigation';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/appointment" element={<PrivateRouter><Appointment /></PrivateRouter>}>
          </Route>
          <Route path="/dashboard" element={<PrivateRouter><Dashboard /></PrivateRouter>}>
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
