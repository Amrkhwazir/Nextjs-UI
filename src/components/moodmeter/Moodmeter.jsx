import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Moodmeter = () => {
  return (
   <Container sx={{backgroundColor: "white", padding: "40px", width: '90%', marginLeft: "90px", display: "flex", justifyContent: "space-around"}}>
    <Box>
        <Box sx={{width: "230px", height: "250px", backgroundColor: "gainsboro", borderRadius: "30px", paddingTop: "30px", textAlign: "center", fontSize: "24px"}}>
        <Typography variant='h3' sx={{marginBottom: "30px"}}>Happy</Typography>   
        <Image src={"/images/happy.png"} width={80} height={80} />   
        </Box>
        <Box sx={{paddingTop: "12px", textAlign: "center"}}>
        <Typography variant='h5'>Current Mood</Typography>
        </Box>
    </Box>
    <Box>
        <Box sx={{width: "500px", backgroundColor: "gainsboro", height: "250px", borderRadius: "30px", padding: '15px'}}>
            {/* 1 */}
            <Box sx={{display: "flex", paddingTop: "10px", gap: "20px"}}>
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