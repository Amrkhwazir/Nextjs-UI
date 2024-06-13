import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import UserProfileBar from '@/components/userprofilebar/UserProfileBar'
import { Box, Container } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box sx={{maxWidth: "100%", height: "100vh", display: "flex", backgroundColor: "whitesmoke"}}>
      <Sidebar />
      <Container sx={{paddingTop: "10px"}}>
      <Topbar />
      <UserProfileBar />
      </Container>
    </Box>
  )
}

export default page