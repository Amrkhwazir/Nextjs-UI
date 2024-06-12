import Sidebar from "@/components/sidebar/Sidebar"
import styles from "./home.module.css"
import Table from "@/components/userTable/Table"
import { Box, Container } from "@mui/material"

const Homepage = () => {
  return (
    <Box sx={{backgroundColor: "whitesmoke", display: "flex"}}>
      <Sidebar />
      <Container sx={{paddingTop: "100px"}}>
      <Table />
      </Container>
    </Box>
  )
}

export default Homepage