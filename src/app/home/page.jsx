import Sidebar from "@/components/sidebar/Sidebar"
import styles from "./home.module.css"
import Table from "@/components/userTable/Table"
import { Box, Container } from "@mui/material"
import Topbar from "@/components/topbar/Topbar"

const Homepage = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex", height: "100vh"}}>
      <Sidebar />
      <Container sx={{marginLeft: "200px", width: "100%",}}>
      <Topbar />
      <Table />
      </Container>
    </Box>
  )
}

export default Homepage