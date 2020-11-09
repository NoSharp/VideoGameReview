import BaseEndpoint from "./abstract/baseendpoint";
import {HttpResponse} from "uWebSockets.js";


export default class GetMusic extends BaseEndpoint{
    constructor() {
        super("music");
    }

    onRequest(req: HttpResponse, res: HttpResponse) {
        req
            .writeStatus("200 OK")
            .writeHeader("Access-Control-Allow-Origin","*")
            .end(`{"lines":["Minecraft’s music is very minimalistic the ambient music doesn’t add more to the game and acts more like a soundtrack for playing in the game.","The music is 8bit much like the game is, this gives it a nice theme that meshes well with the game.","The game’s music is trying to portray, most of the time, a very relaxed and creative environment.","In some instances, while fighting the ender dragon or when traveling to the nether the sound is much more intense or even just doesn’t play.","Players also can play soundtracks via the music block item which allows them to play one of many music discs."]}`)
    }
}