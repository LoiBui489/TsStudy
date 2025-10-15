'use client';

// Render when a page throw and error when LOADING
// Auto wrap the page with the ErrorBoundary component
// The reset attempt to re-render the page
// If there are many error.tsx, the closest one will be used
// If there is any error, the closest ErrorBoundary will be used (See more in the wrap order)
export default function ErrorBoundary({ 
    error, reset 
}: { 
    error: Error,
    reset: () => void
}) {
    return (<>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
    </>)
};
