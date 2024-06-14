import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import UserProfileBar from '@/components/userprofilebar/UserProfileBar'
import { Box, Container } from '@mui/material'


const page = () => {
  return (
    <Box sx={{display: "flex", backgroundColor: "whitesmoke", minHeight: "100vh"}}>
      <Sidebar />
      <Container sx={{marginLeft: '120px', width: "90%", minHeight: "100vh", backgroundColor: "whitesmoke" }}>
      <Topbar  />
      <UserProfileBar />
      </Container>
    </Box>
  )
}

export default page