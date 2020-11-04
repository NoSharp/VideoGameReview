import BaseEndpoint from "./abstract/baseendpoint";
import {HttpResponse} from "uWebSockets.js";


export default class GetOnlineGameplay extends BaseEndpoint{
    constructor() {
        super("onlinegameplay");
    }

    onRequest(req: HttpResponse, res: HttpResponse) {
        req
            .writeStatus("200 OK")
            .end(`{"lines":["The game has a very vast and innovative online experience, as servers of the years have managed to adapt to the confines of the game.","Development on online servers are quite fast thanks to modding tools like Spigot and Bukkit. Also the fact the main Protocol specification is public and can be used to create a Minecraft server from scratch in any language you desire (https://wiki.vg).", "Playing with friends is rather easy as you can install a pre-built Minecraft server from their main site(Minecraft.net) and have it setup in a matter of minutes."]}`);
    }
}