import { SignIn } from "@clerk/nextjs";

import { IconUrlHandler, DownloadedIconHandler  } from "@/components/LogoHandler";

import '@/styles/auth.css'

export default function Page() {
  return (
    <>
      <main className='main-wrapper'>
        <DownloadedIconHandler width={320} height={320} />
        <div className='auth-wrapper'>
          <h2>Najświeższe wieści ze świata</h2>
          <p>Dołącz już dziś.</p>
          <SignIn />
          <footer>
            Rejestrując się, zgadzasz się na <span>Warunki korzystania</span> i <span>Politykę prywatności</span>, łącznie z Polityką ciasteczek.
          </footer>
        </div>
      </main>
    </>
  )
}