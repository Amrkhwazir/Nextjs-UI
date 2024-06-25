import Sidebar from "@/components/sidebar/Sidebar"
import Table from "@/components/userTable/Table"
import { Box, Container } from "@mui/material"
import Topbar from "@/components/topbar/Topbar"

const Homepage = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex", minHeight: "100vh"}}>
      <Sidebar />
      <Container sx={{marginLeft: {
        xs: "0px", 
        sm: "150px",
        md: "200px",
        lg: "200px",
        xl: "200px",
      }, minWidth: "100%", minHeight: "100vh", backgroundColor: "whitesmoke",}}>
      <Topbar />
      <Table />
      </Container>
    </Box>
  )
}

export default Homepage