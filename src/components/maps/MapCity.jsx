import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import styles from "./mapcity.module.css"


const MapCity = () => {
  return (
    <Container sx={{marginTop: "20px", backgroundColor: "white", padding: "40px", borderRadius: '12px', width: '90%', marginLeft: "90px", display: "flex", flexDirection: "column", alignItems: "center"}}>

          <Box sx={{width: "800px", display: "flex", justifyContent: "flex-start", marginBottom: '10px', width: '100%'}}>
            <Box sx={{display: "flex", paddingLeft: "12px",gap: "10px", alignItems: "center"}}>
            <Image src={"/images/Navigate.png"} width={40} height={40} />
            <h4>Location History</h4>
            </Box>
        </Box>
        <Box sx={{borderRadius: '15px', display: "flex", justifyContent: "center", position: "relative", maxWidth: "800px"}}>
            <img  className={styles.map} src={"/images/map1.png"} alt='map' />
            <img  className={styles.linevector} src="/images/Vector3.png" alt=""  />
            <img style={{}} className={styles.secondEllipse} src="/images/Ellipse.png" alt=""  />
            <Box sx={{position: "absolute", top: "80px", marginLeft: "80px"}}>
                <p>Current City</p>
                <h3>City Center</h3>
            </Box>
        </Box>
        <Container sx={{marginTop: "20px", display: "flex", justifyContent: "flex-end", gap: '10px', width: {xs: "100%", sm: "90%", md: "100%", lg: "90%"}}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", color: "white", height: "30px", fontSize: {xs: "10px", sm: "12px", md: '14px', lg: "14px", xl : "16px"}, width: "100px"}}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", color: "grey", height: "30px", fontSize: {xs: "10px", sm: "12px", md: '14px', lg: "14px", xl : "16px"}, width: "110px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", color: "grey", height: "30px", fontSize: {xs: "10px", sm: "12px", md: '14px', lg: "14px", xl : "16px"}, width: "90px"}}>Today</Button>
        </Container>

    </Container>
  )
}

export default MapCity