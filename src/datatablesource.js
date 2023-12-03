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

// Temporary data of USERS
export const userRows = [
  {
    id: 1,
    username: 'mm_taha',
    img: 'https://images.pexels.com/photos/5955131/pexels-photo-5955131.jpeg',
    email: 'Karem@gmail.com',
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

// ################################################

// SUPERVISOR DATATABLE
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
          {params.row.supervisor}
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

// Temporary data of supervisor
export const supervisorRows = [
  {
    id: 1,
    supervisor: 'Sondos Shokry',
    img: 'https://images.pexels.com/photos/2068343/pexels-photo-2068343.jpeg',
    email: 'sondos@gmail.com',
    address: 'Tower 2  , Dayr Mawas,Egypt',
  },
  {
    id: 2,
    supervisor: 'Sara Salama',
    img: 'https://images.pexels.com/photos/2068343/pexels-photo-2068343.jpeg',
    email: 'sara@gmail.com',
    address: 'Tower 5  , Dayr Mawas,Egyptt',
  },
];

// ################################################

// DRIVERS DATATABLE
export const driverColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'driver',
    headerName: 'Driver',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.driver}
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
    field: 'phone',
    headerName: 'Phone',
    width: 230,
  },
];

export const driverRows = [
  {
    id: 1,
    driver: 'Seif Idris',
    img: 'https://img.freepik.com/premium-photo/smiling-bus-driver-looking-camera_13339-103146.jpg',
    phone: '+20 1114216518',
    email: 'seif@gmail.com',
  },
  {
    id: 2,
    driver: 'Husam Shams',
    img: 'https://img.freepik.com/premium-photo/smiling-bus-driver-looking-camera_13339-103146.jpg',
    phone: '+20 1114216518',
    email: 'husam@gmail.com',
  },
];
// ################################################

// STUDENT DATATABLE
export const studentColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'student',
    headerName: 'Student',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.parent}
        </div>
      );
    },
  },
  {
    field: 'parent',
    headerName: 'Parent',
    width: 130,
  },
  {
    field: 'grade',
    headerName: 'Grade',
    width: 130,
  },
  {
    field: 'class',
    headerName: 'Class',
    width: 130,
  },
];

export const studentRows = [
  {
    id: '1',
    student: 'Mohamed',
    img: 'https://images.pexels.com/photos/7280272/pexels-photo-7280272.jpeg',
    parent: 'Abdullah Ali',
    grade: 'A',
    class: '2',
  },
  {
    id: '2',
    student: 'Mohamed',
    img: 'https://images.pexels.com/photos/7280272/pexels-photo-7280272.jpeg',
    parent: 'Abdullah Ali',
    grade: 'A',
    class: '2',
  },
  {
    id: '3',
    student: 'Mohamed',
    img: 'https://images.pexels.com/photos/7280272/pexels-photo-7280272.jpeg',
    parent: 'Abdullah Ali',
    grade: 'A',
    class: '2',
  },
];
// ################################################
// BUS DATATABLE
export const busColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'busNumber', headerName: 'Bus Number', width: 150 },
  {
    field: 'busLine',
    headerName: 'Bus Line',
    width: 230,
  },
  {
    field: 'busSupervisor',
    headerName: 'Supervisor',
    width: 150,
  },
  {
    field: 'busDriver',
    headerName: 'Driver',
    width: 150,
  },
];

export const busRows = [
  {
    id: '1',
    busNumber: 'ص و ن 9432',
    busLine: 'Bani Omran',
    busSupervisor: 'Sara Salama    ',
    busDriver: 'Mostafa Mohmed',
  },
  {
    id: '2',
    busNumber: 'س ج ط 2594',
    busLine: 'Dalga',
    busSupervisor: 'Sondos Shokry',
    busDriver: 'Mostafa Mohmed',
  },
  {
    id: '3',
    busNumber: 'ى س د 983',
    busLine: 'Al Badraman',
    busSupervisor: 'Husam Ali',
    busDriver: 'Mostafa Mohmed',
  },
];
// ################################################
