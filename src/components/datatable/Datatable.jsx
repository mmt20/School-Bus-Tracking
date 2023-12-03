import './datatable.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = ({ rows, coloum, type }) => {
  const [data, setData] = useState(rows);

  const handelDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColum = [
    {
      id: 'action',
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {type !== 'buses' ? (
              <Link
                to={`/${type}/${params.row.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="viewButton">View</div>
              </Link>
            ) : null}

            <div
              className="deleteButton"
              onClick={() => handelDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  // make first letter uppercase
  const name = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {name}
        <Link to={`/${type}/new`} className="link">
          Add New
        </Link>
      </div>

      <DataGrid
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        className="datagrid"
        rows={data}
        columns={coloum.concat(actionColum)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
