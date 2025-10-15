/*
    [...slug] is "required", mean http://localhost:3000/docs give 404 because there is no slug
    [[...slug]] is "optional", mean http://localhost:3000/docs will return "Docs home page". "slug" have to be null checked before  using is length property
*/

export default async function Docs({ 
    params
}: {
    params: Promise<{
        slug: string[];
    }>
}) {
    const { slug } = await params;

    if (slug?.length == 2) {
        return <h1>Docs for feature { slug[0] } and concept { slug[1] }</h1>
    } else if (slug?.length == 1) {
        return <h1>Docs for feature { slug[0] }</h1>
    } else {
        return <h1>Docs home page</h1>
    }
};
