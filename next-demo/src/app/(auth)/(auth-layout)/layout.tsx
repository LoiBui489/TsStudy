'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
// import { useState } from "react";

const navLinks = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' }
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();
    // const [input, setInput] = useState('');
    
    return (
        <>
            {/* 
                When navigate to the Register page, the input won't be cleared
                The layout.tsx only mount new loading page to the {children}, because only it's changed
                The other elements is untouched, the state is preserved  
            */}
            {/* <div>
                <label htmlFor="testInput">Test Input:&nbsp;</label>
                <input id="testInput" value={input} onChange={(e) => setInput(e.target.value)} />
            </div> */}
            
            <h1>Login and Register</h1>
            {navLinks.map((link) => {
                const isActive = pathName === link.href;

                return <Link key={link.name} href={link.href} 
                            className={isActive ? "font-semibold text-black mr-4 no-underline" 
                                                : "font-medium text-gray-500 mr-4 no-underline"}>{link.name}
                        </Link>;
            })}
            {children}
        </>
    )
};
