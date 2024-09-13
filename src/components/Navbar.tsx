import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between p-5 items-center fixed bg-purple-800 w-full text-white">
            <h1><Link href={"./"}>Tienda</Link></h1>
            <ul className="flex gap-4">
                <li><Link href="/posts">Blog</Link></li>
            </ul>
        </nav>
    )
}