import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import { busColumns, busRows } from '../../datatablesource';

const BusTable = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={busRows} coloum={busColumns} type="buses" />
      </div>
    </div>
  );
};

export default BusTable;
