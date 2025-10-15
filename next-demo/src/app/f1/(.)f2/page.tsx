// The folder start with (.) called "Intercepted Route"
// (.) to intercept the route in the same level
// (..) to intercept the route in one level above
// (..)(..) to intercept the route in two levels above
// (...) to intercept the route in root level
// The intercepted route allows you to stop the default behavior of the route to present an alternate View or Component while preserving the route for scenario like page reload
// It's like open a modal
// Can be useful when you need to show a route while keeping the context of current page

export default function InterceptedF2() {
    return <h1>Intercepted F2</h1>;
};
