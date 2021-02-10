import React from "react";
import DataTable, {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableCell
} from 'carbon-components-react/lib/components/DataTable';
import {getWorkOutRoutine, headerData} from "./constants";
import Checkbox from "carbon-components-react/lib/components/Checkbox/Checkbox";


export default ({day}) => {


  let workoutDay = day + ' Routine'
  return (
    <>
      <DataTable rows={getWorkOutRoutine(day)} headers={headerData}>
        {({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getTableProps,
            getTableContainerProps,
          }) => (
          <TableContainer
            title= {workoutDay}
            {...getTableContainerProps()}>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader key={header.key} {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} {...getRowProps({ row })}>
                    {row.cells.map((cell) => {
                      if (cell.info.header === 'enabled') {
                        return (
                          <TableCell
                            key={cell.id}
                            id={cell.id}
                            className={`la-${cell.info.header}`}>
                          </TableCell>
                        );
                      } else {
                        return <TableCell key={cell.id}>{cell.value}</TableCell>;
                      }
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </>
  )
}