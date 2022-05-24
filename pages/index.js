import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
//import SpotifyWebApi from 'spotify-web-api-js';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin');
    },
  });

  // Loading animation...
  if (status === 'loading') {
    return <h1 className='text-white'>Loadd</h1>;
  }

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} - Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
      <div className='bg-black text-white h-screen flex flex-col items-center justify-center'>
        <div className='py-10'>
          <h1 className='text-center text-3xl sm:text-4xl lg:text-4xl'>
            <span className='text-gray-500'>Hi, </span>
            <span className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text'>
              {session.user.name}
            </span>
            <span>👋</span>
          </h1>
        </div>

        <div className='flex flex-row flex-wrap gap-5 mt-8'>
          <span className='flex flex-col items-center group gap-2'>
            <Image
              src={session.user.image}
              height={250}
              width={250}
              objectFit='contain'
              alt={session.user.name}
              draggable='false'
              className='rounded h-[200px] w-[200px] border-2 border-transparent group-hover:border-2 group-hover:border-gray-300'
            />
          </span>
        </div>

        <button
          onClick={() => signOut()}
          className='border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400'
        >
          Log Out
        </button>
      </div>
    </>
  );
}
