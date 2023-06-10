import { useState } from "react";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";

const Table = () => {
   const importedData = require("../../data/data.json");
   const [tableData, setTableData] = useState(importedData);

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
      <>
         <table className="table">
            <caption>Developers currently enrolled in this course, column headers are sortable.</caption>
            <TableHead columns={columns} />
            <TableBody columns={columns} tableData={tableData} />
         </table>
      </>
   );
};

export default Table;