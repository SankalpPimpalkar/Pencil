import React from 'react'

export default function Feed() {
    return (
        <div className='space-y-2 divide-y divide-neutral-300'>
            {
                [1, 2, 3, 4, 5, 6].map(blog => (
                    <div className='flex items-center p-2 gap-3 cursor-pointer'>
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
    )
}
