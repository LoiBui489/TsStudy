// This is called Parallel Route. Can have multiple routes at the same time in on other route
// Its benefits
// Make code more manageable
// Independent route handling: Mean each Slot have its own loading, error state
// Ex: If the revenue route throw an error, we can display the error in the revenue slot without affecting the other Slot
// Sub-navigation: Each Slot can essentially function as a mini-app, can have its own navigation, state, ...
// Ex: The notification can toggle between 2 View "unread" and "read"

export default function DashboardLayout({ 
    children,
    notification,
    revenue,
    user,
    login
}: { 
    children: React.ReactNode,
    notification: React.ReactNode,
    revenue: React.ReactNode,
    user: React.ReactNode,
    login: React.ReactNode
}) {
    const isLogedIn = true;

    return isLogedIn ? (<>
        {children}
        <div className="flex">
            <div className="flex flex-col w-2/5">
                {notification}
                {revenue}
            </div>
            <div className="flex-1">{user}</div>
        </div>
    </>) : (<>
        {login}
    </>);
};
