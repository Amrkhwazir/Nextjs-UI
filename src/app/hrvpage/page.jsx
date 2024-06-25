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
      <Container sx={{marginLeft:{
        xs: "0px",
        sm: "140px",
        md: "180px",
        lg: "200px",
        xl: "220px"
      }, minWidth: {
        xs: "100vw",
        sm: "70%",
        md: "70%",
        lg: "70%",
        xl: "90%"
      }, minHeight: "100vh", backgroundColor: "whitesmoke", paddingBottom: "100px"}}>
      <Topbar />
      <UserProfileBar />
      <Chart />
      </Container>
    </Box>
  )
}

export default page