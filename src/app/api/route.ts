import postgres from "postgres";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const data = await request.json();

    if (!data.title || data.title.length === 0) {
        return NextResponse.json({message: "Title can't be empty."});
    }
    if (data.title[0] !== data.title[0].toUpperCase()) {
        return NextResponse.json({message: "El título debe empezar con mayúscula."});
    }

    if (!data.description || data.description.length === 0) {
        return NextResponse.json({message: "La descripción no puede estar vacía."});
    }

    if (!data.author || data.author.length === 0) {
        return NextResponse.json({message:"El autor no puede estar vacío."});
    }
    if (data.author[0] !== data.author[0].toUpperCase()) {
        return NextResponse.json({message:"El autor debe empezar con mayúscula."});
    }
    
    const connectionString = 'postgresql://postgres.ngqewaaalsclmldmhwbm:IbanezGio28*@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
    const sql = postgres(connectionString);

}
