const TableBody = ({ tableData, columns }) => {
   return (
      <>
         <tbody>
            {
               tableData.map((data) => {
                  return (
                     <>
                        <tr key={data.id} className="table-row">
                           {
                              columns.map(({ accessor }) => {
                                 const tData = data[accessor] ? data[accessor] : "-";
                                 return <td key={accessor} className="table-data">{tData}</td>;
                              })
                           }
                        </tr>
                     </>
                  );
               })
            };
         </tbody>
      </>
   );
};

export default TableBody;