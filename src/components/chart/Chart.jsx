import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Graph from './Graph'
import LineChart from './LineChart'
import styles from "./chart.module.css"

const Chart = () => {
  return (
    <Box sx={{backgroundColor: "white", maxWidth: "100%", paddingBottom: "30px"}}>
        {/* heart rate and chart */}
        <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
        }, alignItems: {xs: "center"}, paddingLeft: {xs: "0px", sm: "20px", md: "20px", lg: "20px"}}}>
            <Box>
        <Box sx={{width: {xs: "230px", sm: "200px", md: "230px", lg: "230px", xl: "430px"}, height: {xs: "200px", sm: "190px", md: "200px", lg: "200px", xl: "280px"}, backgroundColor: "gainsboro", borderRadius: "30px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
            <Typography variant='h3'>89 bpm</Typography>
        <Image src={"/images/heart.png"} width={120} height={120} />
        </Box>
        <Container sx={{marginTop: "12px", height: {xs: '50px', sm: "80px", md: "70px", lg: "60px"}}}>
            <h3>Current Heart Rate</h3>
        </Container>
            </Box>
        <Box sx={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
        <img src={"/images/chart1.png"} alt='chart' className={styles.chartImg} />
        <Box>
        <h3 style={{marginLeft: "30px", marginTop:"10px"}}>PPG chart</h3>
        <Container sx={{marginTop: "10px", display: "flex", justifyContent: "center", gap: {xs: "10px"}, flexWrap: "wrap",}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", maxWidth: "240px", color: "white", height: "30px", fontSize: {xs: "11px", sm: "12px", md: "14px", lg: "14px", xl: "16px"}}}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", maxWidth: "120px", color: "grey", height: "30px", fontSize: {xs: "11px", sm: "12px", md: "14px", lg: "14px", xl: "16px"} }}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", maxWidth: "120px", height: "30px", color: "grey", fontSize: {xs: "11px", sm: "12px", md: "14px", lg: "14px", xl: "16px"} }}>Today</Button>
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