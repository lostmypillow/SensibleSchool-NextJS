'user client'
import Link from "next/link";
import { Text } from "@mantine/core";
import Image from "next/image";
import { Button } from "@mantine/core";
export function NavBar() {
    return (
        <div className="flex flex-row flex-nowrap items-center justify-between p-4 shrink-0 fixed h-16 max-h-16 w-full top-0 text-xl">

            <div id="NavLeft" className="flex items-center justify-center">
            <Button variant="light" radius="xl" component={Link} href="/">HOME</Button> 
            </div>

            <div id="NavMid" className="flex grow-0 items-center justify-center">
                <div className="font-black">
                    北科大TT
                </div>
            </div>

            <div id="NavLeft" className="flex items-center justify-center">
            <Button variant="light" radius="xl" component={Link} href="/login">LOGIN</Button> 
            </div>
            </div>

      
    );
}