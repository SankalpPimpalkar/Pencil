import Navbar from "@/components/ui/feed/Navbar";

export default function FeedLayout({ children }) {
    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full max-w-5xl mx-auto px-4">
                {children}
            </div>
        </div>
    )
}