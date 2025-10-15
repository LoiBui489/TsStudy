// Prevent using in client-side component
// import 'server-only';
// Same we also have
// Prevent using in server-side component
// import 'client-only';
export const serverSideFunction = () => {
    console.info(`
        Use multiple libraries
        Use environment variables
        Interact with database
        Process confidential information
    `);
    return "Server Result"
}