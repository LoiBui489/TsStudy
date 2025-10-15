'use client';

import { useFormStatus } from "react-dom";

export default function Submit( { title }: { title: string } ) {
    // pending: true when the form is submitting
    // data: form's submitted data
    // method: form's method
    // action: a reference to the form's action function
    const { pending } = useFormStatus();

    return (
        <button type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={pending}>
            { pending ? "Loading..." : title }
        </button>
    );
};
