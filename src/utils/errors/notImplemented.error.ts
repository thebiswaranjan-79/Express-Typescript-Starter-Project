import { AppError } from "./app.error";

export class NotImplementedError  implements AppError {
    statusCode: number;
    message: string;
    name : string;

    constructor(message : string){
        this.statusCode = 501;
        this.message = message;
        this.name = "NotImplementedError "
    }
}