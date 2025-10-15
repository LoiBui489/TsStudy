import { NextRequest } from 'next/server';
import { Comment, comments } from './data';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredCommnent = query ? comments.filter((comment) => comment.content.includes(query)) : comments;

    return Response.json(filteredCommnent);
}

export async function POST(req: Request) {
    const comment: Comment = await req.json() as Comment;
    const newComment: Comment = {
        id: comments.length + 1,
        content: comment.content,
    };
    comments.push(newComment);

    // Another way to set header and cookie
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json", 
            "Set-Cookie": "XSRF-TOKEN=1234"
        },
        status: 201
    });
}