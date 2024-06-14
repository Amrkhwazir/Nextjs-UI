import Moodmeter from "@/components/moodmeter/Moodmeter"
import Sidebar from "@/components/sidebar/Sidebar"
import Topbar from "@/components/topbar/Topbar"
import UserProfileBar from "@/components/userprofilebar/UserProfileBar"
import { Box, Container } from "@mui/material"


const page = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex", minHeight: "100vh", width: "100%",}}>
      <Sidebar />
      <Container sx={{marginLeft: '120px', width: "90%", minHeight: "100vh", backgroundColor: "whitesmoke",}}>
      <Topbar />
      <UserProfileBar />
      <Moodmeter />
      </Container>
    </Box>
  )
}

export default page