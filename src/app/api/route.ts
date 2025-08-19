
import { NextRequest, NextResponse } from "next/server";
import PostPublish from "../utils/post-publish";


export async function POST(request: NextRequest) {
    const data = await request.json();

    const post = new PostPublish();

    post.validatePost(data);

    post.savePost(data);

    return NextResponse.json({
        message: 'Post Save Correctly'
    });

}
