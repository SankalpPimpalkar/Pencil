'use client'
import { SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const { user, isSignedIn } = useUser()

    return (
        <div className='w-full bg-base-100 shadow-sm sticky top-0'>
            <div className="navbar w-full max-w-5xl mx-auto px-6">
                <div className="flex-1">
                    <Link href={'/feed'} className="text-xl font-bold text-neutral-600">Pencil</Link>
                </div>

                <div className='flex items-center gap-3'>
                    {
                        isSignedIn ? (
                            <Link href={'/account/profile'} className="avatar">
                                <div className="size-10 rounded-full select-none">
                                    <img src={user.imageUrl} draggable={'false'} />
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
        </div>
    )
}
