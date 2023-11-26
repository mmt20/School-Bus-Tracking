import Home from './Pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/login/Login';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import UserTable from './Pages/user/UserTable';
import NewUser from './Pages/user/NewUser';
import UserProfile from './Pages/user/UserProfile';
import SupervisorTable from './Pages/supervisor/SupervisorTable';
import SupervisorProfile from './Pages/supervisor/SupervisorProfile';
import NewSupervisor from './Pages/supervisor/NewSupervisor';
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
            <Route index element={<UserTable />} />
            <Route path=":driverstId" element={<UserProfile />} />
            <Route path="new" element={<NewUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
