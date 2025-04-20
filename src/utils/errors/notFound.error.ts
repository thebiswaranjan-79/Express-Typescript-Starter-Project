import { AppError } from "./app.error";

export class NotFoundError implements AppError {
    statusCode: number;
    message: string;
    name : string;

    constructor(message : string){
        this.statusCode = 404;
        this.message = message;
        this.name = "NotFoundError"
    }
}