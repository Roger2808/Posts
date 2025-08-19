export default class PostDescription {
    public value: string
    constructor (value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(description: string) {
        if (!description || description.length === 0) {
            throw new Error("Description can't be empty.");
        }
    }
}