import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Link from 'next/link';

const UserProfileBar = () => {
  return (
    <Container sx={{backgroundColor: "white",  borderRadius: "8px"}}>
        <Container sx={{display: "flex", justifyContent: "space-around"}}>
        <Box sx={{width: "200px", marginTop: "20px"}}>
          <Link href={"/home"}>
          <Image src={"/images/arrowRight.png"} width={34} height={34} />
          </Link>
          
        </Box>
        <Box sx={{width: "650px", display: "flex", padding: '10px', paddingTop: "20px"}}>
          <Image src={"/images/singleAvatar.png"} width={150} height={150} />
          <Box sx={{paddingTop: "30px", fontSize: "14px", marginLeft: '10px'}}>
          <p className='userId'>F34</p>
          <h1 className='UserName'>ABC DEL</h1>
          <span style={{display: "flex"}}>
          <LocationOnIcon sx={{fontSize: "20px"}} />
          <p className='userCity'>USA</p>
          </span>
          <span style={{display: "flex"}}>
          <PhoneIcon sx={{fontSize: "18px"}} />
          <p className='userPhone'>123 345 789</p>
          </span>
          </Box>
        </Box>
        <Box sx={{width: "330px", paddingTop: "30px"}}>
          <Container>
            <Button variant='contained' sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: "120px"}}>HRV</Button>
            <Button variant='Text' sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "120px", color:"grey", marginLeft: "5px"}}>GPS</Button>
          </Container>
          <Container sx={{marginTop: "8px"}}>
          <Button variant='Text' sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "180px", color:"grey"}}>Mood Meter</Button>
          </Container>
          <Container sx={{display: "flex", marginTop: "8px", gap: "5px", justifyContent: 'center'}}>
          <NotificationsActiveIcon sx={{fontSize: "26px", color:"grey", marginTop: "4px"}} />
          <Button variant='Text' sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: "130px", color:"grey", marginLeft: "5px"}}>Settings</Button>
          </Container>
        </Box>
        </Container>
        <Container sx={{padding: "20px"}}>
        <h1>HRV Monitoring Page</h1>
        </Container>
    </Container>
  )
}

export default UserProfileBar