import {Metadata} from "next";
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