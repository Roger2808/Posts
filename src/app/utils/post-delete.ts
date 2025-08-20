import PostRepository from "./post-repository";

export default class PostDelete {
    private readonly repository: PostRepository;

    constructor(repository: PostRepository) {
        this.repository = repository;
    }

    public async run(id: string){
        await this.repository.delete(id);
    }

}