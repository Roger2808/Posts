import postgres, { Sql } from "postgres";
import PostRepository from "./post-repository";
import Post from "./post";

export default class PostgresPostRepository implements PostRepository{
    private readonly sql: Sql;
    constructor(){
        const connectionString = 
            'postgresql://postgres.ngqewaaalsclmldmhwbm:IbanezGio28*@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
        this.sql = postgres(connectionString);
    }

    async save(post: Post){
        try{
            const title = post.title;
            const description = post.description;
            const author = post.author;
            await this.sql`INSERT INTO "Posts" (title, description, author) VALUES (${title.value}, ${description.value}, ${author.value});`;
        } catch {
            throw new Error("Failed to save post");
        }
    }

    async view(){
        try {
            const posts = await this.sql`SELECT * FROM "Posts"`;
            return posts;
        } catch (error: any) {
            throw new Error("500")
        }
    }

    async modify(title: string, description: string, author: string, id: string){
        try {
            await this.sql`
            UPDATE "Posts" SET title = ${title}, description = ${description}, author = ${author}
            WHERE id = ${id}`;
        } catch (error: any) {
            throw new Error("Error al modificar");
        }
    }

    async delete(id: string){
        try {
            await this.sql`DELETE FROM "Posts" WHERE id = ${id}`;
        } catch (error: any) {
            throw new Error("500");
        }
    }
}
