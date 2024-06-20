import { Typography } from "@mui/material"
import styles from "./login.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"


const login = () => {
    const [isClinician, setClinician] = useState(false)

  return (
    <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
            <div className={styles.logo}>
            <Image src={"/images/mainlogo.png"} width={80} height={70} />
            </div>
        <div className={styles.subContainer}>
            <Typography className={styles.text}>Are you a</Typography>
            <div className={styles.buttons}>
                <button className={styles.patientButton} onClick={() => setClinician(false)}>Patient</button>
                <button className={styles.clinicianButton} onClick={() => setClinician(true)}>Clinician</button>
            </div>
            <div className={styles.hrLine}></div>
            <form action="">
                <div className={styles.authbuttons}>
                    <Link href="/">
                    <Typography className={styles.loginBtn}>Login</Typography>
                    </Link>
                    <Link href="/signup">
                    <button className={styles.signupBtn}>Signup</button>
                    </Link>
                </div>
                <div className={styles.inputsContainer}>
                    <input type="text" name='username' id='username' placeholder='Username' required />
                </div>
                <div className={styles.inputsContainer}>
                    <input type="text" name='password' id='password' placeholder='password' required />
                    {/* icon mui */}
                </div>
                <Link href={isClinician == true ? "/home" : "/patientProfilepage"}>
                    <Image className={styles.arrowLeftImg} src={"/images/arrowLeft.png"} width={30} height={30} />
                </Link>
            </form>
            <div className={styles.hrLine} id={styles.hrline}></div>
            <div className={styles.extraLoginOptions}>
                <Typography>Login via</Typography>
                <span className={styles.extraLoginImg}>
                <Image src="/images/iphone.png" width={20} height={20} />
                <Image src="/images/google.png" width={20} height={20}/>
                </span>
            </div>
        </div>
        </div>
        <div className={styles.leftSideBanner}>
            <img className={styles.sideLogo} src="/images/Rectangle 28.png" />
        </div>
    </div>
  )
}

export default login