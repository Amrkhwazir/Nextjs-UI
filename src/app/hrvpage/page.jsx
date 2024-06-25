import Chart from '@/components/chart/Chart'
import Graph from '@/components/chart/Graph'
import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import UserProfileBar from '@/components/userprofilebar/UserProfileBar'
import { Box, Container } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box sx={{minHeight: "100vh", width: "100%", display: "flex", backgroundColor: "whitesmoke"}}>
      <Sidebar />
      <Container sx={{marginLeft: {
        xs: "0px",
        sm: "65px",
        md: "120px",
        lg: "120px",
        xl: "120px"
      },minWidth: '100vw', minHeight: "100vh", backgroundColor: "whitesmoke", border: "1px solid red"}}>
      <Topbar />
      <UserProfileBar />
      <Chart />
      </Container>
    </Box>
  )
}

export default page