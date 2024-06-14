import Chart from '@/components/chart/Chart'
import Graph from '@/components/chart/Graph'
import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import UserProfileBar from '@/components/userprofilebar/UserProfileBar'
import { Box, Container } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box sx={{minHeight: "100vh", width: "100%", display: "flex", backgroundColor: "whitesmoke", overflowY: "scroll" }}>
      <Sidebar />
      <Container sx={{marginLeft: '120px',width: "90%", minHeight: "100vh", backgroundColor: "whitesmoke", }}>
      <Topbar />
      <UserProfileBar />
      <Chart />
      </Container>
    </Box>
  )
}

export default page