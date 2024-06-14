import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Moodmeter = () => {
  return (
   <Container sx={{backgroundColor: "white", padding: "40px", width: '90%', marginLeft: "90px", display: "flex", justifyContent: "space-around"}}>
    <Box>
        <Box sx={{width: "230px", height: "200px", backgroundColor: "gainsboro", borderRadius: "30px", paddingTop: "30px", textAlign: "center", fontSize: "24px"}}>
        <h1>Happy</h1>   
        <Image src={"/images/happy.png"} width={30} height={30} />   
        </Box>
        <Box sx={{paddingTop: "12px", textAlign: "center"}}>
        <h3>Current Mood</h3>
        </Box>
    </Box>
    <Box>
        <Box sx={{width: "500px", backgroundColor: "gainsboro", height: "200px", borderRadius: "30px", paddingTop: "30px", display: 'flex', flexWrap: "wrap"}}>
            {/* 1 */}
            <Container sx={{textAlign: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <p>52</p>
            </Box>
            <p>wed</p>
            </Container>
            {/* 1 */}
            <Container sx={{textAlign: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <p>52</p>
            </Box>
            <p>wed</p>
            </Container>
            {/* 1 */}
            <Container sx={{textAlign: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <p>52</p>
            </Box>
            <p>wed</p>
            </Container>
            {/* 1 */}
            <Container sx={{textAlign: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <p>52</p>
            </Box>
            <p>wed</p>
            </Container>
            <Container sx={{textAlign: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <p>52</p>
            </Box>
            <p>wed</p>
            </Container>
            <Container sx={{textAlign: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <p>52</p>
            </Box>
            <p>wed</p>
            </Container>
        </Box>
        <Box>
        <h3 style={{marginLeft: "20px", marginTop:"10px"}}>PPG chart</h3>
        <Container sx={{marginTop: "10px"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: "110px", color: "white", height: "30px", marginLeft: "10px" }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "110px", color: "grey", height: "30px" , marginLeft: "10px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "110px", color: "grey", height: "30px", marginLeft: "10px" }}>Today</Button>
        </Container>
        </Box>
    </Box>
   </Container>
  )
}

export default Moodmeter