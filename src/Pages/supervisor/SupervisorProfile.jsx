import './style/supervisorProfile.scss';
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import Chart from './../../components/chart/Chart';
import List from '../../components/table/Table';

const SupervisorProfile = () => {
  return (
    <div className="supervisor">
      <Sidebar />
      <div className="supervisorContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Supervisor Information</h1>
            <div className="supervisor">
              <img
                src="https://images.pexels.com/photos/2068343/pexels-photo-2068343.jpeg"
                alt="avatar"
                className="supervisorImage"
              />
              <div className="details">
                <div className="supervisorTitle">Sondos Shokry</div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sondos@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="supervisorKey">Phone:</span>
                  <span className="supervisorValue">+20 1114216518</span>
                </div>
                <div className="detailItem">
                  <span className="supervisorKey">Address:</span>
                  <span className="supervisorValue">Tower 2 , Dayr Mawas</span>
                </div>
                <div className="detailItem">
                  <span className="supervisorKey">Country:</span>
                  <span className="supervisorValue">Egypt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Total Kids Supervised (Last 6 Months)"
            />
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Kids Supervised (Status)</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SupervisorProfile;
