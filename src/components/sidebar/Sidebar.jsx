"use client"
import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Sidebar = () => {

  const pathname = usePathname();

  return (
    <Container sx={{width: {xs: "0px", sm: '150px', md: "180px", lg: "200px"}, backgroundColor: "white", paddingTop: "30px", position: "fixed", height: "100vh", display : {
      xs: "none",
      sm: "block",
      md: "block",
      lg: "block",
      xl: "block"
    }}} >
      <Box sx={{maxWidth: "200px", height: "200px", textAlign: "center"}}>
        <Link href={"/"}>
      <Image src={"/images/mainlogo.png"} width={80} height={80} />
        </Link>
      <Link href={"/home"}>
      <Typography sx={{marginTop: "10px", color:`${pathname === "/home" ? "black" : "grey"}`}}>Home</Typography>
      </Link>
      <Link href="/settings">
      <Typography sx={{marginTop: "10px", color:`${pathname === "/settings" ? "black" : "grey"}`}}>Settings</Typography>
      </Link>
      </Box>
    </Container>
  )
}

export default Sidebar