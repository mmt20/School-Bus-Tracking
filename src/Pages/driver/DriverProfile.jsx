import './style/driverProfile.scss';
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import Chart from './../../components/chart/Chart';
import List from '../../components/table/Table';
const DriverProfile = () => {
  return (
    <div className="driver">
      <Sidebar />
      <div className="driverContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Driver Information</h1>
            <div className="driver">
              <img
                src="https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_mGg2huK5hy733Qut-7512-NOC.jpg?itok=bPIIbhDf"
                alt="avatar"
                className="driverImage"
              />
              <div className="details">
                <div className="driverTitle">Mostafa Mohamed</div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mostafa@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="driverKey">Phone:</span>
                  <span className="driverValue">+20 1114216518</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Total Kids Transported  (Last 6 Months)"
            />
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Kids Transported (Status)</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
