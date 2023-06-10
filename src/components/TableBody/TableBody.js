const TableBody = ({ tableData, columns }) => {
   return (
      <>
         <tbody>
            {
               tableData.map((data) => {
                  console.log("data: ", data.email)
                  return (
                     <>
                        <tr key={data.id} className="table-row">
                           {
                              columns.map(({ accessor }) => {
                                 const tData = data[accessor] ? data[accessor] : "-";
                                 console.log("accessor: ", data[accessor])
                                 return <td key={accessor}>{tData}</td>;
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