import {HttpResponse} from "uWebSockets.js";

export default abstract class BaseEndpoint{

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `/api/v1/${endpoint}`;
    }

    // Called when we get a request from the HTTP server.
    abstract onRequest(req: HttpResponse, res: HttpResponse);
}