import Link from "next/link";
import { Button } from "@mantine/core";
export default function Home() {
  return (
    
    <Button variant="light" radius="xl" size="compact-xs" component={Link} href="/lobby">LOBBY</Button>
      
    
      );
}
