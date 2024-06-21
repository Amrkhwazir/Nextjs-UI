import Moodmeter from "@/components/moodmeter/Moodmeter"
import Sidebar from "@/components/sidebar/Sidebar"
import Topbar from "@/components/topbar/Topbar"
import UserProfileBar from "@/components/userprofilebar/UserProfileBar"
import { Box, Container } from "@mui/material"


const page = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex", minHeight: "100vh", width: "100%",}}>
      <Sidebar />
      <Container sx={{marginLeft: {
        xs: "-80px",
        sm: "65px",
        md: "120px",
        lg: "120px",
        xl: "120px"
      }, width: {
        xs: "105%",
        sm: "90%",
        md: "95%",
        lg: "92%",
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