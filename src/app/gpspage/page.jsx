
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
      <Container sx={{marginLeft:{
        xs: "-88px",
        sm: "65px",
        md: "120px",
        lg: "120px",
        xl: "120px"
      }, width: {
        xs: "110%",
        sm: "90%",
        md: "95%",
        lg: "92%",
        xl: "100%"
      }, minHeight: "100vh", backgroundColor: "whitesmoke",}}>
      <Topbar />
      <UserProfilebar />
      <Map />
      <MapCity />
      </Container>
    </Box>
  )
}

export default page