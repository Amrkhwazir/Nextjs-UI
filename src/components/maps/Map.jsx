import { Box, Container } from '@mui/material'
import Image from 'next/image'
import styles from "./map.module.css"


const Map = () => {
  return (
    <Container sx={{marginTop: "20px", backgroundColor: "white", padding: "40px", borderRadius: '12px', minWidth: '100%', display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Box sx={{borderRadius: '15px', display: "flex", justifyContent: "center", position: "relative", maxWidth: "1500px"}}>
            <img className={styles.mapImg} src={"/images/map2.png"} />
            <img className={styles.vectormap} src="/images/Vector2.png" alt=""  />
            <img className={styles.ellipse} src="/images/Ellipse.png" alt=""  />
            <Box sx={{position: "absolute", top: {xs: '40px', sm: "80px", md: "80px", lg: "80px"}, marginLeft: "80px", fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"}}}>
                <p>Current City</p>
                <h3>City Center</h3>
            </Box>
        </Box>
        <Box sx={{width: "800px", display: "flex", justifyContent: "space-evenly", width: "100%", fontSize: {xs: "12px", sm: "14px", md: "14px", lg: "14px"}}}>
            <Box sx={{display: "flex", paddingTop: "12px", gap: "10px", alignItems: "center"}}>
                <Image src={"/images/walk.png"} width={40} height={40} />
                <h4>Walking | 5 km/h</h4>
            </Box>
            <Box sx={{display: "flex", paddingTop: "12px", gap: "10px", alignItems: "center", marginLeft: "40px"}}>
            <Image src={"/images/time.png"} width={24} height={24} />
            <h4>18 Minutes</h4>
            </Box>
        </Box>
    </Container>
  )
}

export default Map