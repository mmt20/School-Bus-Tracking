import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';

import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">school admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashbord</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/supervisors" style={{ textDecoration: 'none' }}>
            <li>
              <SupervisorAccountOutlinedIcon className="icon" />
              <span>Supervisors</span>
            </li>
          </Link>
          <Link to="/drivers" style={{ textDecoration: 'none' }}>
            <li>
              <Face6OutlinedIcon className="icon" />
              <span>Drivers</span>
            </li>
          </Link>
          <Link to="/students" style={{ textDecoration: 'none' }}>
            <li>
              <ChildCareOutlinedIcon className="icon" />
              <span>Students</span>
            </li>
          </Link>
          <Link to="/buses" style={{ textDecoration: 'none' }}>
            <li>
              <DirectionsBusFilledOutlinedIcon className="icon" />
              <span>Buses</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <AnalyticsIcon className="icon" />
            <span>Status</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
