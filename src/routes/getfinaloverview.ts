import BaseEndpoint from "./abstract/baseendpoint";
import {HttpResponse} from "uWebSockets.js";


export default class GetFinalOverview extends BaseEndpoint{
    constructor() {
        super("finaloverview");
    }

    onRequest(req: HttpResponse, res: HttpResponse) {
        req
            .writeStatus("200 OK")
            .writeHeader("Access-Control-Allow-Origin","*")
            .end(`{"lines":["Rating: 10/10","The game was very good, it allowed me to be creative and do what I wanted.","The game also was extremely moddable with thanks to “forge” which is a very good modding framework for the game.","The game allowed me to play with friends via the use of the servers provided on the site, it was fairly easy to setup on most Dedicated Servers or VPS’s.","However, the game didn’t have a lot of progression past a certain point.","The game can get quite stale once you’ve reached the ender dragon.","The game server also utilizes quite a lot of ram."]}`)
    }
}