import Feed from '@/components/ui/feed/Feed'
import React from 'react'

export default function FeedPage() {
    return (
        <div className='w-full h-full max-h-dvh'>
            <section className='col-span-5 lg:col-span-3 w-full max-w-5xl mx-auto px-3'>
                <Feed />
            </section>
        </div>
    )
}
