import React from 'react'
import user from '../_data/userDataSample.json'

export default function WalletBar() {
    return (
        <div className='fixed bottom-0 bg-three w-screen h-8'>
            <div className='flex flex-row z-50 space-x-2 pl-5'>
                {user.wallets.map((wallet,i) => (
                    <button
                        className={`rounded-b-2xl w-36 text-center text-four 
                        ${i===user.selectedWallet ? 'bg-one' : 'bg-two'}`
                    }>{wallet.walletName}</button>
                ))}
                <div className='rounded-b-2xl bg-two w-12 text-center text-four'>+</div>
            </div>
        </div>
    )
}
