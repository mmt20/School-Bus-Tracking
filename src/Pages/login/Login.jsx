import { useState } from 'react';
import './login.scss';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const Login = () => {
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  return (
    <div className="login">
      <form>
        <div className="header">
          <Person4OutlinedIcon className="icon" />
          <h2>Login To Admin Dashbord</h2>
        </div>
        <div className="underline"></div>
        <div className="from-control">
          <EmailOutlinedIcon className="icon" />
          <input type="email" placeholder="email"></input>
        </div>
        <div className="from-control">
          <LockOutlinedIcon className="icon" />
          <input type="password" placeholder="password"></input>
        </div>

        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
