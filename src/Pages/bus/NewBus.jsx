import './style/newBus.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

const NewBus = () => {
  const supervisors = ['Sondos Shokry', 'Sara Salama'];
  const [supervisor, setSupervisor] = useState('');
  const handleSupervisor = (event) => {
    setSupervisor(event.target.value);
  };
  const drivers = ['Seif Idris', 'Husam Shams'];
  const [driver, setDriver] = useState('');
  const handledriver = (event) => {
    setDriver(event.target.value);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Bus</h1>
        </div>
        <div className="bottom">
          <div>
            <form>
              <div className="fromInput">
                <label>Bus Number</label>
                <input type="text" placeholder="س ج ط 2594" />
              </div>
              <div className="fromInput">
                <label>Bus Line</label>
                <input type="text" placeholder="Dalga" />
              </div>
              <div className="fromInput">
                <label>Bus Driver</label>
                <TextField
                  className="textField"
                  id="select"
                  variant="standard"
                  value={driver}
                  select
                  onChange={handledriver}
                >
                  {drivers.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="fromInput">
                <label>Bus Supervisor</label>
                <TextField
                  className="textField"
                  id="select"
                  variant="standard"
                  value={supervisor}
                  select
                  onChange={handleSupervisor}
                >
                  {supervisors.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBus;
