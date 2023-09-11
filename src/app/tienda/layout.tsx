import Navbar from "@/components/Navbar";
import Link from "next/link";
import {Metadata} from "next";
import Filter from "@/components/Filter";
import {ChakraProvider} from "@chakra-ui/react";
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
            <ChakraProvider>
            <Filter />
            </ChakraProvider>
            {children}
        </div>
    )
}