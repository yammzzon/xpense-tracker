import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <nav className='bg-green-600 space-x-4'>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
        </nav>
    )
}
