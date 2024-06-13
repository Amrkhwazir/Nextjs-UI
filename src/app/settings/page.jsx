import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import UserProfileBar from '@/components/userprofilebar/UserProfileBar'
import { Box, Container } from '@mui/material'


const page = () => {
  return (
    <Box sx={{maxWidth: "100%",  display: "flex", backgroundColor: "whitesmoke"}}>
      <Sidebar />
      <Container sx={{marginLeft: "200px"}}>
      <Topbar />
      <UserProfileBar />
      </Container>
    </Box>
  )
}

export default page