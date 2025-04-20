import { AppError } from "./app.error";

export class ForbiddenError  implements AppError {
    statusCode: number;
    message: string;
    name : string;

    constructor(message : string){
        this.statusCode = 403;
        this.message = message;
        this.name = "ForbiddenError "
    }
}