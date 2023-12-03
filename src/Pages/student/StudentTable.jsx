import './style/studentTable.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import { studentColumns, studentRows } from '../../datatablesource';
const StudentTable = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={studentRows} coloum={studentColumns} type="students" />
      </div>
    </div>
  );
};

export default StudentTable;
