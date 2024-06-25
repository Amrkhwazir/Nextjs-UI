import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import UserProfileBar from '@/components/userprofilebar/UserProfileBar'
import { Box, Container } from '@mui/material'


const page = () => {
  return (
    <Box sx={{display: "flex", backgroundColor: "whitesmoke", minHeight: "100vh"}}>
      <Sidebar />
      <Container sx={{marginLeft:{
        xs: "0px",
        sm: "140px",
        md: "180px",
        lg: "200px",
        xl: "200px"
      }, minWidth: {
        xs: "100vw",
        sm: "70%",
        md: "70%",
        lg: "70%",
        xl: "100%"
      }, minHeight: "100vh", backgroundColor: "whitesmoke" }}>
      <Topbar  />
      <UserProfileBar />
      </Container>
    </Box>
  )
}

export default page