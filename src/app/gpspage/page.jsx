
import Sidebar from "@/components/sidebar/Sidebar"
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
      <UserProfilebar />
      <Map />
      <MapCity />
      </Container>
    </Box>
  )
}

export default page