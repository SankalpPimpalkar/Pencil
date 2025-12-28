import Navbar from "@/components/ui/feed/Navbar";

export default function FeedLayout({ children }) {
    return (
        <div className="w-full">
            <Navbar />
            <div className="container mx-auto py-4">
                {children}
            </div>
        </div>
    )
}