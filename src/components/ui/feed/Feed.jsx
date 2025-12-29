import Link from 'next/link'
import React from 'react'

const categories = [
    'Technology',
    'Design',
    'Development',
    'Startups',
    'Productivity',
    'Business',
    'Marketing',
    'AI',
    'Tutorials',
    'Opinions',
]

const blogs = [
    {
        id: 1,
        title: 'Building Modern UIs with React',
        excerpt:
            'Learn best practices for building scalable, maintainable user interfaces using modern React patterns.',
        image:
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
        slug: '/feed/react-ui',
    },
    {
        id: 2,
        title: 'Design Systems That Scale',
        excerpt:
            'How to create and maintain design systems that grow with your product and team.',
        image:
            'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
        slug: '/feed/design-systems',
    },
    {
        id: 3,
        title: 'AI in Everyday Products',
        excerpt:
            'Exploring how artificial intelligence is quietly powering the apps we use every day.',
        image:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        slug: '/feed/ai-products',
    },
    {
        id: 4,
        title: 'Startup Lessons from Failed MVPs',
        excerpt:
            'Hard-earned lessons from startup MVPs that didn’t survive—and what to do differently.',
        image:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        slug: '/feed/startup-mvps',
    },
    {
        id: 5,
        title: 'Developer Productivity Hacks',
        excerpt:
            'Simple habits and tools that can dramatically improve your daily developer workflow.',
        image:
            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        slug: '/feed/productivity',
    },
]

export default function Feed() {
    return (
        <div className="space-y-6">
            {/* Categories */}
            <ul className="flex gap-3 flex-wrap">
                {categories.map((category) => (
                    <li
                        key={category}
                        className="badge badge-ghost btn text-neutral-400"
                    >
                        {category}
                    </li>
                ))}
            </ul>

            {/* Blog Feed */}
            <section>
                <ul className="divide-y divide-neutral-200">
                    {blogs.map((blog) => (
                        <li
                            key={blog.id}
                            className="flex flex-col sm:flex-row gap-3 py-4"
                        >
                            <div className="flex-1 tracking-normal">
                                <Link
                                    href={blog.slug}
                                    className="text-xl hover:link font-sans font-bold"
                                >
                                    {blog.title}
                                </Link>
                                <p className="text-sm text-neutral-400 pt-2 font-sans font-medium">
                                    {blog.excerpt}
                                </p>
                            </div>

                            <img
                                className="aspect-video w-full sm:max-w-40 md:max-w-40 rounded-lg object-cover"
                                src={blog.image}
                                alt={blog.title}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
