import { Box, Button, FormControl, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Settings } from '@mui/icons-material'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import WatchIcon from '@mui/icons-material/Watch';
import Link from 'next/link';

const page = () => {
  return (
    <Box sx={{width: '100%', height: "100vh", backgroundColor: "whitesmoke", padding: "30px",overflowY: "scroll"}}>
      <Box sx={{width: '100%', height: "100vh" , backgroundColor: "white", borderRadius: "8px", position: "relative", overflowY: "scroll"}}>
        <Box sx={{width: "100%", height: "100px", backgroundColor: "#41A9F4", borderTopLeftRadius: "8px", borderTopRightRadius: "8px",  display: "flex", justifyContent:"space-between", padding: "40px"}}>
           <Link href={"/"}>
            <Image src={"/images/arrowRight.png"} alt='go back' width={30} height={30} style={{cursor: "pointer"}} />
           </Link>
           
            <Settings style={{cursor: "pointer", fontSize: "28px"}} />
        </Box>
        <Box>
          <Image src={"/images/patientimage.png"} alt='patient image' width={100} height={100} style={{cursor: "pointer", position: "absolute", right: "100px", top: "50px"}} />
          <AddPhotoAlternateOutlinedIcon style={{position: "absolute", right: "90px"}} />
        </Box>
        <Box sx={{paddingLeft: {
            xs: "10px",
            sm: "40px",
            md: "250px",
        }}}>
        <Box sx={{marginTop: "30px"}}>
            <Typography variant='body'>Hi</Typography>
            <Typography variant='h4'>ABC DEL</Typography>
        </Box>
        <Box sx={{marginTop: "30px", display: "flex", flexDirection: "column"}}>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Name" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Username" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Email" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Password" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}} type='password'  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} type='password' placeholder="Confirm Password" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Phone" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="City" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Country" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Employee ID" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Emergency Contact Name" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Emergency Phone" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px", position: 'relative'}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Select your medical conditions" />
    <ExpandCircleDownIcon style={{position: "absolute",  right: "10px", top: "4px"}} />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px", position: "relative"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px", width: "80%"}} placeholder="Link my device" />
      <WatchIcon style={{position: "absolute",  right: "10px", top: "4px"}}  />
        </FormControl>
        </Box>
        <Box sx={{marginTop: "10px", paddingTop: "20px"}}>
            <Link href="/patienthomepage">
          <Button sx={{borderRadius: "15px", paddingLeft: "20px", paddingRight: "20px"}} variant='contained'>Save Details</Button>
            </Link>
        </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default page