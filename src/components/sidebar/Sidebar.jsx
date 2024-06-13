import { Box, Container } from "@mui/material"
import Image from "next/image"
import styles from "./sidebar.module.css"
import Link from "next/link"


const Sidebar = () => {
  return (
    <Container sx={{width: "200px", height: "100vh", backgroundColor: "white", paddingTop: "30px"}} >
      <Box sx={{maxWidth: "200px", height: "200px", textAlign: "center"}}>
      <Image src={"/images/mainlogo.png"} width={80} height={80} />
      <p className={styles.text}>Home</p>
      <Link href="/settings">
      <p className={styles.text}>Settings</p>
      </Link>
      </Box>
    </Container>
  )
}

export default Sidebar