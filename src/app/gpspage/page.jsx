
import Sidebar from "@/components/sidebar/Sidebar"
import Table from "@/components/userTable/Table"
import { Box, Container } from "@mui/material"
import Topbar from "@/components/topbar/Topbar"
import UserProfilebar from "../../components/userprofilebar/UserProfileBar"

const page = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex", height: "100vh"}}>
      <Sidebar />
      <Container sx={{marginLeft: "200px"}}>
      <Topbar />
      <UserProfilebar />
      </Container>
    </Box>
  )
}

export default page