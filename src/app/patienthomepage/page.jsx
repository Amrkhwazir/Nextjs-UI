import { Box, Typography } from '@mui/material'
    import Image from 'next/image'
    import React from 'react'
    import { MoreVert, GraphicEq } from '@mui/icons-material'
    import Link from 'next/link';
    import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
    
    const page = () => {
      return (
        <Box sx={{width: '100%', height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll",}}>
          <Box sx={{width: '100%', height: "100vh" , backgroundColor: "whitesmoke", borderRadius: "8px"}}>
            <Box sx={{width: "100%", height: "100px", display: "flex", justifyContent:"space-between", padding: "30px"}}>
                
               <Link href={"/"}>
                <Image src={"/images/mainLogo.png"} alt='logo' width={80} height={70} style={{cursor: "pointer"}} />
               </Link>
                <MoreVert style={{cursor: "pointer", fontSize: "32px", marginTop: '20px'}} />
            </Box>
            <Box sx={{display: "flex",marginTop: {xs: "40px", sm: "90px", md: "50px", lg: "50px"}, paddingLeft: "120px", gap: "10px"}}>
              <Box>
                <Typography variant='body'>Hi</Typography>
                <Typography variant='h4' sx={{fontSize: {
                    xs: "20px",
                    sm: "24px",
                    md: "32px",
                    lg: "32px",
                    xl: "36px"
                }}}>ABC DEL</Typography>
            </Box>
              <Image src={"/images/patientimage.png"} alt='patient image' width={70} height={70} style={{cursor: "pointer"}} />
            </Box>
            <Box sx={{width: "100%", height: {xs: "320px", sm: "320px", md: "320px", lg: "320px"}, marginTop: {xs: "40px", sm: "90px", md: "50px", lg: "50px"}, display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <Box sx={{width: '10%', height: "90%" ,backgroundColor: "gainsboro", borderTopRightRadius: "20px", borderBottomRightRadius: "20px"}}></Box>
            <Box sx={{width: {
                xs: "70%",
                sm: "70%",
                md: "70%",
                lg: "70%",
                xl: "70%"
            }, height: "100%" , backgroundColor: "white", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                <Typography variant='body'>Live Heart Rate</Typography>
                <Typography variant='h2' sx={{fontSize: {xs: "28px", sm: "62px", md: "62px", lg: "70px"}}}>89 bpm</Typography>
                <Image src={"/images/heart.png"} alt='heart logo' width={120} height={120} />
                <GraphicEq />

            </Box>
            <Box sx={{width: '10%', height: "90%" , backgroundColor: "#42A9F4", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Link href={"/patientmoodpage"}>
                <ArrowForwardIosIcon sx={{fontSize: {xs: "24px", sm: "30px", md: "34px", lg: "40px"}, cursor: 'pointer', color: "white"}} />
                </Link>
            </Box>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", padding: "20px 10px"}}>
                <Box sx={{backgroundColor: "#42A9F4", padding: "5px 10px", borderRadius: "40px", color: "white", width:'200px', textAlign: "center"}}>
                <Typography variant='body'>Hows your mood?</Typography>
                </Box>
            </Box>
            </Box>
        </Box>  
      )
    }
    
export default page
