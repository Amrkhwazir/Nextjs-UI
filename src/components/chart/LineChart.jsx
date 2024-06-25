import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from "./linechart.module.css"

const LineChart = () => {
  return (
    <Container sx={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
        <Box sx={{flexDirection: "column", display: "flex", alignItems: "center"}}>
        <Box>
            <img src={"/images/chart2.png"} className={styles.lineChart} />
        </Box>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row', md: "row", lg: "row"}, justifyContent: "space-evenly", marginTop: "10px", width: "100%"}}>
        <Typography style={{marginTop:"10px", fontWeight: "bold", fontSize: "18px"}}>Heart Rate History</Typography>
        <Box sx={{marginTop: "10px",  display: "flex", justifyContent: 'center', gap: "10px"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", maxWidth: "120px", color: "white", height: "30px", fontSize: {xs: "11px", sm: "12px", md: "14px", lg: "14px", xl: "16px"} }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", maxWidth: "120px", color: "grey", height: "30px", fontSize: {xs: "11px", sm: "12px", md: "14px", lg: "14px", xl: "16px"} }}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", maxWidth: "120px", color: "grey", height: "30px", fontSize: {xs: "11px", sm: "12px", md: "14px", lg: "14px", xl: "16px"} }}>Today</Button>
        </Box>
        </Box>
        </Box>
    </Container>
  )
}

export default LineChart