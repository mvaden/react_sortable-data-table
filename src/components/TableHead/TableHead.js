const TableHead = ({ columns }) => {
   return (
      <thead>
         <tr>
            {
               columns.map(({ label, accessor}) => {
                  return <th key={accessor} className="table-head">{label}</th>
               })
            }
         </tr>
      </thead>
   );
};

export default TableHead;