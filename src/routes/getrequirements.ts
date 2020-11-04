import BaseEndpoint from "./abstract/baseendpoint";
import {HttpResponse} from "uWebSockets.js";


export default class GetRequirements extends BaseEndpoint{
    constructor() {
        super("requirements");
    }

    onRequest(req: HttpResponse, res: HttpResponse) {
        req
            .writeStatus("200 OK")
            .end(`{"lines":["To run the game, there are none. You could probably run the game on your 1990’s laptop without many difficulties, of course the Frames per second at which it runs might not be great.","The recommended components to achieve 60 FPS (https://www.systemrequirementslab.com/cyri/requirements/minecraft/11356) is:Intel I5-4690 / AMD A10-7800 APU or better\n4 GB of ram DDR4 or better\nGeforce 700 Series or AMD Radeon Rx200 series or better"]}`);
    }
}