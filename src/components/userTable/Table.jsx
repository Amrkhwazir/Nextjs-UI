"use client"
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';
import * as React from 'react';


const columns = [
  { field: 'id', headerName: 'UserId', width: 100 },
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'HRV', headerName: 'HRV', width: 180 },
  { field: 'steps', headerName: 'Steps', width: 180 },
  { field: 'mood', headerName: 'Mood', width: 180 },
  { field: 'riskLevel', headerName: 'Risk Level', width: 180 },
];

const rows = [
  { id: 1, HRV: '65 BPM', name: 'Jon', steps: 35, mood: 'calm', riskLevel: 'Low'},
  { id: 2, HRV: '98 BPM', name: 'Cersei', steps: 42, mood: 'calm', riskLevel: 'Low'},
  { id: 3, HRV: '72 BPM', name: 'Jaime', steps: 45, mood: 'Aggresive', riskLevel: 'Low'},
  { id: 4, HRV: '88 BPM', name: 'Arya', steps: 16, mood: 'calm', riskLevel: 'Low'},
  { id: 5, HRV: '100 BPM', name: 'Daenerys', steps: 32, mood: 'calm', riskLevel: 'Low'},
  { id: 6, HRV: '66 BPM', name: 'Mike', steps: 15, mood: 'calm', riskLevel: 'Low' },
  { id: 7, HRV: '56 BPM', name: 'Ferrara', steps: 44, mood: 'Aggressive', riskLevel: 'Low'},
  { id: 8, HRV: '74 BPM', name: 'Rossini', steps: 36, mood: 'calm', riskLevel: 'Low'},
  { id: 9, HRV: '50 BPM', name: 'Harvey', steps: 65, mood: 'calm', riskLevel: 'Low'},
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '100%', backgroundColor: "white" }}>
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
      {/* <Image src={"/images/image8.png"} width={30} height={30} /> */}
    </div>
  );
}
