import React, { memo } from 'react';
import '../css/filesModule.css';
// import { Box } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import { BsFileWord } from 'react-icons/bs'

import DataTable from 'react-data-table-component';
import { deactivatedColor } from '../../../utils/constants';

const FilesBody = () => {

  const conditionalRowStyles = [
    {
      when: row => row.id % 2 === 1,
      style: {
        backgroundColor: `${deactivatedColor}`,
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  ];

  const customStyles = {
    rows: {
        style: {
            borderRadius: '8px', // override the row height
            border: '1px solid white',
            fontFamily: 'PoppinsMedium',
            fontSize: '14px',
            width: "98%",
            margin: "auto"
        },
    },
    headCells: {
      style: {
        fontFamily: 'PoppinsBold',
        fontSize: "15px",
        border: '1px solid white',
        "&:first-child": {
          paddingLeft: "2.1%",
          paddingRight: "1%"
        },
        "&:nth-child(2)": {
          paddingRight: "55%",
        },
      },
    },
  }

  const columns = [
      {
        name: 'Name',
        selector: row => row.name,
        conditionalCellStyles: [
          {
            when: row => row.name,
            style: {
              paddingRight: "58%",
              fontFamily: 'PoppinsMedium',
              fontSize: ".8rem"
            }
          }
        ]
      },
      {
        name: 'Weight',
        selector: row => row.weight,
        conditionalCellStyles: [
          {
            when: row => row.name,
            style: {
              marginRight: "2.5%",
              fontFamily: 'PoppinsMedium',
              fontSize: ".8rem"
            }
          }
        ]
      },
      {
        name: 'Last Modification',
        selector: row => row.lastModification,
        conditionalCellStyles: [
          {
            when: row => row.name,
            style: {
              fontFamily: 'PoppinsMedium',
              fontSize: ".8rem"
            }
          }
        ]
      },
  ];

  const data = [
      {
        id: 1,
        name: `FichePratique-1.docx`,
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 2,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 3,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 4,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 5,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 6,
        name: `FichePratique-1.docx`,
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 7,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 8,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 9,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 10,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },

      {
        id: 11,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 12,
        name: `FichePratique-1.docx`,
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 13,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 14,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 15,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },
      {
        id: 16,
        name: 'Groupes de TP - INF3046.xlsx',
        weight: '8.05MB',
        lastModification: "2022-06-11 17:42:48"
      },

  ]

  return (
    <>
      <div id='table2' className={`z-10`} style={{
        height: "100vh"
      }}>
          <DataTable 
            sortIcon={ <BsFileWord size={20} color="red" /> }
            highlightOnHover={true}
            columns={columns}
            data={data}
            fixedHeader
            fixedHeaderScrollHeight='calc(100vh - 7vh)'
            selectableRows
            customStyles={customStyles}
            conditionalRowStyles={conditionalRowStyles}
            // onRowClicked={() => alert('row clicked')}
          />
      </div>
    </>  
  )
}

export default memo(FilesBody)