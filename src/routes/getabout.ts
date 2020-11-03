import BaseEndpoint from "./abstract/baseendpoint";
import {HttpResponse} from "uWebSockets.js";


export default class GetAbout extends BaseEndpoint{
    constructor() {
        super("about");
    }

    onRequest(req: HttpResponse, res: HttpResponse) {
        req
            .writeStatus("200 OK")
            .end(`{"lines":["Minecraft is an 8bit styled sandbox, adventure game.","The whole point of the game is to survive the night and fight the end boss called the “ender dragon”.","Minecraft doesn’t just stop at the story line, there is a large community behind it creating fun mini-games and mods.","Minecraft is a heavily mod-able game as that comes with the territory of it being a sandbox games theirs near infinite possibilities of what you can do."]}`);
    }
}