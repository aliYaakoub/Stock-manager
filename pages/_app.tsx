import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContextProvider } from '../config/Context'
import Modal from '../components/Modal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <Modal />
    </AppContextProvider>
  )
}

export default MyApp
