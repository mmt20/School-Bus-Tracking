import './style/newStudent.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { MenuItem, TextField } from '@mui/material';

import { useState } from 'react';

const NewStudent = () => {
  const [file, setFile] = useState('');

  const parents = [
    'Ahmed Mostafa',
    'Husam Shams',
    'Ahmed Mostafa',
    'Husam Shams',
  ];
  const [parent, setParent] = useState('');
  const handledriver = (event) => {
    setParent(event.target.value);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt="avatar"
            />
          </div>
          <div className="right">
            <form>
              <div className="fromInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="fromInput">
                <label>Student Name</label>
                <input type="text" placeholder="Mohamed" />
              </div>
              <div className="fromInput">
                <label>Parent</label>
                <TextField
                  className="textField"
                  id="select"
                  variant="standard"
                  value={parent}
                  select
                  onChange={handledriver}
                >
                  {parents.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="fromInput">
                <label>Grade</label>
                <input type="text" placeholder="2" />
              </div>
              <div className="fromInput">
                <label>Class</label>
                <input type="text" placeholder="A" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewStudent;
