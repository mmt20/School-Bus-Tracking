import './style/userTable.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import { userColumns, userRows } from '../../datatablesource';

const UserTable = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={userRows} coloum={userColumns} type="users" />
      </div>
    </div>
  );
};

export default UserTable;
