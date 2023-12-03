import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import { supervisorColumns, supervisorRows } from '../../datatablesource';

const SupervisorTable = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          rows={supervisorRows}
          coloum={supervisorColumns}
          type="supervisors"
        />
      </div>
    </div>
  );
};

export default SupervisorTable;
