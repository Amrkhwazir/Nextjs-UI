import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'


const MapCity = () => {
  return (
    <Container sx={{marginTop: "20px", backgroundColor: "white", padding: "40px", borderRadius: '12px', width: '90%', marginLeft: "90px", display: "flex", flexDirection: "column", alignItems: "center"}}>

          <Box sx={{width: "800px", display: "flex", justifyContent: "flex-start", marginBottom: '10px'}}>
            <Box sx={{display: "flex", paddingLeft: "12px",gap: "10px", alignItems: "center"}}>
            <Image src={"/images/Navigate.png"} width={40} height={40} />
            <h4>Location History</h4>
            </Box>
        </Box>
        <Box sx={{borderRadius: '15px', display: "flex", justifyContent: "center", position: "relative", maxWidth: "800px"}}>
            <img style={{maxWidth: "800px", height: "350px", borderRadius: "12px"}} src={"/images/map1.png"} />
            <img style={{position: "absolute", width: '400px', bottom: "5px", left: "100px"}} src="/images/Vector3.png" alt=""  />
            <img style={{position: "absolute", width: '50px', bottom: "170px", right: "275px"}} src="/images/Ellipse.png" alt=""  />
            <Box sx={{position: "absolute", top: "80px", marginLeft: "80px"}}>
                <p>Current City</p>
                <h3>City Center</h3>
            </Box>
        </Box>
        <Container sx={{marginTop: "10px", display: "flex", justifyContent: "flex-end"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: "110px", color: "white", height: "30px", marginRight: "10px" }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "110px", color: "grey", height: "30px" , marginRight: "10px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "110px", color: "grey", height: "30px", marginRight: "50px" }}>Today</Button>
        </Container>

    </Container>
  )
}

export default MapCity