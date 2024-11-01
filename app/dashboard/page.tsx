// import React, { useState } from 'react'
import WalletBar from '../components/WalletBar';
import user from '../_data/userDataSample.json'
import Image from 'next/image';

export default function Dashboard() {

    /* TO DO:
        0.
        1.default get parameter for dashboard
            www.link/dashboard?walletid=0
        2.how to submit
        
        or trash all that and just completely use server side.

    */
    const currWallet = user.wallets[user.selectedWallet];

    return (
        <main className='pt-6 h-screen bg-one'>
            {/* Profile + Balance + Add + Menu */}
            <div className='bg-one border border-three w-full fixed flex justify-center items-center px-5 md:px-10 lg:px-20 space-x-5 h-20 py-2'>
                <Image src="/happy.png" alt='user profile picture' className='rounded-full h-full' />
                <div className='flex bg-two rounded-xl w-full h-full justify-between items-center px-5'>
                    <p className='text-four text-2xl font-bold'>${currWallet.walletBalance}</p>
                    <button className='bg-three rounded-xl h-1/2 px-5 text-one'>Add</button>
                </div>
                <Image src="/more.png" alt="menu bar" className='h-full' />
            </div>
            {/* PANELS */}
            <div className='bg-one overflow-y-scroll grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:px-10 lg:px-20 pt-24 pb-12 px-5 '>
               <div className='bg-two rounded-xl w-full h-64'/>
               <div className='bg-two rounded-xl w-full h-64'/>
               <div className='bg-two rounded-xl w-full h-64'/>
               <div className='bg-two rounded-xl w-full h-64'/>
               <div className='bg-two rounded-xl w-full h-64'/>
            </div>
            <WalletBar />
        </main>
    );
}