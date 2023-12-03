import './style/studentProfile.scss';
import List from '../../components/table/Table';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import QrCode from '../../components/qrCode/QrCode';

const StudentProfile = () => {
  const studentInfo =
    '{"id":122121,"name":"Mostafa","Parent":"Abdullah Ali","grade":"A","class":"C"}';
  return (
    <div className="student">
      <Sidebar />
      <div className="studentContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Student Information</h1>
            <div className="student">
              <img
                src="https://images.pexels.com/photos/7280272/pexels-photo-7280272.jpeg"
                alt="avatar"
                className="studentImage"
              />
              <div className="details">
                <div className="studentTitle">Mohamed</div>
                <div className="detailItem">
                  <span className="studentKey">Parent:</span>
                  <span className="studentValue"> Abdullah Ali</span>
                </div>
                <div className="detailItem">
                  <span className="studentKey">Grade:</span>
                  <span className="studentValue"> A</span>
                </div>
                <div className="detailItem">
                  <span className="studentKey">Class:</span>
                  <span className="studentValue"> 2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1 className="title">Student QrCode</h1>

            <div>
              <QrCode studentInfo={studentInfo} />
            </div>
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Kid (Status)</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
