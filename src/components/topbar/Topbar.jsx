import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Topbar = () => {
  return (
    <Container sx={{maxWidth: "100%", fontWeight: 700, height: "70px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px", cursor: "pointer"}}>
        <Image src={"/images/searchicon.png"} width={24} height={24} />
        <Image src={"/images/notification.png"} width={24} height={24} />
        <Image src={"/images/useravatar.png"} width={28} height={28} />
        <span>LoginName</span>
    </Container>
  )
}

export default Topbar