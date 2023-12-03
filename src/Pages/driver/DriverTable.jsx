import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import { driverColumns, driverRows } from '../../datatablesource';
const DriverTable = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={driverRows} coloum={driverColumns} type="drivers" />
      </div>
    </div>
  );
};

export default DriverTable;
