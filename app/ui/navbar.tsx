'user client'
import Link from "next/link";
import { Text } from "@mantine/core";
import Image from "next/image";
export function NavBar() {
    return (
        <div className="flex flex-row flex-nowrap items-center justify-between p-4 shrink-0 fixed h-16 max-h-16 w-full top-0 text-xl">

            <div id="NavLeft" className="flex items-center justify-center">
                <Link href="/" className="font-medium text-indigo-900 dark:text-blue-900 hover:underline hover:decoration-sky-500" style={{ textDecoration: 'none' }}>
                    Home
                </Link>
            </div>

            <div id="NavMid" className="flex grow-0 items-center justify-center">
                <div className="font-black">
                    <Image src="/computer.png" width={28} height={28} alt="text"></Image>
                </div>
            </div>

            <div id="NavLeft" className="flex items-center justify-center">
                <Link href="/login" className="font-medium text-indigo-900 dark:text-blue-900 hover:underline hover:decoration-sky-500" style={{ textDecoration: 'none' }}>
                    Login
                </Link>
            </div>

        </div>
    );
}