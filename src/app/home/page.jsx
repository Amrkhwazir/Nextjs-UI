import Sidebar from "@/components/sidebar/Sidebar"
import Table from "@/components/userTable/Table"
import { Box, Container } from "@mui/material"
import Topbar from "@/components/topbar/Topbar"

const Homepage = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex", height: "100vh"}}>
      <Sidebar />
      <Container sx={{marginLeft: {
        xs: "0px", 
        sm: "200px",
        md: "200px",
        lg: "200px",
        xl: "200px",
      }, width: "100%", height: "100vh", overflowY: "scroll"}}>
      <Topbar />
      <Table />
      </Container>
    </Box>
  )
}

export default Homepage