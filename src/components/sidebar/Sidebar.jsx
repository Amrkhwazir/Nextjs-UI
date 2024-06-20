import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"
import styles from "./sidebar.module.css"
import Link from "next/link"


const Sidebar = () => {
  return (
    <Container sx={{width: "200px", backgroundColor: "white", paddingTop: "30px", position: "fixed", height: "100vh",}} >
      <Box sx={{maxWidth: "200px", height: "200px", textAlign: "center"}}>
      <Image src={"/images/mainlogo.png"} width={80} height={80} />
      <Link href={"/home"}>
      <Typography className={styles.text}>Home</Typography>
      </Link>
      <Link href="/settings">
      <Typography className={styles.text}>Settings</Typography>
      </Link>
      </Box>
    </Container>
  )
}

export default Sidebar