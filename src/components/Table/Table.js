import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import { useTableSorting } from "../hooks/useSort";

const Table = ({ caption, data, columns }) => {
   const [tableData, handleSorting] = useTableSorting(data, columns);

   return (
      <>
         <table className="table">
            <caption>{caption}</caption>
            <TableHead columns={columns} handleSorting={handleSorting} />
            <TableBody columns={columns} tableData={tableData} />
         </table>
      </>
   );
};

export default Table;