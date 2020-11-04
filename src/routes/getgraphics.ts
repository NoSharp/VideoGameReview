import BaseEndpoint from "./abstract/baseendpoint";
import {HttpResponse} from "uWebSockets.js";


export default class GetGraphics extends BaseEndpoint{
    constructor() {
        super("graphics");
    }

    onRequest(req: HttpResponse, res: HttpResponse) {
        req
            .writeStatus("200 OK")
            .end(`{"lines":["The graphics of the game are relatively minimalistic however and 8-bit, this means you can run Minecraft with a rather lower end GPU and not see a massive performance decrease. Rather the game depends on a large amount of RAM and CPU power to achieve everything in the game.","The graphics also recently were re-done to almost bring the game’s graphics a bit forward, with the push to ray tracing and other graphical improvements."]}`);
    }
}