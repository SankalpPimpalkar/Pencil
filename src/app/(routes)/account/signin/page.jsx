import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex min-h-screen">

            {/* Left: Dark blue-black background with greetings */}
            <div className="hidden md:flex w-1/2 bg-blue-900 text-white items-center justify-center p-8">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-extrabold">
                        Welcome Back!
                    </h1>
                    <p className="text-xl font-light">
                        Sign in and explore your world with Pencil.
                    </p>
                </div>
            </div>

            {/* Right: Clerk SignIn form */}
            <div className="flex w-full md:w-1/2 justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <SignIn routing="hash" appearance={{ theme: 'simple' }} />
                </div>
            </div>

        </div>
    )
}
