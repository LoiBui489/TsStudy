import "./styles.css";

// Layout can be nested
// Layout can be apply for Route Group
// "children" is the "page.tsx" or smaller "layout.tsx" was called

// metadata is for SEO
// metadata is read from root level to the final level. The result is the combined of all metadata read
// If there is the same key, the last one will be used

// Wrap order is Layout -> Template -> ErrorBoundary fallback Error -> Suspense fallback Loading -> ErrorBoundary fallback NotFound -> Page
export const metadata = {
  title: {
    // The title that overide the parent's template title 
    // absolute: "Absolute title",
    // The default title when there is no child's title pass in
    default: "Next Demo",
    // The title when there is a child's title
    template: "%s | Next Demo",
  },
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en"> 
      <body>
        <div className="container w-11/12 mx-auto">
          <header className="fixed top-0 left-0 w-full bg-gray-200">Header</header>
          <div className="text-center content-center h-screen w-full">
            {children}
          </div>
          <footer className="fixed bottom-0 left-0 w-full bg-gray-200">Footer</footer>
        </div>
      </body>
    </html>
  );
}
