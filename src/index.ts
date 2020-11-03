import HTTPServer from "./httpserver/HTTPServer";
import {load} from "./loader";

let httpServer = new HTTPServer(9000);
httpServer.addRoute("/test", (res, req)=>{
    res
        .writeStatus("200 OK")
        .end("<h1> HELLO WORLD! </h1>");
})
//
load(httpServer);
//
httpServer.listen(()=>{
    console.log("server online")
});