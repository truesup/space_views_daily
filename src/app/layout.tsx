import type { Metadata } from 'next'
import { Major_Mono_Display, VT323, Bungee_Hairline } from 'next/font/google'
import './globals.css'

const majorMono = Bungee_Hairline({
    weight: '400',
    variable: '--font-major',
})

const vt323 = VT323({
    weight: '400',
    variable: '--font-vt',
})

export const metadata: Metadata = {
    title: 'Space Views Daily',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="bg-black">
            <body
                className={`${majorMono.variable} ${vt323.variable} antialiased bg-black w-dvw h-dvh`}
            >
                {children}
            </body>
        </html>
    )
}
