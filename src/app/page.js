"use client"
import Login from "@/app/login/page";
import styles from "./page.module.css";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography:{
    fontFamily: "Montserrat",
  }
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <main className={styles.main}>
    <Login />
    </main>
    </ThemeProvider>
  );
}
