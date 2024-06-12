import { Typography } from "@mui/material"
import styles from "./login.module.css"
import Image from 'next/image'
import Link from 'next/link'


const login = () => {
  return (
    <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
            <div className={styles.logo}>
            <Image src={"/images/mainlogo.png"} width={80} height={70} />
            </div>
        <div className={styles.subContainer}>
            <h1 className={styles.text}>Are you a</h1>
            <div className={styles.buttons}>
                <button className={styles.patientButton}>Patient</button>
                <button className={styles.clinicianButton}>Clinician</button>
            </div>
            <div className={styles.hrLine}></div>
            <form action="">
                <div className={styles.authbuttons}>
                    <Link href="/">
                    <p className={styles.loginBtn}>Login</p>
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
                <Link href={"/home"}>
                    <Image className={styles.arrowLeftImg} src={"/images/arrowLeft.png"} width={30} height={30} />
                </Link>
            </form>
            <div className={styles.hrLine} id={styles.hrline}></div>
            <div className={styles.extraLoginOptions}>
                <p>Login via</p>
                <span className={styles.extraLoginImg}>
                <Image src="/images/iphone.png" width={20} height={20} />
                <Image src="/images/google.png" width={20} height={20}/>
                </span>
            </div>
        </div>
        </div>
        <div className={styles.leftSideBanner}>
            <Image src="/images/Rectangle 28.png" width={450} height={623}/>
        </div>
    </div>
  )
}

export default login