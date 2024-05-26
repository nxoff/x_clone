import '@/styles/navbar.css'

import Image from 'next/image'

import { DownloadedIconHandler } from './LogoHandler'

const HOME_ICON = ['/unfilled-icons/home-unfilled.svg', '/icons/home-icon.svg']
const SEARCH_ICON = ['/unfilled-icons/search-unfilled.svg', '/icons/search-icon.svg']
const BELL_ICON = ['/unfilled-icons/bell-unfilled.svg', '/icons/bell-icon.svg']
const MAIL_ICON = ['/unfilled-icons/mail-unfilled.svg', '/icons/mail-icon.svg']
const LISTS_ICON = ['/unfilled-icons/lists-unfilled.svg', '/icons/lists-icon.svg']
const ARCHIVE_ICON = ['/unfilled-icons/archive-unfilled.svg', '/icons/archive-icon.svg']
const GROUPS_ICON = ['/unfilled-icons/groups-unfilled.svg', '/icons/groups-icon.svg']
const PROFILE_ICON = ['/unfilled-icons/profile-unfilled.svg', '/icons/profile-icon.svg']
const OPTIONS_ICON = ['/unfilled-icons/options-unfilled.svg', '/icons/options-icon.svg']

const NavBar = () => {
  return (
    <section className='navbar'>
      <nav>
        <section>
          <DownloadedIconHandler width={32} height={32} />
        </section>
        <section>
          <Image src={HOME_ICON[0]} alt='' width={32} height={32} />
          <span>Glowna</span>
        </section>
        <section>
          <Image src={SEARCH_ICON[0]} alt='' width={32} height={32} />
          <span>Przegladaj</span>
        </section>
        <section>
          <Image src={BELL_ICON[0]} alt='' width={32} height={32} />
          <span>Powiadomienia</span>
        </section>
        <section>
          <Image src={MAIL_ICON[0]} alt='' width={32} height={32} />
          <span>Wiadomosci</span>
        </section>
        <section>
          <Image src={LISTS_ICON[0]} alt='' width={32} height={32} />
          <span>Listy</span>
        </section>
        <section>
          <Image src={ARCHIVE_ICON[0]} alt='' width={32} height={32} />
          <span>Zakladki</span>
        </section>
        <section>
          <Image src={GROUPS_ICON[0]} alt='' width={32} height={32} />
          <span>Grupy dyskusyjne</span>
        </section>
        <section>
          <Image src={PROFILE_ICON[0]} alt='' width={32} height={32} />
          <span>Profil</span>
        </section>
        <section>
          <Image src={OPTIONS_ICON[0]} alt='' width={32} height={32} />
          <span>Wiecej</span>
        </section>
      </nav>
      <div className="nav-create-post-button">
        <span>Opublikuj wpis</span>
      </div>
    </section>
  )
}

export default NavBar
