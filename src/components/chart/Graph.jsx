import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'

const Graph = () => {
  return (
    <Container sx={{marginTop: "20px", padding: "10px", backgroundColor: "white"}}>
<Box sx={{ display:"flex", justifyContent: "space-evenly", fontWeight: 'bold'}}>
    <p>Friday</p>
    <p>Saturday</p>
    <p>Sunday</p>
    <p>Monday</p>
    <p>Yesterday</p>
    <p>Today</p>
</Box>
<Box sx={{display: "flex", justifyContent: "center", marginTop: '12px'}}>
<Image src={"/images/Line2.png"} width={800} height={1} />
</Box>
<Box sx={{padding: "10px", display: "flex", justifyContent: "center", position: "relative"}}>
<Image src={"/images/Rectangle12.png"} width={750} height={250} />
<img style={{position: "absolute", width: "720px", bottom: "130px", left: "50px"}} src="/images/Line1.png" alt="" />
<img style={{position: "absolute", width: "650px", bottom: "80px", left: "120px"}} src="/images/vector.png" alt="" />
<ul>
    <li style={{position: "absolute", top: "20px", left: "20PX", listStyle: "none", fontWeight: "bold"}}>300 <br /> bpm</li>
    <li style={{position: "absolute", top: "90px", left: "20PX", listStyle: "none", fontWeight: "bold"}}>100 <br /> bpm</li>
    <li style={{position: "absolute", bottom: "10px", left: "20PX", listStyle: "none", fontWeight: "bold"}}>0 <br /> bpm</li>
</ul>
</Box>
<Box sx={{display: 'flex', justifyContent: "space-evenly", marginTop: "10px"}}>
        <h3 style={{marginTop:"10px", width: "300px"}}>Heart Rate History</h3>
        <Box sx={{marginTop: "10px"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: "110px", color: "white", height: "30px" }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "110px", color: "grey", height: "30px" , marginLeft: "10px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "110px", color: "grey", height: "30px",  marginLeft: "10px" }}>Today</Button>
        </Box>
        </Box>
</Container>

  )
}

export default Graph