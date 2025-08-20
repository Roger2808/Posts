import { NextRequest, NextResponse } from "next/server";
import PostPublish from "../utils/post-publish";
import PostgresPostRepository from "../utils/postgres-post-repository";
import postgres from "postgres";


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
        })
    }

}


export async function GET(){
    try {
        const connectionString = 
            'postgresql://postgres.ngqewaaalsclmldmhwbm:IbanezGio28*@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
        const sql = postgres(connectionString);
        const posts = await sql`SELECT * FROM "Posts"`;
        return NextResponse.json(posts);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}