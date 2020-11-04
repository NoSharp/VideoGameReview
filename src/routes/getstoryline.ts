import BaseEndpoint from "./abstract/baseendpoint";
import {HttpResponse} from "uWebSockets.js";


export default class GetStoryline extends BaseEndpoint{
    constructor() {
        super("graphics");
    }

    onRequest(req: HttpResponse, res: HttpResponse) {
        req
            .writeStatus("200 OK")
            .end(`{"lines":["For Minecraft there is no linear main-quest or story line.","It essentially tells the player to find their own way to the end of the game with just hints of how to get there on the way through the game.",            "The game doesn’t stop either when you beat the final boss, as you still have a lot more to-do of whatever you like, as it’s an open-world sandbox adventure game."]}`);
    }
}