import Feed from '@/components/ui/feed/Feed'
import Sidebar from '@/components/ui/feed/Sidebar'
import React from 'react'

export default function FeedPage() {
    return (
        <div className='w-full h-full grid grid-cols-5 max-h-dvh md:divide-x divide-neutral-300'>
            <section className='col-span-5 md:col-span-3 py-2'>
                <Feed />
            </section>
            <section className='hidden md:block col-span-2 py-2'>
                <Sidebar />
            </section>
        </div>
    )
}
