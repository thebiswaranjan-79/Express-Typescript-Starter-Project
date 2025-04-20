import { AppError } from "./app.error";

export class InternalServerError implements AppError {
    statusCode: number;
    message: string;
    name : string;

    constructor(message : string){
        this.statusCode = 500;
        this.message = message;
        this.name = "InternalServerError"
    }
}