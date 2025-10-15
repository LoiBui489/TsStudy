"use client";

import { useEffect, useState } from "react";

export default function User() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // This is fetching on the CC
    // On the SC is the same, but no need useEffect, useState

    // Some tips:
    // - When facing SequentialDataFetching (one fetch need info from another), user <Suspense> to wrap the after fetching
    // This help not to block the UI when the after fetching is in progress
    // - ParallelDataFetching (fetching multiple data at the same time), init the fetching function first then use Promise.all()
    // const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
    // As above, instead of waiting 1s for fetching user then 1s for fetching posts, it is faster to fetch them at the same time
    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) {
                    throw new Error("Failed to load User");
                }
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [])

    return (
        <div className="container w-5/6">
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul className="w-1/2">
                {
                    users.map((user) => (
                        <li key={user.id} className="p-4 m-4 bg-gray-700 shadow-md rounded-lg text-white">
                            <div className="font-bold">{user.name}</div>
                            <div className="text-sm">
                                <div>{user.username}</div>
                                <div>{user.email}</div>
                                <div>{user.phone}</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};
