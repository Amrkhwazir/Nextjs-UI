import Moodmeter from "@/components/moodmeter/Moodmeter"
import Sidebar from "@/components/sidebar/Sidebar"
import Topbar from "@/components/topbar/Topbar"
import UserProfileBar from "@/components/userprofilebar/UserProfileBar"
import { Box, Container } from "@mui/material"


const page = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex", minHeight: "100vh", width: "100%",}}>
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
      }, minHeight: "100vh", backgroundColor: "whitesmoke",}}>
      <Topbar />
      <UserProfileBar />
      <Moodmeter />
      </Container>
    </Box>
  )
}

export default page