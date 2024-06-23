import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import styles from "./graph.module.css"

const Graph = () => {
  return (
    <Container sx={{marginTop: "20px", padding: "10px", backgroundColor: "white"}}>
<Box sx={{ display:"flex", justifyContent: "space-evenly", fontWeight: 'bold', fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"}}}>
    <Typography variant='body'>Friday</Typography>
    <Typography variant='body'>Saturday</Typography>
    <Typography variant='body'>Sunday</Typography>
    <Typography variant='body'>Monday</Typography>
    <Typography variant='body'>Yesterday</Typography>
    <Typography variant='body'>Today</Typography>
</Box>
<Box sx={{display: "flex", justifyContent: "center", marginTop: '12px'}}>
<img src={"/images/Line2.png"} width={800} height={1} className={styles.lineImg} />
</Box>
<Box sx={{padding: "10px", display: "flex", justifyContent: "center", position: "relative"}}>
<img src={"/images/Rectangle12.png"} className={styles.chartImg} />
<img src="/images/Line1.png" alt="" className={styles.Line2Img} />
<img src="/images/vector.png" alt="" className={styles.vectorImg} />
<ul>
    <li className={styles.chartValue1}>300 <br /> bpm</li>
    <li className={styles.chartValue2}>100 <br /> bpm</li>
    <li className={styles.chartValue3}>0 <br /> bpm</li>
</ul>
</Box>
<Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row', md: "row", lg: "row"}, justifyContent: "center", marginTop: "10px"}}>
        <Typography style={{margin:"10px", width: "300px", fontWeight: "bold", fontSize: "18px"}}>Heart Rate History</Typography>
        <Box sx={{marginTop: "10px", display: "flex", justifyContent: 'center', gap: "10px"}}>
        <Button sx={{borderRadius: "15px", backgroundColor: "#42A9F4", width: {xs: "90px", sm: "100px", md: "110px", lg: "120px"}, color: "white", height: "30px", fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"}}}>This Week</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: {xs: "100px", sm: "110px", md: "110px", lg: "120px"}, color: "grey", height: "30px", fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"}}}>This Month</Button>
        <Button sx={{borderRadius: "15px", backgroundColor: "whitesmoke", width: {xs: "90px", sm: "100px", md: "110px", lg: "120px"}, color: "grey", height: "30px", fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "16px"}}}>Today</Button>
        </Box>
        </Box>
</Container>

  )
}

export default Graph