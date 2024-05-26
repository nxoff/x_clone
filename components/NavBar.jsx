import '@/styles/navbar.css'

import Image from 'next/image'

import { DownloadedIconHandler } from './LogoHandler'

const NavBar = () => {
  return (
    <>
      <DownloadedIconHandler width={32} height={32} />
      <nav>
        <section>
          <Image src='/icons/home-icon.svg' alt='' width={42} height={42} />
          <span>Glowna</span>
        </section>
        <section>
          <Image src='/icons/search-icon.svg' alt='' width={42} height={42} />
          <span>Przegladaj</span>
        </section>
        <section>
          <Image src='/icons/bell-icon.svg' alt='' width={42} height={42} />
          <span>Powiadomienia</span>
        </section>
        <section>
          <Image src='/icons/mail-icon.svg' alt='' width={42} height={42} />
          <span>Wiadomosci</span>
        </section>
        <section>
          <Image src='/icons/lists-icon.svg' alt='' width={42} height={42} />
          <span>Listy</span>
        </section>
        <section>
          <Image src='/icons/archive-icon.svg' alt='' width={42} height={42} />
          <span>Zakladki</span>
        </section>
        <section>
          <Image src='/icons/groups-icon.svg' alt='' width={42} height={42} />
          <span>Grupy dyskusyjne</span>
        </section>
        <section>
          <Image src='/icons/profile-icon.svg' alt='' width={42} height={42} />
          <span>Profil</span>
        </section>
        <section>
          <Image src='/icons/options-icon.svg' alt='' width={42} height={42} />
          <span>Wiecej</span>
        </section>
      </nav>
    </>
  )
}

export default NavBar
