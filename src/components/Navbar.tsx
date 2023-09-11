import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between p-5 items-center bg-blue-400 w-full text-white z-10">
            <h1><Link href={"/"}>Tienda</Link></h1>
            <ul className="flex gap-4">
                <li><Link href="./">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/tienda">Tienda</Link></li>
                <li><Link href="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}