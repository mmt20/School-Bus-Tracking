// USER DATATABLE
export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 300,
  },
];

// temporary data of users
export const userRows = [
  {
    id: 1,
    username: 'Karem',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: 'mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 2,
    username: 'Hamid',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: '2mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 3,
    username: 'Farid',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: '3mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 4,
    username: 'Sadiq',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: '4mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 5,
    username: 'Tarek',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: '5mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 6,
    username: 'Abbas',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: '6mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 7,
    username: 'Yusef',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: '7mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 8,
    username: 'Abbas',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: '8mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 9,
    username: 'Tarek',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: 'mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
  {
    id: 10,
    username: 'Abbas',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: 'mm_taha@gmail.com',
    address: '4 Talaat Harb St. , Dayr Mawas,Egypt',
  },
];

// supervisors DATATABLE
export const supervisorColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'supervisor',
    headerName: 'Supervisor',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 300,
  },
];

// temporary data of supervisor
export const supervisorRows = [
  {
    id: 1,
    username: 'Sondos Shokry',
    img: 'https://images.pexels.com/photos/2068343/pexels-photo-2068343.jpeg',
    email: 'sondos@gmail.com',
    address: 'Tower 2  , Dayr Mawas,Egypt',
  },
  {
    id: 2,
    username: 'Sara Salama',
    img: 'https://images.pexels.com/photos/2068343/pexels-photo-2068343.jpeg',
    email: 'sara@gmail.com',
    address: 'Tower 5  , Dayr Mawas,Egyptt',
  },
];
