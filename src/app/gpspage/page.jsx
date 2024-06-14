
import Sidebar from "@/components/sidebar/Sidebar"
import Table from "@/components/userTable/Table"
import { Box, Container } from "@mui/material"
import Topbar from "@/components/topbar/Topbar"
import UserProfilebar from "../../components/userprofilebar/UserProfileBar"
import Map from "../../components/maps/Map"
import MapCity from "@/components/maps/MapCity"

const page = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex", minHeight: "100vh", width: "100%",}}>
      <Sidebar />
      <Container sx={{marginLeft: '120px', width: "90%", minHeight: "100vh", backgroundColor: "whitesmoke",}}>
      <Topbar />
      <UserProfilebar />
      <Map />
      <MapCity />
      </Container>
    </Box>
  )
}

export default page