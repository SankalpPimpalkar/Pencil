import Link from 'next/link'
import React from 'react'

const trendingPosts = [
    {
        id: 1,
        title: 'Why React Server Components Matter',
        image:
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
        slug: '/feed/react-server-components',
    },
    {
        id: 2,
        title: 'AI Tools Every Developer Should Know',
        image:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
        slug: '/feed/ai-tools',
    },
    {
        id: 3,
        title: 'Design Trends Shaping 2025',
        image:
            'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
        slug: '/feed/design-trends',
    },
    {
        id: 4,
        title: 'How Startups Validate Ideas Fast',
        image:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
        slug: '/feed/startup-ideas',
    },
]

export default function Trending() {
    return (
        <aside className="space-y-4">
            <h2 className="text-lg">Trending</h2>

            <ul className="space-y-4">
                {trendingPosts.map((post, index) => (
                    <li key={post.id} className="flex gap-3 items-center">
                        <span className="text-2xl font-bold text-neutral-300">
                            {index + 1}
                        </span>

                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-12 h-12 rounded-md object-cover"
                        />

                        <Link
                            href={post.slug}
                            className="text-sm font-sans tracking-normal font-semibold hover:link line-clamp-2"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
