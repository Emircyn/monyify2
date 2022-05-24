import { HiHome, HiPaperAirplane } from 'react-icons/hi';
import { BsFillMicFill } from 'react-icons/bs';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <>
      <main>
        <div className='fixed w-24 h-screen px-5 py-6 flex flex-col items-center'>
          <div className='text-red-400 text-3xl'>
            <HiPaperAirplane />
          </div>
          <div className='mt-12'>
            <nav className='flex flex-col items-center gap-10'>
              <div>
                <Link href='/'>
                  <a className='text-2xl text-gray hover:text-white transition-colors duration-300'>
                    <HiHome />
                  </a>
                </Link>
              </div>
              <div>
                <Link href='/'>
                  <a className='text-2xl text-gray hover:text-white transition-colors duration-300'>
                    <BsFillMicFill />
                  </a>
                </Link>
              </div>
              <div>
                <Link href='/'>
                  <a className='text-2xl text-gray hover:text-white transition-colors duration-300'>
                    <BsFillMicFill />
                  </a>
                </Link>
              </div>
              <div>
                <Link href='/'>
                  <a className='text-2xl text-gray hover:text-white transition-colors duration-300'>
                    <BsFillMicFill />
                  </a>
                </Link>
              </div>
              <div>
                <Link href='/'>
                  <a className='text-2xl text-gray hover:text-white transition-colors duration-300'>
                    <BsFillMicFill />
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
