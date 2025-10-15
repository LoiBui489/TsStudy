// When navigating within the UI, NextJs retains the state of the active Slot regardless of the change in the URL
// Mean: /dashboard -> Dashboard but /dashboard/read-notification -> Dashboard but change the notification Slot to read-notification Slot

// When reload page at /dashboard/read-notification, NextJs will search for the default.tsx file for the unmatch Slot
// If there is missing any default.tsx file, NextJs will return 404 error

export default function DefaultDashboard() {
    return <h1>Dashboard</h1>
};