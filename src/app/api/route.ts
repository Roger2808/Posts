import postgres from "postgres";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const data = await request.json();

    await validatePost(data);

    await savePost(data);

    return NextResponse.json({
        message: 'Post Save Correctly'
    });

}

async function savePost(data: any): Promise<void>{
    const connectionString = 'postgresql://postgres.ngqewaaalsclmldmhwbm:IbanezGio28*@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
    const sql = postgres(connectionString);

    await sql`INSERT INTO Posts (title, description, author) VALUES (${data.title}, ${data.description}, ${data.author});`;

}

async function validatePost(data: any){
    if (!data.title || data.title.length === 0) {
        throw new Error("Title can't be empty.");
    }
    if (data.title[0] !== data.title[0].toUpperCase()) {
        throw new Error("Titulo debe iniciar con mayuscula.");
    }

    if (!data.description || data.description.length === 0) {
        throw new Error("Description can't be empty.");
    }

    if (!data.author || data.author.length === 0) {
        throw new Error("Author can't be empty.");
    }
    if (data.author[0] !== data.author[0].toUpperCase()) {
        throw new Error("Autor debe iniciar con mayuscula.");
    }
}
