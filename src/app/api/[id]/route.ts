import PostDelete from "@/app/utils/post-delete";
import PostUpdate from "@/app/utils/post-update";
import PostgresPostRepository from "@/app/utils/postgres-post-repository";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const data = await request.json();
        
        const repository = new PostgresPostRepository;

        const post = new PostUpdate(repository);

        await post.run(data.title, data.description, data.author, params.id);

        return NextResponse.json({ message: "Post actualizado correctamente" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const data = await request.json()

        const repository = new PostgresPostRepository;

        const post = new PostDelete(repository);

        await post.run(params.id);

        return NextResponse.json({ message: "Post eliminado correctamente" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
