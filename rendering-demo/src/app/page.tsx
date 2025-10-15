import Image from "next/image";

export default function Home() {
  return (
    <h1>Rendering Demo</h1>
  );
}

// Static Rendering (default strategy):
// - Generated at build time
// - Along with the HTML, RSC payloads for components and JS chunks for client-side hydration are created
// - Drirect route visit the server HTML file
// - Client-side navigation use RSC payload and JS chunks without additional server requests
// - Greate for performance, especially for static pages (mean can be shared between multiple users) like blog, documentation, ...

// Dynamic Rendering:
// - Generated at request time
// - Useful when need to show personalized data that only avaiable at request time like cookies, URL search params, ...
// - News web, Persionalized shopping pages or Social media feeds are some examples
// NextJS auto switch to Dynamic Rendering when it detects a "dynamic function" or "dynamic api" is called
// Dynamic Function: cookies(), headers(), connection(), draftMode(), searchParams prop, after()