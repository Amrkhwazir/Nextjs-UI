"use client"
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';


const columns = [
  { field: 'id', headerName: 'UserId', width: 100 },
  { field: 'name', headerName: 'Name', width: 140 },
  { field: 'HRV', headerName: 'HRV', width: 130 },
  { field: 'steps', headerName: 'Steps', width: 120 },
  { field: 'mood', headerName: 'Mood', width: 150 },
  { field: 'riskLevel', headerName: 'Risk Level', width: 100 },
  { field: 'img', headerName: '', width: 150, renderCell: (params)=>{
    // console.log(params.row.avatar)
    return (
      <Link href={"/hrvpage"}>
      <Image style={{marginTop: 10, cursor: "pointer"}}  src={params.row.avatar} width={24} height={24} />
      </Link>
    )
  }  },
];

const rows = [
  { id: 1, HRV: '65 BPM', name: 'Jon', steps: 35, mood: 'calm', riskLevel: 'Low', avatar:"/images/image8.png"},
  { id: 2, HRV: '98 BPM', name: 'Cersei', steps: 42, mood: 'calm', riskLevel: 'Low', avatar:"/images/image8.png"},
  { id: 3, HRV: '72 BPM', name: 'Jaime', steps: 45, mood: 'Aggresive', riskLevel: 'Low', avatar:"/images/image8.png"},
  { id: 4, HRV: '88 BPM', name: 'Arya', steps: 16, mood: 'calm', riskLevel: 'Low', avatar:"/images/image8.png"},
  { id: 5, HRV: '100 BPM', name: 'Daenerys', steps: 32, mood: 'calm', riskLevel: 'Low', avatar:"/images/image8.png"},
  { id: 6, HRV: '66 BPM', name: 'Mike', steps: 15, mood: 'calm', riskLevel: 'Low', avatar:"/images/image8.png" },
  { id: 7, HRV: '56 BPM', name: 'Ferrara', steps: 44, mood: 'Aggressive', riskLevel: 'Low', avatar:"/images/image8.png"},
  { id: 8, HRV: '74 BPM', name: 'Rossini', steps: 36, mood: 'calm', riskLevel: 'Low', avatar:"/images/image8.png"},
  { id: 9, HRV: '50 BPM', name: 'Harvey', steps: 65, mood: 'calm', riskLevel: 'Low', avatar:"/images/image8.png"},
];

export default function DataTable() {
  return (
    <div style={{ height: 490, width: '100%', backgroundColor: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

    </div>
  );
}
