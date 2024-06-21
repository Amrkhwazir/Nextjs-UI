import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import UserProfileBar from '@/components/userprofilebar/UserProfileBar'
import { Box, Container } from '@mui/material'


const page = () => {
  return (
    <Box sx={{display: "flex", backgroundColor: "whitesmoke", minHeight: "100vh"}}>
      <Sidebar />
      <Container sx={{marginLeft: {
        xs: "-80px", 
        sm: "60px",
        md: "120px",
        lg: "120px",
        xl: "120px",
      }, width: {
        xs: "105%",
        sm: "90%",
        md: "95%",
        lg: "92%",
        xl: "100%"
      }, minHeight: "100vh", backgroundColor: "whitesmoke" }}>
      <Topbar  />
      <UserProfileBar />
      </Container>
    </Box>
  )
}

export default page