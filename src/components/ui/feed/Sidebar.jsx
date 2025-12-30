import React from 'react'

const topics = [
    'World News',
    'Business & Economy',
    'Education',
    'Health & Wellness',
    'Science & Innovation',
    'Environment & Climate',
    'Politics & Governance',
    'Culture & Society',
    'Travel & Lifestyle',
    'Sports',
    'Entertainment',
    'Personal Development'
]


export default function Sidebar() {
    return (
        <div className="p-4">
            <section>
                <h3 className="font-semibold text-neutral-500 text-base mb-3">
                    Recommended Topics
                </h3>

                <ul className="flex flex-wrap gap-2">
                    {topics.map((topic, index) => (
                        <li
                            key={index}
                            className="px-3 py-2 rounded-lg text-xs font-medium text-neutral-700 
                    bg-neutral-200 hover:bg-neutral-300 cursor-pointer
                    transition-colors"
                        >
                            {topic}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
