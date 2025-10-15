import { headers, cookies } from 'next/headers';
import { Comment, comments } from '../data';
import { redirect } from 'next/navigation';

export async function GET(
    req: Request, 
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === Number(id)) ?? null;

    return Response.json(comment);
}

export async function PATCH(
    req: Request, 
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const { content } = await req.json() as Comment;

    const index = comments.findIndex((comment) => comment.id === Number(id));
    if (index === -1) {
        return Response.json("Comment not found", { status: 200 });
    }
    comments[index].content = content;

    return Response.json(comments[index]);
}

export async function DELETE(
    req: Request, 
    { params }: { params: Promise<{ id: string }> }
) {
    // Get request header, set response header
    // const headerList = await headers();
    // headerList.set("Content-Type", "application/json");
    // const authToken = headerList.get("Authorization");
    // console.log(authToken);

    // Get set cookie
    // const cookieList = await cookies();
    // const theme = cookieList.get("theme");
    // cookieList.set("resultPerPage", "10");
    // console.log(theme);

    const { id } = await params;
    const index = comments.findIndex((comment) => comment.id === Number(id));
    if (index === -1) {
        return Response.json("Comment not found", { status: 200 });
    }

    const delteledComment = comments[index];
    comments.splice(index, 1);

    // return redirect("/comment/");
    return Response.json(delteledComment);
}