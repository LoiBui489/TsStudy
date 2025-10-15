import { serverSideFunction } from "../../utils/server-utils";

// When using third-party library that need to run in the client-side component
// use that library in your own client-side component then call it in the server-side component
// Like what have done with the "ThemeProvider"
export default function ServerRoute() {
    const result = serverSideFunction();

    return <h1>Server Route with {result}</h1>;
};
