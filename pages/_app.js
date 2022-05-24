import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

function Monyify({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default Monyify;
