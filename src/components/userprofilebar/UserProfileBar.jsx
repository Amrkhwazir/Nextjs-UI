"use client"
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Form from '../settingForm/Form';

const UserProfileBar = () => {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <Container sx={{backgroundColor: "white",  borderRadius: "8px", borderBottomLeftRadius: "0px" , borderBottomRightRadius: "0px", paddingBottom: "20px", width: "90%", marginLeft: "90px"}}>
        <Container sx={{display: "flex", justifyContent: {xs: 'space-between', sm: "space-evenly", md: "space-evenly", lg: "space-evenly"}}}>
        <Box sx={{width: "200px", marginTop: "20px"}}>
          <Link href={"/home"}>
          <Image src={"/images/arrowRight.png"} width={34} height={34} />
          </Link>
          
        </Box>
        <Box sx={{width: "600px", display: "flex", padding: '10px', paddingTop: "20px", flexDirection: {xs: "column", sm: "row", md: "row", lg: "row"}}}>
          <Image src={"/images/singleAvatar.png"} alt='avatar' width={80} height={80}/>
          <Box sx={{paddingTop: {xs: "10px", sm: "30px", md: "30px", lg: "30px"}, fontSize: "14px", marginLeft: '10px'}}>
          <Typography variant='body' className='userId'>F34</Typography>
          <Typography variant='h5' className='UserName' sx={{fontSize: {xs: "14px", sm: "18px", md: "20px"}, fontWeight: "bold"}}>ABC DEL</Typography>
          <span style={{display: "flex"}}>
          <LocationOnIcon sx={{fontSize: "20px"}} />
          <Typography variant='body' className='userCity'>USA</Typography>
          </span>
          <span style={{display: "flex"}}>
          <PhoneIcon sx={{fontSize: "18px"}} />
          <Typography variant='body' className='userPhone'>123 345 789</Typography>
          </span>
          </Box>
        </Box>
        <Box sx={{width: {xs: "180px", sm: "150px", md: "420px", lg: "420px"}, paddingTop: "30px"}}>
          <Container sx={{display: "flex", gap: '3px'}}>
            <Link href={"/hrvpage"}>
            <Button  sx={{borderRadius: "15px", backgroundColor: `${pathname === "/hrvpage" ? "#42A9F4" : "whiteSmoke"}`, width: {xs: "50px", sm: "120px", md: "120px", lg: "120px" }, fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"}, color:`${pathname === "/hrvpage" ? "white" : "grey"}`,}}>HRV</Button>
            </Link>
            <Link href={"/gpspage"}>
            <Button  sx={{borderRadius: "15px", fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"}, backgroundColor: `${pathname === "/gpspage" ? "#42A9F4" : "whiteSmoke"}`, width: {xs: "80px", sm: "120px", md: "120px", lg: "120px" },  color:`${pathname === "/gpspage" ? "white" : "grey"}`, marginLeft: "5px"}}>GPS</Button>
            </Link>
            
          </Container>
          <Container sx={{marginTop: "8px"}}>
            <Link href={"/moodpage"}>
          <Button  sx={{borderRadius: "15px", fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"} , backgroundColor: `${pathname === "/moodpage" ? "#42A9F4" : "whiteSmoke"}`, width: {xs: "120px", sm: "120px", md: "160px", lg: "180px" }, color:`${pathname === "/moodpage" ? "white" : "grey"}`}}>Mood Meter</Button>
            </Link>
          </Container>
          <Container sx={{display: "flex", marginTop: "8px", gap: "5px", justifyContent: 'center'}}>
          <NotificationsActiveIcon sx={{fontSize: "26px", color:"grey", marginTop: "4px"}} />
          <Link href={"/settings"}>
          <Button  sx={{borderRadius: "15px", fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"}, backgroundColor: `${pathname === "/settings" ? "#42A9F4" : "whiteSmoke"}`, width: {xs: "80px", sm: "120px", md: "120px", lg: "120px" }, color:`${pathname === "/settings" ? "white" : "grey"}`, marginLeft: "5px"}}>Settings</Button>
          </Link>
          </Container>
        </Box>
        </Container>
        <Container sx={{padding: "20px"}}>
        {pathname === "/hrvpage" && <Typography variant='h3' sx={{fontSize:{xs: "24px", sm: "30px", md: "34px", lg: "36px"}, fontWeight: "bold"}}>HRV Monitoring Page</Typography>}
        </Container>
       {pathname === "/settings" &&  <Form />}
    </Container>
  )
}

export default UserProfileBar