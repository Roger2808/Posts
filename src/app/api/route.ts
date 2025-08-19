
import { NextRequest, NextResponse } from "next/server";
import PostPublish from "../utils/post-publish";


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const post = new PostPublish();

        await post.run(data.title, data.description, data.author);

        return NextResponse.json({
            message: 'Post Save Correctly'
        });
    } catch (error) {
        console.error('Error saving post:', error);
        return NextResponse.json({
            error: "Failed to save post"
        })
    }

}
