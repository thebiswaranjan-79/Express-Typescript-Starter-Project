import { AppError } from "./app.error";

export class UnauthorizedError  implements AppError {
    statusCode: number;
    message: string;
    name : string;

    constructor(message : string){
        this.statusCode = 401;
        this.message = message;
        this.name = "UnauthorizedError "
    }
}