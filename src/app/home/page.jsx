import Sidebar from "@/components/sidebar/Sidebar"
import styles from "./home.module.css"
import Table from "@/components/userTable/Table"
import { Box, Container } from "@mui/material"
import Topbar from "@/components/topbar/Topbar"

const Homepage = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex"}}>
      <Sidebar />
      <Container sx={{paddingTop: "20px"}}>
      <Topbar />
      <Table />
      </Container>
    </Box>
  )
}

export default Homepage