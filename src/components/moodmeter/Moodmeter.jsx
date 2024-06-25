import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from "./moodmeter.module.css"

const Moodmeter = () => {
  return (
   <Container sx={{backgroundColor: "white", minWidth: '100%', display: "flex", justifyContent: "flex-start", flexDirection: {
    xs: "column",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "row"
   }, alignItems: "center",}}>
    <Box sx={{width: "60%", height: "100%", display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: "center"}}>
        <Box sx={{width: {xs: '250px', sm: "180px", md: "200px", lg: "230px"}, height: {xs: "250px", sm: "220px", md: "250px", lg: "250px", xl: "250px"}, backgroundColor: "gainsboro", borderRadius: "30px", paddingTop: "30px", textAlign: "center", fontSize: "24px"}}>
        <Typography variant='h3' sx={{marginBottom: "30px"}}>Happy</Typography>   
        <Image src={"/images/happy.png"} width={80} height={80} />   
        </Box>
        <Box sx={{paddingTop: "12px", textAlign: "center", height: {xs: '50px', sm: "100px", md: "90px", lg: "90px"}}}>
        <Typography variant='h5'>Current Mood</Typography>
        </Box>
    </Box>
    <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: "center",}}>
        <Box sx={{width: {xs: "270px", sm: "320px", md: "450px", lg: "500px"}, backgroundColor: "gainsboro", height: {xs: "250px", sm: "230px", md: "250px", lg: "250px", xl: "250px"}, borderRadius: "30px", padding: '15px'}}>
            {/* 1 */}
            <Box sx={{display: "flex", gap: "10px",}}>
            <Container sx={{background: 'whitesmoke', width: {xs: '25%', sm: '20%', md: '25%', lg: '25%', xl: '25%'}, height: '90px' , borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 2 */}
            <Container sx={{textAlign: "center",  background: 'whitesmoke', width: {xs: '25%', sm: '20%', md: '25%', lg: '25%', xl: '25%'}, borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 3 */}
            <Container sx={{textAlign: "center", background: 'whitesmoke', width: {xs: '25%', sm: '20%', md: '25%', lg: '25%', xl: '25%'}, borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 4 */}
            <Container sx={{textAlign: "center", background: 'whitesmoke', width: {xs: '25%', sm: '20%', md: '25%', lg: '25%', xl: '25%'}, borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            </Box>

            <Box sx={{display: "flex", paddingTop: "15px",  paddingTop: "10px", gap: "10px"}}>
            <Container sx={{textAlign: "center", background: 'whitesmoke', width: {xs: '25%', sm: '20%', md: '25%', lg: '25%', xl: '25%'}, height: '90px', borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 2 */}
            <Container sx={{textAlign: "center", background: 'whitesmoke', width: {xs: '25%', sm: '20%', md: '25%', lg: '25%', xl: '25%'}, borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 3 */}
            <Container sx={{textAlign: "center", background: 'whitesmoke', width: {xs: '25%', sm: '20%', md: '25%', lg: '25%', xl: '25%'}, borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            {/* 4 */}
            <Container sx={{textAlign: "center", background: 'whitesmoke', width: {xs: '25%', sm: '20%', md: '25%', lg: '25%', xl: '25%'}, borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box>
                <Image src={"/images/sad.png"} width={24} height={24} />
                <Typography variant='body1'>52</Typography>
            </Box>
            <Typography>wed</Typography>
            </Container>
            </Box>
        </Box>
        <Box sx={{marginBottom: "20px"}}>
        <h3 style={{marginLeft: "10px", marginTop:"20px"}}>PPG chart</h3>
        <Container sx={{marginTop: "10px", display: "flex"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", maxWidth: "120px", color: "white", height: "30px", fontSize: "10px" }}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", maxWidth: "120px", color: "grey", height: "30px" , marginLeft: "10px", fontSize: "10px"}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", maxWidth: "120px", color: "grey", height: "30px", marginLeft: "10px", fontSize: "10px" }}>Today</Button>
        </Container>
        </Box>
    </Box>
   </Container>
  )
}

export default Moodmeter