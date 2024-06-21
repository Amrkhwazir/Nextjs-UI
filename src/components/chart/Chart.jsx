import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Graph from './Graph'
import LineChart from './LineChart'

const Chart = () => {
  return (
    <Box sx={{backgroundColor: "white", width: "90%", paddingBottom: "30px", marginLeft: "90px"}}>
        {/* heart rate and chart */}
        <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: {
            xs: "column",
            sm: "row",
            md: "row"
        }, alignItems: {xs: "center"}}}>
            <Box>
        <Box sx={{width: "230px", height: "200px", backgroundColor: "gainsboro", borderRadius: "30px", paddingTop: "30px", textAlign: "center", marginLeft: "0px", marginRight: "0px", fontSize: "24px"}}>
            <h1>89 bpm</h1>
        <Image src={"/images/heart.png"} width={120} height={120} />
        </Box>
        <Container sx={{marginTop: "12px"}}>
            <h3>Current Heart Rate</h3>
        </Container>
            </Box>
        <Box>
        <Image src={"/images/chart1.png"} width={400} height={200} />
        <Box>
        <h3 style={{marginLeft: "20px", marginTop:"10px"}}>PPG chart</h3>
        <Container sx={{marginTop: "10px"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: "110px", color: "white", height: "30px", marginLeft: "10px" }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "110px", color: "grey", height: "30px" , marginLeft: "10px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "110px", color: "grey", height: "30px", marginLeft: "10px" }}>Today</Button>
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