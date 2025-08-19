export default class PostTitle {
    public value: string
    constructor (value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(title: string){
        if (!title || title.length === 0) {
            throw new Error("Title can't be empty.");
        }
        if (title[0] !== title[0].toUpperCase()) {
            throw new Error("Titulo debe iniciar con mayuscula.");
        }
    }
}