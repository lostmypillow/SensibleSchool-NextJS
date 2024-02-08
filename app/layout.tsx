import type { Metadata } from "next";
import { noto } from '@/app/ui/fonts'
import '@/app/ui/globals.css';
import { NavBar } from '@/app/ui/navbar'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
       
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
       
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <ColorSchemeScript />
      </head>
    <body className={`${noto.className} antialiased pt-16 h-dvh flex flex-col`}>
    <MantineProvider>
      <NavBar />
        {children}
        </MantineProvider>
      </body>

      
  
    </html>
  );
}
