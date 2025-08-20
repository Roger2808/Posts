import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres("postgresql://postgres.ngqewaaalsclmldmhwbm:IbanezGio28*@aws-1-us-east-2.pooler.supabase.com:6543/postgres");

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const data = await request.json();
        const { title, description, author } = data;

        await sql`
        UPDATE "Posts" SET title = ${title}, description = ${description}, author = ${author}
        WHERE id = ${params.id}
        `;

        return NextResponse.json({ message: "Post actualizado correctamente" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await sql`DELETE FROM "Posts" WHERE id = ${params.id}`;
        return NextResponse.json({ message: "Post eliminado correctamente" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}