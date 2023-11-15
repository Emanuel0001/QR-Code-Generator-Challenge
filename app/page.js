import Image from 'next/image'
import QrCode from '../public/images/qr-code.png';

export default function Home() {
  return (
    <main className='container-landing-page'>
       <div className='qr-code-component-iux'>
            <div className='container-code-qr'>
              <Image src={QrCode} alt="qr code"></Image>
            </div>
            <div className='container-text'>
              <div className='centralize-text'>
                <h1>Improve your front-end skills by building projects</h1>
                <h2>Scan the QR code to visit frontend Mentor and take your coding skills to the next level</h2>
              </div>
            </div>
       </div>
    </main>
  )
}
