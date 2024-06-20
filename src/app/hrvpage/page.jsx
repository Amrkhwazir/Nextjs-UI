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
        xs: "-80px",
        sm: "120px",
        md: "120px",
        lg: "120px",
        xl: "120px"
      }, width: {
        xs: "105%",
        sm: "80%",
        md: "90%",
        lg: "90%",
        xl: "100%"
      }, minHeight: "100vh", backgroundColor: "whitesmoke", }}>
      <Topbar />
      <UserProfileBar />
      <Chart />
      </Container>
    </Box>
  )
}

export default page