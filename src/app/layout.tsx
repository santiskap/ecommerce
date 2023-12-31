import './globals.css'
import type { Metadata } from 'next'
import {Inter, Roboto} from 'next/font/google'
import Navbar from "@/components/Navbar"
import {ChakraProvider} from "@chakra-ui/react";
import Navuser from "@/components/NavUsuario";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proyecto en Next',
  description: 'Generated by create next app',
}
const roboto = Roboto(
    {
        weight: ["300", "400"],
        style: ["normal", "italic"],
        subsets: ["latin"],
    }
)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

      <div className={roboto.className}>
          <ChakraProvider>

              <Navuser />
          </ChakraProvider>
          <Navbar></Navbar>
          <div className="my-10 mx-5">
              {children}
          </div>

      </div>
      </body>
    </html>
  )
}
