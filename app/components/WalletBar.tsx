import React from 'react'

export default function WalletBar() {
    return (
        <div className='fixed bottom-0 bg-three w-screen h-8'>
            <div className='flex flex-row z-50 space-x-2 pl-5'>
                <div className='rounded-b-2xl bg-one w-36 text-center text-five'>Wallet 1</div>
                <div className='rounded-b-2xl bg-two w-36 text-center text-four'>Wallet 2</div>
                <div className='rounded-b-2xl bg-two w-12 text-center text-four'>+</div>
            </div>
        </div>
    )
}
