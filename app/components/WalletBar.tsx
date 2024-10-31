import React from 'react'

export default function WalletBar() {
    return (
        <div className='fixed bottom-0 bg-green-900 w-screen h-8'>
            <div className='flex flex-row z-50 space-x-2 pl-5'>
                <div className='rounded-b-2xl bg-green-600 w-36 text-center text-green-900'>Wallet 1</div>
                <div className='rounded-b-2xl bg-green-700 w-36 text-center text-green-300'>Wallet 2</div>
                <div className='rounded-b-2xl bg-green-700 w-12 text-center text-green-200'>+</div>
            </div>
        </div>
    )
}
