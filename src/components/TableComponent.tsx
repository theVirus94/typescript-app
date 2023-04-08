import { SyntheticEvent, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import moment from 'moment'
import { TableElement } from './TableElement';

type TableComponentProps = {
  /**
   * TableComponent property contains an array consists of multiple TableElement instances.
   */
  tableData: TableElement[]
}


export const TableComponent = (props: TableComponentProps) => {
  /**
   * Creates the table component using the tableData which is the TableElement array.
   * Sorting event handlers control the sorting schema by onclick event on the arrow icon.
   * Sort flag state is declared to check which arrow icon is going to be rendered.
   * 
   * @returns The Table Container which will be rendered in the browser.
   */
    const [table, setTable] = useState(props.tableData)
    const [sortFlag, setSortFlag] = useState(true)
    
    function sortHandlerDescending(e: SyntheticEvent) {
      /**
       * Sorts the table in descending order by checking each row's time column value.
       * Time values are reformatted by using the moment.js package.
       * Triggered by the onClick event on the Arrow icon.
       * 
       * @returns The integer 1 or -1
       */
        e.preventDefault()

        table.sort((a, b) => {
            return (moment(a.time, 'hh:mm A').isAfter(moment(b.time, 'hh:mm A')) === true ? 1 : -1)
        })

        setSortFlag(true)
        
    }

    function sortHandlerAscending(e: SyntheticEvent) {
      /**
       * Sorts the table in ascending order by checking each row's time column value.
       * Time values are reformatted by using the moment.js package.
       * Triggered by the onClick event on the Arrow icon.
       * 
       * @returns The integer 1 or -1
       */
        e.preventDefault()

        table.sort((a, b) => {
            return (moment(a.time, 'hh:mm A').isBefore(moment(b.time, 'hh:mm A')) === true ? 1 : -1)
        })

        setSortFlag(false)
        
    }

  return ( 
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{height: 40}}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name&nbsp;</TableCell>
            <TableCell align="right">E-mail&nbsp;</TableCell>
            <TableCell align="right">Gender&nbsp;</TableCell>
            <TableCell align="right">IP Address&nbsp;</TableCell>
            <TableCell align="right">Time&nbsp; {sortFlag ? <KeyboardArrowDownIcon onClick={sortHandlerAscending} /> :
                                                <KeyboardArrowUpIcon onClick={sortHandlerDescending} /> }</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {table.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.ip_address}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

