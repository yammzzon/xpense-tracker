import React from 'react'
import Image from 'next/image'
import WalletBar from '../components/WalletBar';

export default function Dashboard() {
    return (
        <main className='pt-6 h-screen bg-green-600'>
            <div className='flex justify-center items-center px-5 space-x-5 h-1/6 py-2'>
                <img src="/happy.png" className='rounded-full h-full' />
                <div className='flex bg-green-700 rounded-xl w-full h-full justify-between items-center px-5'>
                    <h1>$5000</h1>
                    <button className='bg-green-400 rounded-xl h-1/2 px-5'>Add</button>
                </div>
                <img src="/stack.png" className='rounded-full h-full' />
            </div>
            <WalletBar />
        </main>
    );
}
