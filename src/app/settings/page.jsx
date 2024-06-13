import { Box, Container } from '@mui/material'


const page = () => {
  return (
    <Box sx={{maxWidth: "100%", height: "100vh", display: "flex", backgroundColor: "whitesmoke"}}>
      <Sidebar />
      <Container sx={{paddingTop: "10px"}}>
      <Topbar />
      <UserProfileBar />
      </Container>
    </Box>
  )
}

export default page