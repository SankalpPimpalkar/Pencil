import React from 'react'

export default function Footer() {
    return (
        <footer className='shadow-sm sm:footer-horizontal bg-neutral text-neutral-content'>
            <div className="footer sm:footer-horizontal items-center justify-between p-4 w-full container mx-auto">
                <aside className="grid-flow-col items-center tracking-wider">
                    <p>Made with ❤️ by Sankalp Pimpalkar</p>
                </aside>

                <ul className="dark:text-gray-300 text-gray-800 flex items-center gap-4">
                    <li className="flex items-center gap-2">
                        <img className="w-5 dark:invert" src="/github.png" alt="github" />
                        <a className="hover:underline" target="_blank" href={'#'}>
                            Github
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <img className="w-6" src="/instagram.png" alt="instagram" />
                        <a className="hover:underline" target="_blank" href={'#'}>
                            Instagram
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <img className="w-5" src="/linkedin.png" alt="linkedin" />
                        <a className="hover:underline" target="_blank" href={'#'}>
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
