import React, { memo } from 'react';
import './css/songModule.css';

import {Helmet} from 'react-helmet';
import SongsHeader from './components/SongsHeader';
import DataTable from 'react-data-table-component';
import { deactivatedColor } from '../../utils/constants';
import SongsMusicPlayer from './components/SongsMusicPlayer';

const SongsPage = () => {

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
          paddingLeft: "2.2%",
          paddingRight: "1.1%"
        },
        "&:nth-child(2)": {
          paddingRight: "55%",
        },
      },
    },
  }

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      conditionalCellStyles: [
        {
          when: row => row.title,
          style: {
            paddingRight: "57%",
            fontFamily: 'PoppinsMedium',
            fontSize: ".8rem",
          }
        }
      ]
    },
    {
      name: 'Artist',
      selector: row => row.artist,
      conditionalCellStyles: [
        {
          when: row => row.artist,
          style: {
            fontFamily: 'PoppinsMedium',
            fontSize: ".8rem"
          }
        }
      ]
    },
    {
      name: 'Duration',
      selector: row => row.duration,
      conditionalCellStyles: [
        {
          when: row => row.duration,
          style: {
            fontFamily: 'PoppinsMedium',
            fontSize: ".8rem",
            display: "flex",
            justifyContent: "center"
          }
        }
      ]
    },
    {
      name: 'Format',
      selector: row => row.format,
      conditionalCellStyles: [
        {
          when: row => row.format,
          style: {
            fontFamily: 'PoppinsMedium',
            fontSize: ".8rem",
            display: "flex",
            justifyContent: "center"
          }
        }
      ]
    },
    {
      name: 'Weight',
      selector: row => row.weight,
      conditionalCellStyles: [
        {
          when: row => row.weight,
          style: {
            fontFamily: 'PoppinsMedium',
            fontSize: ".8rem",
            display: "flex",
            justifyContent: "center"
          }
        }
      ]
    },
  ];

  const data = [
      {
        id: 1,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },
      {
        id: 2,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },
      {
        id: 3,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },
      {
        id: 4,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },
      {
        id: 5,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 6,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 7,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 8,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 9,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 10,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 11,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 12,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 13,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 14,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 15,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 16,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 17,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 18,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 19,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },

      {
        id: 20,
        title: 'Tala',
        artist: 'Didi b',
        duration: '03:43',
        format: 'mp3',
        weight: '8.05MB'
      },
  ]

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XWC | Songs</title>
      </Helmet>
      
      <SongsHeader />

      <div id='table1' className={`relative`} style={{
        height: "calc(100vh)"
      }}>
        <div className={``} style={{
        height: "calc(100vh - 19vh)",
        width: "calc(100vw - 4vw)"

      }}>
          <DataTable 
            highlightOnHover={true}
            columns={columns}
            data={data}
            fixedHeader
            fixedHeaderScrollHeight='calc(100vh - 27vh)'
            selectableRows
            customStyles={customStyles}
            conditionalRowStyles={conditionalRowStyles}
          />
        </div>

        <SongsMusicPlayer />
      </div>

    </>
  )
}

export default memo(SongsPage)