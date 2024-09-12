import Navbar from "@/components/Navbar";
import Link from "next/link";
import {Metadata} from "next";
import {ChakraProvider} from "@chakra-ui/react";
import Navbaruser from "@/components/Navbaruser";
export const metadata: Metadata = {
    title: 'Tienda oficial',
    description: 'Programado con Next',
}


export default function TiendaLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (

        <div>
            {children}
        </div>
    )
}