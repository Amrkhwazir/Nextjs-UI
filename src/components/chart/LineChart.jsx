import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const LineChart = () => {
  return (
    <Container sx={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
        <Box>
        <Box>
            <Image src={"/images/chart2.png"} width={730} height={250} />
        </Box>
        <Box sx={{display: 'flex', justifyContent: "space-evenly"}}>
        <h3 style={{marginTop:"10px", width: "300px"}}>Heart Rate History</h3>
        <Box sx={{marginTop: "10px"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: "120px", color: "white", height: "30px" }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "120px", color: "grey", height: "30px" , marginLeft: "10px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "120px", color: "grey", height: "30px",  marginLeft: "10px" }}>Today</Button>
        </Box>
        </Box>
        </Box>
    </Container>
  )
}

export default LineChart