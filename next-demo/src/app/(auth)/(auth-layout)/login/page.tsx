'use client';
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [loggingIn, setLoggingIn] = useState(false);
    const handleClick = () => {
        setLoggingIn(true);
        setTimeout(() => {
            setLoggingIn(false);
            // Go to
            router.push("/");
            // Work same as replace in Link tag
            // router.replace("/");
            // Go back 1 in history stack
            // router.back();
            // Go forward 1 in history stack
            // router.forward();
        }, 2000);
    }

    // const random = Math.ceil(Math.random() * 10);
    // if (random > 5) throw new Error("Something went wrong");

    return (<>
        <Loading params={{ loggingIn }} />
        <h1>Login</h1>
        <button disabled={loggingIn} className={loggingIn ? "cursor-not-allowed" : ""} onClick={handleClick}>Login</button>
    </>);
};