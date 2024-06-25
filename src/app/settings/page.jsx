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
        xl: "220px"
      }, minWidth: {
        xs: "100vw",
        sm: "70%",
        md: "70%",
        lg: "70%",
        xl: "90%"
      }, minHeight: "100vh", backgroundColor: "whitesmoke", paddingBottom: "100px" }}>
      <Topbar  />
      <UserProfileBar />
      </Container>
    </Box>
  )
}

export default page