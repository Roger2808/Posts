export default class PostAuthor {
    public value: string
    constructor (value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(author: string) {
        if (!author || author.length === 0) {
            throw new Error("Author can't be empty.");
        }
        if (author[0] !== author[0].toUpperCase()) {
            throw new Error("Autor debe iniciar con mayuscula.");
        }
    }
}