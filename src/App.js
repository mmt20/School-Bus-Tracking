import Login from './Pages/login/Login';
import UserTable from './Pages/user/UserTable';
import NewUser from './Pages/user/NewUser';
import UserProfile from './Pages/user/UserProfile';
import SupervisorTable from './Pages/supervisor/SupervisorTable';
import SupervisorProfile from './Pages/supervisor/SupervisorProfile';
import NewSupervisor from './Pages/supervisor/NewSupervisor';
import DriverTable from './Pages/driver/DriverTable';
import DriverProfile from './Pages/driver/DriverProfile';
import NewDriver from './Pages/driver/NewDriver';
import BusTable from './Pages/bus/BusTable';
import NewBus from './Pages/bus/NewBus';
import StudentTable from './Pages/student/StudentTable';
import StudentProfile from './Pages/student/StudentProfile';
import NewStudent from './Pages/student/NewStudent';
import Home from './Pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import './style/dark.scss';
import QrCode from './components/qrCode/QrCode';
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="users">
            <Route index element={<UserTable />} />
            <Route path=":userId" element={<UserProfile />} />
            <Route path="new" element={<NewUser />} />
          </Route>
          <Route path="supervisors">
            <Route index element={<SupervisorTable />} />
            <Route path=":supervisorId" element={<SupervisorProfile />} />
            <Route path="new" element={<NewSupervisor />} />
          </Route>
          <Route path="drivers">
            <Route index element={<DriverTable />} />
            <Route path=":driverstId" element={<DriverProfile />} />
            <Route path="new" element={<NewDriver />} />
          </Route>
          <Route path="students">
            <Route index element={<StudentTable />} />
            <Route path=":studentsId" element={<StudentProfile />} />
            <Route path="new" element={<NewStudent />} />
          </Route>
          <Route path="buses">
            <Route index element={<BusTable />} />
            <Route path="new" element={<NewBus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
