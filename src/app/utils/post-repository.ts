import { NextResponse } from "next/server";
import Post from "./post";
import postgres, { Row, RowList } from "postgres";

export default interface PostRepository {
    save(post: Post): Promise<void>;

    view(): Promise<RowList<Row[]>>;

    modify(title: string, description: string, author: string, id: string): Promise<void>;

    delete(id: string): Promise<void>;
}
