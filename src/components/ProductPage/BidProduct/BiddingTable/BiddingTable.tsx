import React, { useMemo } from 'react'
import styled from 'styled-components'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  GroupColumnDef
} from '@tanstack/react-table';

import makeData from './makeData'
type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const Styles = styled.table`
  padding: 1rem;
  ${'' /* These styles are suggested for the table fill all available space in its containing element */}
  display: block;
  ${'' /* These styles are required for a horizontaly scrollable table overflow */}
  overflow: auto;

  .table {
    border-spacing: 0;
    border: 1px solid black;

    .thead {
      ${'' /* These styles are required for a scrollable body to align with the header properly */}
      overflow-y: auto;
      overflow-x: hidden;
    }

    .tbody {
      ${'' /* These styles are required for a scrollable table body */}
      overflow-y: scroll;
      overflow-x: hidden;
      height: 250px;
    }

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      border-bottom: 1px solid black;
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-right: 1px solid black;
      border-bottom: 1px solid black;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        right: 0;
        background: blue;
        width: 10px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action :none;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`

interface Props {
  columns: GroupColumnDef<Person, unknown>[],
  data: Person[]
}
const Table: React.FC<Props> = ({ columns, data }) => {

  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), //order doesn't matter anymore!
  });

  return (
    <table className='table'>
      <thead className='thead'>
        {getHeaderGroups().map(headerGroup => (
          <tr className='tr'>
            {headerGroup.headers.map((header) => (
              <th className='th' colSpan={header.colSpan} key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className='tbody'>
        {getRowModel().rows.map(row => {
          return (
            <tr className='tr'>
              {row.getAllCells().map(cell => {
                return (
                  <td key={cell.id} className="td">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function BiddingTable() {
  const columnHelper = createColumnHelper<Person>()

  // Make some columns!
  const columns = [
    columnHelper.group({
      header: 'Name',
      footer: props => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor('firstName', {
          cell: info => info.getValue(),
          footer: props => props.column.id,
        }),
        // Accessor Column
        columnHelper.accessor(row => row.lastName, {
          id: 'lastName',
          cell: info => info.getValue(),
          header: () => <span>Last Name</span>,
          footer: props => props.column.id,
        }),
      ],
    }),
    // Grouping Column
    columnHelper.group({
      header: 'Info',
      footer: props => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor('age', {
          header: () => 'Age',
          footer: props => props.column.id,
        }),
        columnHelper.accessor('visits', {
          header: () => <span>Visits</span>,
          footer: props => props.column.id,
        }),
        // Accessor Column
        columnHelper.accessor('status', {
          header: 'Status',
          footer: props => props.column.id,
        }),
        // Accessor Column
        columnHelper.accessor('progress', {
          header: 'Profile Progress',
          footer: props => props.column.id,
        }),
      ],
    }),
  ]
  const data = useMemo(() => makeData(20), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default BiddingTable
