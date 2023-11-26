import './style/userProfile.scss';
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import Chart from './../../components/chart/Chart';
import List from '../../components/table/Table';
const UserProfile = () => {
  return (
    <div className="user">
      <Sidebar />
      <div className="userContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="avatar"
                className="userImage"
              />
              <div className="details">
                <div className="userTitle">Mostafa Mohamed</div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mostafa@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="userKey">Phone:</span>
                  <span className="userValue">+20 1114216518</span>
                </div>
                <div className="detailItem">
                  <span className="userKey">Address:</span>
                  <span className="userValue">Minya Dermwas</span>
                </div>
                <div className="detailItem">
                  <span className="userKey">Country:</span>
                  <span className="userValue">Egypt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="User Kids Transactions (Last 6 Months)"
            />
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
