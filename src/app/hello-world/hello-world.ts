export class HelloWorld {
    public message: string = '';

    constructor(data?: any) {
        if (data) {
            this.message = data.message;
        }
    }
}