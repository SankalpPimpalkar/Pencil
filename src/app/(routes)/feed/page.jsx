import React from 'react'

export default function FeedPage() {
    return (
        <div className='grid grid-cols-5 divide-base-200 divide-x'>
            <section className='col-span-3 px-2'>
                For You
            </section>
            <section className='col-span-2 px-4 hidden md:block'>
                Trending
            </section>
        </div>
    )
}
