import { Box, Container } from '@mui/material'
import Image from 'next/image'


const Map = () => {
  return (
    <Container sx={{marginTop: "20px", backgroundColor: "white", padding: "40px", borderRadius: '12px', width: '90%', marginLeft: "90px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Box sx={{borderRadius: '15px', display: "flex", justifyContent: "center", position: "relative", width: "800px"}}>
            <img style={{width: "800px", height: "350px", borderRadius: "12px"}} src={"/images/map2.png"} />
            <img style={{position: "absolute", width: '300px', bottom: "0px", left: "150px"}} src="/images/Vector2.png" alt=""  />
            <img style={{position: "absolute", width: '50px', top: "90px", left: "320px"}} src="/images/Ellipse.png" alt=""  />
            <Box sx={{position: "absolute", top: "80px", marginLeft: "80px"}}>
                <p>Current City</p>
                <h3>City Center</h3>
            </Box>
        </Box>
        <Box sx={{width: "800px", display: "flex", justifyContent: "space-evenly"}}>
            <Box sx={{display: "flex", paddingTop: "12px", gap: "10px", alignItems: "center"}}>
                <Image src={"/images/walk.png"} width={40} height={40} />
                <h4>Walking | 5 km/h</h4>
            </Box>
            <Box sx={{display: "flex", paddingTop: "12px", gap: "10px", alignItems: "center"}}>
            <Image src={"/images/time.png"} width={24} height={24} />
            <h4>18 Minutes</h4>
            </Box>
        </Box>
    </Container>
  )
}

export default Map