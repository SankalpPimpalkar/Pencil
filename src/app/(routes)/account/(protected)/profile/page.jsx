'use client';
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const { user, isLoaded } = useUser()
    const router = useRouter()
    if (!isLoaded) return null

    return (
        <div className="w-full space-y-1 px-0 py-2 sm:py-0 sm:border-x border-neutral-300 divide-y divide-neutral-300">
            <section className="px-3 sm:p-4 space-y-4">
                {/* Top Row */}
                <div className="flex items-center gap-12 lg:gap-14">
                    {/* Avatar */}
                    <img
                        className="rounded-full size-24 sm:size-32 lg:size-40 shadow border border-neutral-300"
                        src={user.imageUrl}
                        alt={user.fullName ?? 'Profile'}
                    />

                    {/* Stats (right side always) */}
                    <div className="flex gap-12 sm:gap-10 lg:gap-8">
                        {['Blogs', 'Followers', 'Following'].map((label, i) => (
                            <span key={i} className="text-start">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-600">
                                    99
                                </h2>
                                <p className="text-xs sm:text-sm font-medium text-neutral-500">
                                    {label}
                                </p>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="space-y-1 pb-3 sm:pb-1">
                    <h5 className="text-sm sm:text-base font-semibold text-neutral-600">
                        {user.fullName}
                    </h5>

                    <p className="text-xs sm:text-sm font-medium text-neutral-400 max-w-xl">
                        Software developer focused on building scalable, maintainable
                        systems. Passionate about problem-solving, performance, and
                        continuous improvement.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-2 pt-3 w-full justify-center">
                        <button onClick={() => router.push('/account/profile/edit')} className="btn w-full sm:btn-wide rounded-md">
                            Edit Profile
                        </button>
                        <button onClick={() => router.push('/account/settings')} className="btn w-full sm:btn-wide  rounded-md">
                            Settings
                        </button>
                    </div>
                </div>
            </section>

            <section className='px-3 sm:p-4 space-y-3'>
                <h4 className='font-semibold text-neutral-600'>
                    Blogs
                </h4>

                <div className='space-y-2 divide-y divide-neutral-300'>
                    {
                        [1, 2, 3, 4, 5, 6].map(blog => (
                            <div className='flex items-center py-3 gap-3 cursor-pointer'>
                                <div className='space-y-2'>
                                    <span className='flex items-center gap-2'>
                                        <img className='size-6 rounded-full' src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="" />
                                        <p className='font-medium text-neutral-500 text-xs md:text-xs'>
                                            Sankalp Pimpalkar
                                        </p>
                                    </span>
                                    <h3 className='text-base md:text-xl font-bold text-wrap w-full max-w-sm hover:underline'>
                                        Building Modern UIs with React: Best Practices for Scalable Frontend Design
                                    </h3>
                                    <p className='text-xs text-neutral-400 font-medium'>
                                        React has become the go-to library for building modern user interfaces due to its component-based architecture, reusability, and strong ecosystem....
                                    </p>
                                    <p className='font-semibold text-xs md:text-sm'>
                                        #systemdesign #reactjs
                                    </p>
                                </div>

                                <img className='w-full aspect-auto max-w-28 rounded-md' src="https://images.ctfassets.net/xqb1f63q68s1/1yIkc3D2qU9N4nChF1FFds/6e58c1a28f928beaee7935d3401250ff/React_Flask_thumbnail_new.png" alt="" />
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
