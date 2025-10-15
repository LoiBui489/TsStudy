// "use client" should be added as down as possible in the DOM structure (mean the Leaf node)
// cause it will make the component and all the children (<Chilren /> not the children prop) of the component run in the client-side

// And because of the reason above, there are some nested rules:
// CC nest in CC
// SC nest in SC
// CC nest in SC
// If want to make SC in CC, pass it as a children prop instead
"use client";

import { useTheme } from "@/components/theme-provider";
import { serverSideFunction } from "../../utils/server-utils";

export default function ClientRoute() {
    // Not good. Need to prevent this
    const result = serverSideFunction();
    const theme = useTheme();

    return <h1 style={{ color: theme.colors.primary }}>Client Route with {result}</h1>;
};