'use client';

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    // On Client Component
    // To check signed in
    // idLoaded, userId
    const authObj = useAuth();
    // isLoaded, isSignedIn
    const userObj = useUser();
    // console.log(authObj, userObj);

    return (
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={() => { setCount(count + 1); }}>Increace</button>
        </div>
    );
};
