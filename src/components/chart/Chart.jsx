import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Graph from './Graph'
import LineChart from './LineChart'

const Chart = () => {
  return (
    <Box sx={{backgroundColor: "white", width: "100%", paddingBottom: "30px"}}>
        {/* heart rate and chart */}
        <Box sx={{ display: "flex", justifyContent: "space-around"}}>
            <Box>
        <Box sx={{width: "250px", height: "200px", backgroundColor: "gainsboro", borderRadius: "30px", paddingTop: "30px", textAlign: "center", marginLeft: "0px", marginRight: "0px", fontSize: "24px"}}>
            <h1>89 bpm</h1>
        <Image src={"/images/heart.png"} width={120} height={120} />
        </Box>
        <Container sx={{margin: "12px"}}>
            <h4>Current Heart Rate</h4>
        </Container>
            </Box>
        <Box>
        <Image src={"/images/chart1.png"} width={500} height={200} />
        <Box>
        <h3 style={{marginLeft: "30px", marginTop:"10px"}}>PPG chart</h3>
        <Container sx={{marginTop: "10px"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: "120px", color: "white", height: "30px", marginLeft: "10px" }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "120px", color: "grey", height: "30px" , marginLeft: "10px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "120px", color: "grey", height: "30px", marginLeft: "10px" }}>Today</Button>
        </Container>
        </Box>
        </Box>
        </Box>
        {/* graph chart */}
        <Graph />
        <LineChart />
    </Box>
  )
}

export default Chart