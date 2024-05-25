import { SignUp } from "@clerk/nextjs";

import { IconUrlHandler, DownloadedIconHandler  } from "@/components/LogoHandler";

import styles from './sign-up.module.css'

export default function Page() {
  return (
    <>
      <main className={styles.mainWrapper}>
        <DownloadedIconHandler width={320} height={320} />
        <div className={styles.signInWrapper}>
          <h2 className={styles.header}>Najświeższe wieści ze świata</h2>
          <p className={styles.p}>Dołącz już dziś.</p>
          <SignUp />
          <p className={styles.pFooter}>
            Rejestrując się, zgadzasz się na <span className={styles.link}>Warunki korzystania</span> i <span className={styles.link}>Politykę prywatności</span>, łącznie z Polityką ciasteczek.
          </p>
        </div>
      </main>
    </>
  )
}