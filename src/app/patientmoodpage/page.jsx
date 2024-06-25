import { Box, Typography } from '@mui/material'
    import Image from 'next/image'
    import React from 'react'
    import { MoreVert, GraphicEq, SentimentSatisfiedAlt, SentimentNeutral, SentimentVeryDissatisfied } from '@mui/icons-material'
    import Link from 'next/link';
    import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
    
    const page = () => {
      return (
        <Box sx={{width: '100%', height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll"}}>
          <Box sx={{width: '100%', height: "100vh" , backgroundColor: "whitesmoke", borderRadius: "8px"}}>
            <Box sx={{width: "100%", height: "100px", display: "flex", justifyContent:"space-between", padding: "30px"}}>
          
            <Link href={"/patienthomepage"}>
            <Image src={"/images/arrowRight.png"} alt='back to previous page' width={30} height={30} style={{cursor: "pointer"}} />
           </Link>
             
               <Link href={"/"}>
                <Image src={"/images/mainlogo.png"} width={80} height={70} style={{cursor: "pointer"}} />
               </Link>  

                <MoreVert style={{cursor: "pointer", fontSize: "32px", marginTop: '10px'}} />
            </Box>
            <Box sx={{display: "flex",marginTop: {xs: "40px", sm: "90px", md: "50px", lg: "50px"}, paddingLeft: "120px", gap: "10px"}}>
              <Box>
                <Typography variant='body'>Hi</Typography>
                <Typography variant='h4' sx={{fontSize: {
                    xs: "16px",
                    sm: "24px",
                    md: "32px",
                    lg: "32px",
                    xl: "36px"
                }}}>ABC DEL</Typography>
            </Box>
              <Image src={"/images/patientimage.png"} alt='patient image' width={70} height={70} style={{cursor: "pointer"}} />
            </Box>
            <Box sx={{width: "100%", height: "320px", marginTop: {xs: "40px", sm: "90px", md: "50px", lg: "50px"}, display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <Box sx={{width: '10%', height: "90%" ,backgroundColor: "gainsboro", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link href={"/patienthomepage"}>
                <ArrowBackIosNewIcon sx={{fontSize: {xs: "24px", sm: "30px", md: "34px", lg: "40px"}, cursor: 'pointer', color: "white"}} />
                </Link>
                </Box>
            <Box sx={{width: {
                xs: "70%",
                sm: "70%",
                md: "70%",
                lg: "70%",
                xl: "70%"
            }, height: "100%" , backgroundColor: "white", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                <Typography variant='body'>Your current mood</Typography>
              <Box>
              <Box>
               <SentimentSatisfiedAlt sx={{fontSize: "42px", margin: "5px 4px"}} />
                <SentimentNeutral sx={{fontSize: "42px", margin: "5px 4px"}} />
                <SentimentVeryDissatisfied sx={{fontSize: "42px", margin: "5px 4px"}} />
               </Box>
               <Box>
                <SentimentNeutral sx={{fontSize: "42px", margin: "5px 4px"}} />
                <SentimentVeryDissatisfied sx={{fontSize: "42px", margin: "5px 4px"}} />
               <SentimentSatisfiedAlt  sx={{fontSize: "42px", margin: "5px 4px"}}/>
               </Box>
              </Box>
                <GraphicEq />
            </Box>
            <Box sx={{width: '10%', height: "90%" , backgroundColor: "#42A9F4", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px"}}>
            </Box>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", padding: "20px 10px"}}>
                <Box sx={{backgroundColor: "#42A9F4", padding: "5px 10px", borderRadius: "40px", color: "white", width: '200px', textAlign: "center"}}>
                <Typography variant='body'>Live Health Status</Typography>
                </Box>
            </Box>
            </Box>
        </Box>
      )
    }
    
export default page
