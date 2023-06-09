import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { useNextCssRemovalPrevention } from '@/CSSProtection';

export default function App({ Component, pageProps }: AppProps) {
  useNextCssRemovalPrevention();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
