// Render when the navigated route is not found
// Auto wrap the page with the ErrorBoundary component
export default function NotFound() {
    return ( 
        <div>
            <p>404 Not Found</p>
            <p>Resource not Found</p>
        </div>
    );
};