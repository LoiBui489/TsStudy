'use client';
// import { useState } from "react";

export default function authTemplate({
    children,
}: {
    children: React.ReactNode
}) {
    // const [input, setInput] = useState('');

    return (<>
        {/*
            Same with the layout.tsx, the template can be used to wrap each child layout or page
            But with template, when navigate between routes that shared a template, new instance will be created
                DOM are recreated, state is not preserved, effects are re-syncronized
            Template can be use alone or combined with layout
            The page's export is pass to the template's children
            The template's export is pass to the layout's children  
        */}
        {/* <div>
            <label htmlFor="testInput">Test Input From template:&nbsp;</label>
            <input id="testInput" value={input} onChange={(e) => setInput(e.target.value)} />
        </div> */}
        {children}
    </>)
};