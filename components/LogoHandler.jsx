import Image from "next/image"
const X_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg'

export const IconUrlHandler = ({ width, height }) => {
  return <Image src={X_LOGO_URL} alt="XLOGO" width={width} height={height} />
}
export const DownloadedIconHandler = ({ width, height }) => {
  return <Image src={"/x-logo-png.png"} alt="XLOGO" width={width} height={height} />
}
