"use client"
import { Container, Typography } from '@mui/material'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Topbar = () => {
  const pathname = usePathname()
  return (
    <Container sx={{minWidth: "100%", fontWeight: 700, height: "60px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px", cursor: "pointer", }}>
        <Image src={"/images/searchicon.png"} width={24} height={24} />
        <Image src={"/images/notification.png"} width={24} height={24} />
        <Image src={"/images/useravatar.png"} width={28} height={28} />
        <Typography>LoginName</Typography>
    </Container>
  )
}

export default Topbar