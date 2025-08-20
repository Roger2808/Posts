import { NextRequest, NextResponse } from "next/server";
import PostPublish from "../utils/post-publish";
import PostgresPostRepository from "../utils/postgres-post-repository";
import postgres from "postgres";
import PostSearcher from "../utils/post-searcher";


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const repository = new PostgresPostRepository;

        const post = new PostPublish(repository);

        await post.run(data.title, data.description, data.author);

        return NextResponse.json({
            message: 'Post Save Correctly'
        });
    } catch (error) {
        console.error('Error saving post:', error);
        return NextResponse.json({
            error: "Failed to save post"
        });
    }

}


export async function GET(){
    try {
        const repository = new PostgresPostRepository;

        const post = new PostSearcher(repository);

        const posts = await post.run();

        return NextResponse.json(posts);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
