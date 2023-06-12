import Table from './components/Table/Table';
import './App.scss';

const App = () => {
  const caption = "Developers currently enrolled in this course, column headers are sortable.";
  const data = require("./data/data.json");
  console.log(data)

  const columns = [
    {
      label: "First Name",
      accessor: "first_name",
      sortable: true
    },
    {
      label: "Last Name",
      accessor: "last_name",
      sortable: false,
      sortbyOrder: "desc" 
    },
    {
      label: "Email",
      accessor: "email",
      sortable: true
    },
    {
      label: "Gender",
      accessor: "gender",
      sortable: true
    },
    {
      label: "IP Address",
      accessor: "ip_address",
      sortable: true
    },
  ];

  return (
    <div className="table-container">
      <h1>Sortable Table with React</h1>
      <Table 
        caption={caption} 
        data={data} 
        columns={columns} 
        />
    </div>
  )
};

export default App;
