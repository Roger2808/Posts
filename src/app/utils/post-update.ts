import Post from "./post";
import PostRepository from "./post-repository";

export default class PostUpdate {
    private readonly repository: PostRepository;

    constructor(repository: PostRepository) {
        this.repository = repository;
    }

    public async run(title: string, description: string, author: string, id: string){
        await this.repository.modify(title, description, author, id);
    }

}