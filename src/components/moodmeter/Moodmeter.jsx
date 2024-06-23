import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from "./moodmeter.module.css"

const Moodmeter = () => {
  return (
   <Container sx={{backgroundColor: "white", padding: "0px 10px", width: '90%', marginLeft: "90px", display: "flex", justifyContent: "space-around", flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
   }, alignItems: "center", gap: '30px'}}>
    <Box>
        <Box sx={{width: {xs: '250px', sm: "350px", md: "200px", lg: "230px"}, height: "250px", backgroundColor: "gainsboro", borderRadius: "30px", paddingTop: "30px", textAlign: "center", fontSize: "24px"}}>
        <Typography variant='h3' sx={{marginBottom: "30px"}}>Happy</Typography>   
        <Image src={"/images/happy.png"} width={80} height={80} />   
        </Box>
        <Box sx={{paddingTop: "12px", textAlign: "center", height: {xs: '50px', sm: "80px", md: "70px", lg: "80px"}}}>
        <Typography variant='h5'>Current Mood</Typography>
        </Box>
    </Box>
    <Box>
        <Box sx={{width: {xs: "300px", sm: "450px", md: "450px", lg: "500px"}, backgroundColor: "gainsboro", height: "250px", borderRadius: "30px", padding: '15px', marginLeft: "10px"}}>
            {/* 1 */}
            <Box sx={{display: "flex", paddingTop: "10px", gap: "20px",}}>
            <Container sx={{textAlign: "center",  background: 'grey', width: '35%', borderRadius: "20px", padding: "8px"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 2 */}
            <Container sx={{textAlign: "center",  background: 'grey', width: '35%', borderRadius: "20px", padding: "8px"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 3 */}
            <Container sx={{textAlign: "center", background: 'grey', width: '35%', borderRadius: "20px", padding: "8px"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 4 */}
            <Container sx={{textAlign: "center", background: 'grey', width: '35%', borderRadius: "20px", padding: "8px"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            </Box>

            <Box sx={{display: "flex", paddingTop: "15px",  paddingTop: "10px", gap: "20px"}}>
            <Container sx={{textAlign: "center", background: 'grey', width: '35%', borderRadius: "20px", padding: "8px"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 2 */}
            <Container sx={{textAlign: "center", background: 'grey', width: '35%', borderRadius: "20px", padding: "8px"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 3 */}
            <Container sx={{textAlign: "center", background: 'grey', width: '35%', borderRadius: "20px", padding: "8px"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 4 */}
            <Container sx={{textAlign: "center", background: 'grey', width: '35%', borderRadius: "20px", padding: "8px"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            </Box>
        </Box>
        <Box sx={{marginBottom: "20px"}}>
        <h3 style={{marginLeft: "20px", marginTop:"20px"}}>PPG chart</h3>
        <Container sx={{marginTop: "10px", display: "flex"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: {xs: "100px", sm: '110px', md: "110px", lg: "120px"}, color: "white", height: "30px", marginLeft: "0px", fontSize: "11px" }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: {xs: "100px", sm: '110px', md: "110px", lg: "120px"}, color: "grey", height: "30px" , marginLeft: "10px", fontSize: "11px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: {xs: "", sm: '110px', md: "110px", lg: "120px"}, color: "grey", height: "30px", marginLeft: "10px", fontSize: "11px" }}>Today</Button>
        </Container>
        </Box>
    </Box>
   </Container>
  )
}

export default Moodmeter