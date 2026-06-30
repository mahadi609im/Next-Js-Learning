import { Geist, Geist_Mono, Open_Sans, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar';
import CartContextProvider from '@/context/CartContextProvider';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Next Food',
    template: '%s | Next Food',
  },
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  description: 'Modern Next js Learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <header>
          <Navbar></Navbar>
        </header>
        <main className="p-6">
          <CartContextProvider>{children}</CartContextProvider>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
