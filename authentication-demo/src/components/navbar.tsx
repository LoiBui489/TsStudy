import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-10 left-0 right-0 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold">Authentication Demo</h1>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <SignedOut>
                            <SignInButton mode="modal" />
                            <SignUpButton mode="modal" />
                            {/* For custom styling */}
                            {/* <SignInButton>
                                <button className="px-2 py-1 text-sm border">Sign In</button>
                            </SignInButton> */}
                        </SignedOut>
                        <SignedIn>
                            <Link href={"/user-profile"}>Profile</Link>
                            <SignOutButton />
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
};
