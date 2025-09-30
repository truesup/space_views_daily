import type { Metadata } from 'next'
import { Bungee_Hairline, Raleway } from 'next/font/google'
import './globals.css'

const majorMono = Bungee_Hairline({
    weight: '400',
    variable: '--font-major',
})

const raleway = Raleway({
    weight: '200',
    variable: '--font-raleway',
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
                className={`${majorMono.variable} ${raleway.variable} antialiased bg-black w-dvw h-dvh`}
            >
                {children}
            </body>
        </html>
    )
}
