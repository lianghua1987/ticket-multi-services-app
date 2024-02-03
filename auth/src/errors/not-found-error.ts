import {CustomError} from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode = 404;
    reason = 'Route not found';

    constructor() {
        super('Route not found');
        // Only because extend a build-in class
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{message: this.reason}];
    }
}