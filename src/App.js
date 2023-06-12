import Table from './components/Table/Table';
import './App.scss';

const App = () => {
  const caption = "Developers currently enrolled in this course, column headers are sortable.";
  const data = require("./data/data.json");
  const columns = [
    {
      label: "First Name",
      accessor: "first_name",
    },
    {
      label: "Last Name",
      accessor: "last_name",
    },
    {
      label: "Email",
      accessor: "email",
    },
    {
      label: "Gender",
      accessor: "gender",
    },
    {
      label: "IP Address",
      accessor: "ip_address",
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
