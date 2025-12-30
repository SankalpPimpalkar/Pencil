'use client'
import { SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const { user, isSignedIn } = useUser()

    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar w-full container mx-auto">
                <div className="flex-1">
                    <Link href={'/feed'} className="text-xl font-bold text-neutral-800">Pencil</Link>
                </div>

                {
                    isSignedIn ? (
                        <Link href={'/account/profile'} className="avatar">
                            <div className="size-10 rounded-full">
                                <img src={user.imageUrl} />
                            </div>
                        </Link>
                    ) : (
                        <SignInButton>
                            <button className="btn w-full max-w-26 text-neutral">
                                SignIn
                            </button>
                        </SignInButton>
                    )
                }

            </div>
        </div>
    )
}
