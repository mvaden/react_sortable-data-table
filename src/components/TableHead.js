const TableHead = ({ columns }) => {
   return (
      <thead>
         <tr>
            {
               columns.map(({ label, accessor}) => {
                  return <th ley={accessor}>{label}</th>
               })
            }
         </tr>
      </thead>
   );
};

export default TableHead;