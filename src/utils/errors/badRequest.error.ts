import { AppError } from "./app.error";

export class BadRequestError implements AppError {
    statusCode: number;
    message: string;
    name : string;

    constructor(message : string){
        this.statusCode = 400;
        this.message = message;
        this.name = "BadRequestError"
    }
}