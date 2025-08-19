import postgres from "postgres";
import Post from "./post";

export default class PostPublish {
    constructor () {}

    public async run(title: string, description: string, author: string){
        const post = Post.create(title, description, author);
        await this.savePost(post);
    }

    public async savePost(data: Post): Promise<void>{
        const connectionString = 'postgresql://postgres.ngqewaaalsclmldmhwbm:IbanezGio28*@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
        const sql = postgres(connectionString);

        const title = data.title;
        const description = data.description;
        const author = data.author;

        await sql`INSERT INTO "Posts" (title, description, author) VALUES (${title.value}, ${description.value}, ${author.value});`;

    }
}